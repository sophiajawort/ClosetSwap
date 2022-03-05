import React from "react";
import './App.css';
import FooterMenu from "./FooterMenu.jsx";
import HeaderNonHome from "./HeaderNonHome.js";
import ProfilePicture from "./ProfilePicture.js";
import NamePicker from "./NamePicker.js";
import UserBio from "./UserBio.js"
import { useDB, db } from "./firebase.js"
import { useParams, useNavigate } from "react-router-dom";
import { BsGear } from "react-icons/bs";
import { getStorage, ref } from "firebase/storage";


export default function ProfilePage(){
  const params = useParams();
  const navigate = useNavigate();
  const user = params.user || "home";
  const posts = useDB(user);

    return(
        <div className="App">
        {/* Importing Google fonts */}
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
          </head>
          {/* Creating Header with button to navigate home */}
          <HeaderNonHome />
          { /* Profile information will contain a profile picture, name, description, and posts */}
          <body className = 'main-body'>
            {/* Button to navigate to change profile info */}
            <button className='profile-settings' onClick={() => navigate('/profile-settings')}>
              < BsGear />
            </button>
            <div className="profile-information">
              {/* profile pic */}
              < ProfilePicture />
              {/* User name  */}
              <NamePicker/>
            </div>
            {/* User Bio */}
            < UserBio />
            <div className='users-posts'>
              Current Items:
              Need to figure out how to use databases to add postssss
            </div>
          </body>
          <FooterMenu />
        </div>
    )
}