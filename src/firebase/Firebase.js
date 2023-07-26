import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAOud7S34laNy7Q2QsjWbEaGYQ7SpDyNjQ",
    authDomain: "expense-tracker-app-60041.firebaseapp.com",
    projectId: "expense-tracker-app-60041",
    storageBucket: "expense-tracker-app-60041.appspot.com",
    messagingSenderId: "261171488808",
    appId: "1:261171488808:web:e02568f2d103af9e9f2d1d",
    measurementId: "G-LJ6VC2GDLS"
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)