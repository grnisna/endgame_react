// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6gkWWQAU4VtRHJmmj_1Pi_Kaod71cIiI",
    authDomain: "endgamereact.firebaseapp.com",
    projectId: "endgamereact",
    storageBucket: "endgamereact.appspot.com",
    messagingSenderId: "1067871926455",
    appId: "1:1067871926455:web:ae1534b1e4372ef6937532"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;