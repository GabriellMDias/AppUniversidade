import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhDJznDVBVFY0uCnqmriTtGB8eU4zlDT0",
    authDomain: "appuniversidade-b9b65.firebaseapp.com",
    projectId: "appuniversidade-b9b65",
    storageBucket: "appuniversidade-b9b65.appspot.com",
    messagingSenderId: "551726382452",
    appId: "1:551726382452:web:b2cc76bc99500cdb734021",
    measurementId: "G-XS4MGM8KJH"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
  