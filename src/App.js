import React from "react";
import './App.css';
import HeaderHome from "./HeaderHome.js"
import FooterMenu from "./FooterMenu.jsx";
import HomePage from "./HomePage.js";
import ProfilePage from "./ProfilePage.js";
import FriendsPage from "./FriendsPage.js";
import CartPage from "./CartPage.js";
import { useDB, db } from "./db";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function Router() {
  return (
    // Making all the routes to different pages in the app
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage />}>
          <Route path="/:username" element={<ProfilePage />} />
        </Route>
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/cart" element={<CartPage />} />
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

