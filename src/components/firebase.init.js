// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkCnrTeR4IHcV-pRRQKyGq1HQr3uVzM2Y",
    authDomain: "assignment-11-3a9a2.firebaseapp.com",
    projectId: "assignment-11-3a9a2",
    storageBucket: "assignment-11-3a9a2.appspot.com",
    messagingSenderId: "327336997400",
    appId: "1:327336997400:web:e1bb740c69f3c2de30496d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth