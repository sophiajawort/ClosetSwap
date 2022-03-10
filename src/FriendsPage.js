import React from "react";
import './App.css';
import HeaderNonHome from "./HeaderNonHome.js";
import FooterMenu from "./FooterMenu.jsx";
import db from "./firestore.js";
import { collection, query, where, getDocs, limit, orderBy } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

export default function FriendsPage(){
  const navigate = useNavigate();
  const[docs, setDocs] = useState([]);
  const [value, setValue] = useState('');
  const q = query(collection(db, "users"), where("not-main", "==", true));
  useEffect( async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let user = doc.data()
      setDocs((docs) => [...docs, user])
    });
  }
  )
    return(
      <div className="App">
        {/* Importing google fonts */}
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
        </head>
        <HeaderNonHome />
        <div className='list-users'>
          {docs.map((doc) => {
            console.log('current doc', doc)
            return(
              <img className='profile-picture' src={doc.picture}
              onClick={() => navigate('/user2')} />
            )
          })}
        </div>
        <FooterMenu />
      </ div>
  )
}
