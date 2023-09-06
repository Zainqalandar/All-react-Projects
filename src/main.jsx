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
  apiKey: "AIzaSyCz8DImHP3ak8Yqeafoz7E2q53R0EyUpoE",
  authDomain: "myreact-chat-596db.firebaseapp.com",
  databaseURL: "https://myreact-chat-596db-default-rtdb.firebaseio.com",
  projectId: "myreact-chat-596db",
  storageBucket: "myreact-chat-596db.appspot.com",
  messagingSenderId: "710033317656",
  appId: "1:710033317656:web:9bba2caa325089e3b4c86d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
 
)
