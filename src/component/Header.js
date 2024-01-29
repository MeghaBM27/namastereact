import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [changeBtn,setChangeBtn]=useState("Login")
    return (
      <div className="header-container">
        <div className="header-logo">
          <img
            alt="header-logo"
            src={LOGO_URL}
          />
        </div>
        <div className="header-links">
          <ul>
            <li>Home</li>
            <li>About US </li>
            <li>Contact US</li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{changeBtn === "Login"?setChangeBtn("Logout"):setChangeBtn("Login")}}>{changeBtn}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;