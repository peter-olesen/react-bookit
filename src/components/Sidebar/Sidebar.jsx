import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Divider } from "../Divider/Divider";
import sb from "./Sidebar.module.scss";
import arrow from "../../assets/icons/arrow.png";
import home from "../../assets/icons/home.png";
import plus from "../../assets/icons/plus.png";
import settings from "../../assets/icons/settings.png";
import account from "../../assets/icons/account.png";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={sb.Sidebar} style={{ width: isOpen ? "10%" : "5%" }}>
      <div className={sb.Menu}>
        <div className={sb.MenuItem} onClick={toggleSidebar}>
          {isOpen && <span>Close</span>}
          <img
            src={arrow}
            alt="Open Sidebar"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
        <Divider />
        <NavLink className={sb.MenuItem} to="/">
          {isOpen && <span>Home</span>}
          <img src={home} alt="Home" />
        </NavLink>
        <NavLink className={sb.MenuItem} to="/add">
          {isOpen && <span>Add event</span>}
          <img src={plus} alt="Add Event" />
        </NavLink>
        <NavLink className={sb.MenuItem} to="/settings">
          {isOpen && <span>Settings</span>}
          <img src={settings} alt="User Settings" />
        </NavLink>
      </div>
      <div className={sb.Account}>
        <NavLink className={sb.MenuItem} to="/account">
          {isOpen && <span>Profile</span>}
          <img src={account} alt="Account" />
        </NavLink>
      </div>
    </div>
  );
};
