import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [changeBtn,setChangeBtn]=useState("Login")
  const onlineStatus =useOnlineStatus()
    return (
      <div className="flex justify-between h-30 items-center shadow-lg">
        <div className="w-40">
          <img className="w-20"
            alt="header-logo"
            src={LOGO_URL}
          />
        </div>
        <div>
          <ul  className="flex  gap-5">
            <li>online status :{onlineStatus?"✅":"🛑"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About US </Link></li>
            <li><Link to="/contactus">Contact US</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>

            <button className="login-btn" onClick={()=>{changeBtn === "Login"?setChangeBtn("Logout"):setChangeBtn("Login")}}>{changeBtn}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;