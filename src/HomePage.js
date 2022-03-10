import React from "react";
import './App.css';
import FooterMenu from "./FooterMenu.jsx";
import HeaderNonHome from "./HeaderNonHome.js";
import db from "./firestore.js"
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import {useState, useEffect} from "react";

function HomePage(){
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState()
    const navigate = useNavigate();
    useEffect( async () => {
        const docRef = doc(db, "users", "home-page");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setUser(docSnap.data())
          setPosts(user.posts)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }
      )

    return(
        <div className= "main-body">
            <p>
                Welcome to Closet Swap! We aim to provide sustainable solutions to keep you in
                style! On Closet Swap you can trade clothes with your friends and other users
                in the nearby area!
            </p>
            <p>Clothes Near You:</p>
            <div className = "user-posts">
                {posts.map((post) => {
                console.log(post)
                return (
                 <img className="post" src={post} onClick={() => navigate('/trade-proposal')} />
                );
              })}
            </div>

        </div>
    )
}

export default HomePage