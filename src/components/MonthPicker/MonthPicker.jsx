import { NavLink } from "react-router-dom";
import mp from "./MonthPicker.module.scss";

export const MonthPicker = () => {
  const months = [
    { name: "JAN", path: "/jan", className: mp.Jan },
    { name: "FEB", path: "/feb", className: mp.Feb },
    { name: "MAR", path: "/mar", className: mp.Mar },
    { name: "APR", path: "/apr", className: mp.Apr },
    { name: "MAY", path: "/may", className: mp.May },
    { name: "JUN", path: "/jun", className: mp.Jun },
    { name: "JUL", path: "/jul", className: mp.Jul },
    { name: "AUG", path: "/aug", className: mp.Aug },
    { name: "SEP", path: "/sep", className: mp.Sep },
    { name: "OCT", path: "/oct", className: mp.Oct },
    { name: "NOV", path: "/nov", className: mp.Nov },
    { name: "DEC", path: "/dec", className: mp.Dec },
  ];

  return (
    <div className={mp.MonthPicker}>
      {months.map(({ name, path, className }) => (
        <NavLink
          key={name}
          to={path}
          className={({ isActive }) =>
            isActive
              ? `${mp.Month} ${className} ${mp.Active}`
              : `${mp.Month} ${className}`
          }
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
};
