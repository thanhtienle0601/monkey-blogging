/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm6msVO4DEs4Y6w4bzK7VReqmuK7cnMp4",
  authDomain: "monkey-blogging-e2d94.firebaseapp.com",
  projectId: "monkey-blogging-e2d94",
  storageBucket: "monkey-blogging-e2d94.appspot.com",
  messagingSenderId: "893863410895",
  appId: "1:893863410895:web:41cad64a7c92fffacbcbba",
  measurementId: "G-Y3XL7MBHV1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
