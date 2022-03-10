import React from "react";
import './App.css';
import FooterMenu from "./FooterMenu.jsx";
import HeaderNonHome from "./HeaderNonHome.js";
import{ BsArrowLeftRight } from "react-icons/bs";

export default function Trades(){
    return(
    <div className='App'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Ubuntu:wght@300;400&display=swap" rel="stylesheet" />
      </head>
     <HeaderNonHome />
     <p>Current Trades:</p>
      <div className='trade-body'>
        <div className='trade'>
          <div className='trade-item'>
            <img className="post" src="https://images.pexels.com/photos/7520587/pexels-photo-7520587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            <img className='profile-pic' src='https://media-exp1.licdn.com/dms/image/C5603AQEoI5fRCBZ0WQ/profile-displayphoto-shrink_800_800/0/1638204829030?e=1652313600&v=beta&t=vw1ODNV1QNqUdQiRnS5oZghMmLiBMOwyUoNYB4Me6NY' />
          </div>

          < BsArrowLeftRight />

          <div className='trade-item'>
            <img className="post" src="https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            <img className='profile-pic' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
          </div>
        <div className="btn-container">
          <button> Approve </button>
          <button> Deny </button>
        </div>
        </div>

        <div className='trade'>
          <div className='trade-item'>
            <img className="post" src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            <img className='profile-pic' src='https://media-exp1.licdn.com/dms/image/C5603AQEoI5fRCBZ0WQ/profile-displayphoto-shrink_800_800/0/1638204829030?e=1652313600&v=beta&t=vw1ODNV1QNqUdQiRnS5oZghMmLiBMOwyUoNYB4Me6NY' />
          </div>

          < BsArrowLeftRight />

          <div className='trade-item'>
            <img className="post" src="https://images.pexels.com/photos/6594253/pexels-photo-6594253.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
            <img className='profile-pic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZTr4JtnxsCCMw0_XsvMmf3qztHxnKPas5Q&usqp=CAU' />
          </div>
          <div className="btn-container">
            <button> Approve </button>
            <button> Deny </button>
          </div>
        </div>
      </div>
      <FooterMenu/>
    </div>
    )
}