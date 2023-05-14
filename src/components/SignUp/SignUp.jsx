import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);
        setError('');

        if (password !== confirm) {
            setError('Your Password did not match')
            return;
        }
        else if (password.length < 6) {
            setError('Your Password must be six character longer')
            return;
        }
        createUser(email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required placeholder='email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required placeholder='password' />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required placeholder='Confirm password' />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an Account? <Link to="/login">Login</Link></small></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;