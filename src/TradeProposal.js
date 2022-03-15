import React from "react";
import './App.css';
import FooterMenu from "./FooterMenu.jsx";
import HeaderNonHome from "./HeaderNonHome.js";
import {useState} from "react";

export default function TradeProposal(){
    const [showButton, setShowButton] = useState(false)
    const [style, setStyle] = useState("post");

    function postClicked(){
        setStyle('post-clicked')
        setShowButton(true)
    }
    if(showButton){
        return(
        <div className='App'>
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
          </head>
          <HeaderNonHome />
            <div className='main-body-proposal'>
              <div className='area-for-posts'>
               <div className='selected-item'>
                  <p>
                   Item from tswizzle closet:
                  </p>
                  <img src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='post-clicked'/>
                </div>
                <div className='my-items'>
                    <p>Select an item to trade: </p>
                    <div className='user-posts-trade'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFX7u8F1apSwcRsWH1v-eq4vxaWI42Tj3PA&usqp=CAU' className='post'/>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRdjsXA_o8qbdY_wKRnmqNzZTrH2Rll9LYg&usqp=CAU' className={style}
                      onClick={postClicked}/>
                    </div>
                </div>
               </div>
                <button className='propose-trade-btn'>Propose Trade</button>
            </div>
            <FooterMenu />
        </div>
        )
    }
    return(
        <div className='App'>
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
          </head>
          <HeaderNonHome />
            <div className='main-body-proposal'>
              <div className='area-for-posts'>
               <div className='selected-item'>
                  <p>
                   Item from tswizzle closet:
                  </p>
                  <img src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='post-clicked'/>
                </div>
                <div className='my-items'>
                    <p>Select an item to trade: </p>
                    <div className='user-posts-trade'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFX7u8F1apSwcRsWH1v-eq4vxaWI42Tj3PA&usqp=CAU' className='post'/>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiRdjsXA_o8qbdY_wKRnmqNzZTrH2Rll9LYg&usqp=CAU' className={style}
                    onClick={postClicked}/>
                    </div>
                </div>
              </div>
            </div>
          <FooterMenu />
          </div>
    )
}