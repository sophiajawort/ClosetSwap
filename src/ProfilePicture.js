/* eslint-disable jsx-a11y/alt-text */
import {useState} from "react";
import React from 'react';
import FileUpload from './FileUpload.js'

export default function ProfilePicture(props){
  const [image, setImage] = useState(null);
  const [showInput, setShowInput] = useState(false);

  /* Updating image to be the chosen file */

  console.log("Image: ", image);
  /* Want camera to display if haven't taken a picture, picture if they have */
  /* showInput true, show picture */
  if(showInput){
    return(
      <img className="profile-pic"
        src={image}/>
    );
    /*
      const picture = props.initialPic
      return(
        <img className="profile-pic"
        src={picture}/>
      )
    */
  }else{
      return(
        < FileUpload />

        /*
        <button onClick={props.showCamera} className="profile-pic">
            Add a profile picture
        </button>
        */
      )
  }
}