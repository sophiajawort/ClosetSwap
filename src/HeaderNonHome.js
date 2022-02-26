import React from "react";
import { BsHouseFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

export default function HeaderNonHome(){
    const navigate = useNavigate();
    return(
      <header className="header-non-home">
        <button
        onClick={() => navigate('/')}>
            <BsHouseFill />
        </button>
        <div className='title'> Closet Swap </div>
      </header>
    )
}