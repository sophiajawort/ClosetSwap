import React from "react";
import './App.css';
import FooterMenu from "./FooterMenu.jsx";
import HeaderNonHome from "./HeaderNonHome.js";

export default function TradeProposal(){
    return(
        <div className='App'>
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
          </head>
            <HeaderNonHome />
            <FooterMenu />
        </div>
    )
}