import React from "react";
import './App.css';
import FooterMenu from "./FooterMenu.jsx"

function App() {
  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <header className="header">
        <div className='title'> Closet Swap </div>
      </header>
      <div className="main-body">
        <div className="welcome-text">
          Welcome to Closet Swap! We aim to provide sustainable solutions to keep you in
          style! On Closet Swap you can buy, and trade clothes with your friends and other users
          in the nearby area!
        </div>
      </div>
      < FooterMenu />
    </div>
  );
}

export default App;
