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
          <p>Your Friends: </p>
          <div className='user' onClick={() => navigate('/shoefiend60809')}>
            <img className='profile-pic' src ='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
            <p>shoefiend60809</p>
          </div>
          <div className='user' onClick={() => navigate('/tswizzle')}>
            <img className='profile-pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZTr4JtnxsCCMw0_XsvMmf3qztHxnKPas5Q&usqp=CAU' />
            <p>tswizzle</p>
          </div>
        </div>
        <FooterMenu />
      </ div>
  )
}
