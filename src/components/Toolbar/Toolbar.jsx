import tb from "./Toolbar.module.scss";
import { Clock } from "../Clock/Clock";

import account from "../../assets/icons/account.png";
import alarm from "../../assets/icons/alarm.png";
import clock from "../../assets/icons/clock.png";
import { Link } from "react-router-dom";

export const Toolbar = () => {
  return (
    <div className={tb.Toolbar}>
      <img src={account} alt="" />
      <img src={alarm} alt="" />
      <img src={clock} alt="" />
      <Clock />
    </div>
  );
};
