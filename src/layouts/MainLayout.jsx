import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const MainLayout = () => {
  return (
    <div className="container">
      <Sidebar />

      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};
