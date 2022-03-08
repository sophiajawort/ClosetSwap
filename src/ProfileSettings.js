import React from "react";
import ProfilePicture from "./ProfilePicture.js";
import HeaderNonHome from "./HeaderNonHome.js";
import FooterMenu from "./FooterMenu.jsx";
import NamePicker from "./NamePicker.js";
import UserBio from "./UserBio.js"
import { useState } from "react";
import { getStorage, ref } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import db from "./database";

export default function ProfileSettings(){
  const storage = getStorage();
  const [image, setImage] = useState();
  let [bio, setBio] = useState()

  // Create User when user presses confirm for their profile info
  const createUser = async (username) => {
    // we'll create a new User object
    let picture = document.getElementsByClassName("profile-pic");
    let src = picture[0].src
    setImage(picture[0].src)
    const collectionRef = collection(db, "users");
    const newUser =
      {
        biography:bio,
        profilepicture:src,
        user: username,
      }
    const docRef = await addDoc(collectionRef, newUser);
  }

  return(
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <HeaderNonHome/>
      <div className="profile-settings">
        <ProfilePicture/>
        {/* User name  */}
        <NamePicker />
        {/* User Bio */}
        < UserBio setBio = {setBio}/>
        <button onClick={createUser} className='submit-info-btn'>
            Submit Profile Info
        </button>
      </div>
        <FooterMenu/>
      </div>
    );
}