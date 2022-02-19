import React from "react";
import { BsFillPersonFill, BsFillPeopleFill, BsBasketFill } from "react-icons/bs";


function FooterMenu(){
    return(
        <footer className="footer">
        <button className="go-to-profile">
          <BsFillPersonFill />
        </button>
        <button className="go-to-friends">
          <BsFillPeopleFill />
        </button>
        <button className="go-to-cart">
          <BsBasketFill />
        </button>
      </footer>
    )
}

export default FooterMenu