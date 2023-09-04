import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhND7gUwpbKwmN4PdCp4EID76sx6WgtKI",
  authDomain: "myallchat-2f16c.firebaseapp.com",
  databaseURL: "https://myallchat-2f16c-default-rtdb.firebaseio.com",
  projectId: "myallchat-2f16c",
  storageBucket: "myallchat-2f16c.appspot.com",
  messagingSenderId: "893817889689",
  appId: "1:893817889689:web:484a156421812fe3af6908"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
