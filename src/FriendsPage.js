import React from "react";
import './App.css';
import HeaderNonHome from "./HeaderNonHome.js";
import FooterMenu from "./FooterMenu.jsx"

export default function FriendsPage(){
    return(
        <div className="App">
          {/* Importing google fonts */}
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
          </head>
          <HeaderNonHome />
          <div>On DA Friends Page</div>
          <FooterMenu />
        </ div>
    )
}