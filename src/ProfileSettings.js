import React from "react";
import ProfilePicture from "./ProfilePicture.js";
import HeaderNonHome from "./HeaderNonHome.js";
import FooterMenu from "./FooterMenu.jsx";
import NamePicker from "./NamePicker.js";
import UserBio from "./UserBio.js"
import { useState } from "react";
import { useDB, db } from "./firebase.js";
import Camera from 'react-snap-pic';
import { getStorage, ref } from "firebase/storage";

export default function ProfileSettings(){
  const storage = getStorage();
  const [showCamera, setShowCamera] = useState(false)
  const appUsers = useDB();

  let [picture, setPicture] = useState()
  let [bio, setBio] = useState()
  let pictureRef;

  // Create User when user presses confirm for their profile info
  function createUser(username){
    // we'll create a new User object
    const newUser = {
      biography:bio,
      profilepicture:pictureRef,
      user: username,
    };
    db.send(newUser);
  }

  return(
    <div className="App">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
        </head>
        <HeaderNonHome/>
        <ProfilePicture/>
        {/* User name  */}
        <NamePicker />
        {/* User Bio */}
        < UserBio setBio = {setBio}/>
        <button onClick={createUser}>
            Submit Profile Info
        </button>
        <FooterMenu/>
    </div>
    );
}