import React from "react";
import './App.css';
import FooterMenu from "./FooterMenu.jsx";
import HeaderNonHome from "./HeaderNonHome.js";
import ProfilePicture from "./ProfilePicture.js";
import NamePicker from "./NamePicker.js";
import { useDB, db } from "./db";
import Camera from 'react-snap-pic';
import { useState } from "react";

export default function ProfilePage(){
  const [showCamera, setShowCamera] = useState(false)
  const [showInput, setShowInput] = useState(false);
  const posts = useDB(user);
  let [picture, setPicture] = useState()

  function takePicture(img){
    picture = setPicture(img)
    console.log(picture)
    setShowCamera(false)
    setShowInput(true)
  }

  function createUser(username){
    if (!username.trim()) return;
    // we'll create a new User object
    const newUser = {
      time: Date.now(),
      user: username,
    };
    db.send(newUser);
  }

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
          <div className="profile-information">
            {/* profile pic, take new one or show old one */}
            <ProfilePicture showCamera={()=>setShowCamera(true)}
            setPicture= {setPicture}
            initialPic={picture}
            showInput ={showInput}/>
            {showCamera && <Camera takePicture={takePicture} />}
           {/* User name  */}
           < NamePicker createUser={createUser}/>
          </div>
          <FooterMenu />
        </div>
    )
}