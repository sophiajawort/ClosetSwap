import React from "react";
import './App.css';
import FooterMenu from "./FooterMenu.jsx"
import HeaderNonHome from "./HeaderNonHome.js"

export default function ProfilePage(){
    return(
        <div className="App">
        {/* If I want these fonts on every page do I need to have this code there everytime? */}
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
          </head>
          {/* Creating Header with button to navigate home */}
          <HeaderNonHome />
          <div className="profile-information">
            {/* Want to do something similar to name picker, but picture picker? */}
            <img className="profile-picture" alt="user"/>

          </div>
          <FooterMenu />
        </div>
    )
}