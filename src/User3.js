import React from "react";
import './App.css';
import FooterMenu from "./FooterMenu.jsx";
import HeaderNonHome from "./HeaderNonHome.js";
import db from "./firestore.js"
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import {useState, useEffect} from "react";


export default function User3(){
  const [user, setUser] = useState()
  const[profilePic, setPic] = useState("")
  const[username, setUsername]=useState("")
  const[bio, setBio] = useState("")
  const[posts, setPosts] = useState([])

  /* Getting main user data to build up profile page */
  useEffect( async () => {
    const docRef = doc(db, "users", "user3");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUser(docSnap.data())
      setPic(user.picture)
      setUsername(user.username)
      setBio(user.bio)
      setPosts(user.posts)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    console.log(profilePic)
    console.log("posts: ", posts)
  }
  )

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
          {/*<button className='create-new-post-button' onClick={() => navigate('/create-post')}>
            Create Post
          </button>*/}
          { /* Profile information will contain a profile picture, name, description, and posts */}
          <div className = 'main-body'>
            {/* Button to navigate to change profile info */}
            <div className="profile-information">
              {/* profile pic */}
              < img className='profile-pic' src={profilePic}/>
              {/* User name  */}
              <div className="username"/>
                {username}
              </div>
            {/* User Bio */}
            <p>Bio:</p>
            < div className='user-bio'>
              {bio}
            </div>
            <p>Posts:</p>
            <div className='user-posts'>
              {posts.map((post) => {
                console.log(post)
                return (
                 <img className="post" src={post} />
                );
              })}
            </div>
          </div>
          <FooterMenu />
        </div>
    )
}