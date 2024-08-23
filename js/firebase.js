// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdSevJ5ZmYWDu5pkccpEFWjRyTnDv3blM",
  authDomain: "ctphackathon-cunynews.firebaseapp.com",
  databaseURL: "https://ctphackathon-cunynews-default-rtdb.firebaseio.com",
  projectId: "ctphackathon-cunynews",
  storageBucket: "ctphackathon-cunynews.appspot.com",
  messagingSenderId: "183597557455",
  appId: "1:183597557455:web:2d1f962e30d6dfc54f39ba",
  measurementId: "G-L14QF14BH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);