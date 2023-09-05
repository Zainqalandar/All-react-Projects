import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB39P0uqDLQhimzjIoW3CA5ZOOImDAwmq4",
  authDomain: "react-chatapp-de020.firebaseapp.com",
  databaseURL: "https://react-chatapp-de020-default-rtdb.firebaseio.com",
  projectId: "react-chatapp-de020",
  storageBucket: "react-chatapp-de020.appspot.com",
  messagingSenderId: "688246609786",
  appId: "1:688246609786:web:e49a46140ff2ce764da8c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
 
)
