import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import './index.css';
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrgrWVUc_Sx0QRFIKiAlrHB7U4Iv-IFzw",
  authDomain: "danddragons-9f9de.firebaseapp.com",
  projectId: "danddragons-9f9de",
  storageBucket: "danddragons-9f9de.appspot.com",
  messagingSenderId: "935993487799",
  appId: "1:935993487799:web:d29ef1901618559a6ff832",
  measurementId: "G-5R6Y4NE7WF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
