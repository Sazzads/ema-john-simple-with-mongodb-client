// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA17v3ggmuYyoh7SPsxcXVOtazkLkFmpE",
    authDomain: "ema-john-with-firebase-a-f0d95.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-f0d95",
    storageBucket: "ema-john-with-firebase-a-f0d95.appspot.com",
    messagingSenderId: "682063999640",
    appId: "1:682063999640:web:0afb33cbd8217c76b156ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;