import React from "react";
import './App.css';
import HeaderHome from "./HeaderHome.js"
import FooterMenu from "./FooterMenu.jsx";
import HomePage from "./HomePage.js";
import ProfilePage from "./ProfilePage.js";
import FriendsPage from "./FriendsPage.js";
import User2 from "./user2.js";
import User3 from "./User3.js";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function Router() {
  return (
    // Making all the routes to different pages in the app
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/*<Route path='/create-post' element={<CreateNewPost />} />*/}
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/user2" element={< User2 />} />
        <Route path="/user3" element={< User3 />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <div className="App">
      {/* Importing google fonts */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      { /* Header, content, footer*/}
      <HeaderHome />
      <HomePage />
      <FooterMenu />
    </div>
  );
}

