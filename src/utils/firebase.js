// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy1Ekyylg4O7NTU8Y2iDLimOXMf8JLYXw",
  authDomain: "netflix-8f3e2.firebaseapp.com",
  projectId: "netflix-8f3e2",
  storageBucket: "netflix-8f3e2.appspot.com",
  messagingSenderId: "709970696591",
  appId: "1:709970696591:web:260e2e9ddb95c3ea1553fa",
  measurementId: "G-9FRX1LVZNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth();