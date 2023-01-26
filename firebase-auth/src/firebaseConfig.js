// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDuReW80_lhrJCk05G1GiVN9fgR5HSYyuE",
    authDomain: "fir-auth-ec1ee.firebaseapp.com",
    projectId: "fir-auth-ec1ee",
    storageBucket: "fir-auth-ec1ee.appspot.com",
    messagingSenderId: "584420925307",
    appId: "1:584420925307:web:ca48e6aba803e84e5267de",
    measurementId: "G-GWE1NSDFG6",
    // databaseURL: ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()

export { app, auth }