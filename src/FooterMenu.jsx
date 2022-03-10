import React from "react";
import { BsFillPersonFill, BsFillPeopleFill, BsArrowLeftRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


function FooterMenu(){
  const navigate = useNavigate();
    return(
        <footer className="footer">
        <button className="go-to-friends"
        onClick={() => navigate('/friends')}>
          <BsFillPeopleFill />
        </button>
        <button className="go-to-profile"
        onClick={() => navigate('/profile')}>
          <BsFillPersonFill />
        </button>
        <button className="go-to-cart"
        onClick={() => navigate('/trades')}>
          <BsArrowLeftRight />
        </button>
      </footer>
    )
}

export default FooterMenu