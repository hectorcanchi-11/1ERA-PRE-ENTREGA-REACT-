import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyD-ILdQwFZadkAtjMZtvriLqHv_Z-GbMZU",
  authDomain: "ksbelleza-5de3c.firebaseapp.com",
  projectId: "ksbelleza-5de3c",
  storageBucket: "ksbelleza-5de3c.appspot.com",
  messagingSenderId: "514418290990",
  appId: "1:514418290990:web:2cfcb33b414a9fb72d8abf"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
