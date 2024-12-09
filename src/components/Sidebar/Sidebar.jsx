import sb from "./Sidebar.module.scss";
import arrow from "../../assets/icons/arrow.png";
import home from "../../assets/icons/home.png";
import plus from "../../assets/icons/plus.png";
import settings from "../../assets/icons/settings.png";
import account from "../../assets/icons/account.png";

export const Sidebar = () => {
  return (
    <div className={sb.Sidebar}>
      <div className={sb.Menu}>
        <img src={arrow} alt="Open Menu" />
        <hr />
        <img src={home} alt="Home" />
        <img src={plus} alt="Add Event" />
        <img src={settings} alt="User Settings" />
      </div>
      <div className={sb.Account}>
        <img src={account} alt="Account" />
      </div>
    </div>
  );
};
