import home from "../style/pages/Home.module.scss";
import { Welcome } from "../components/Welcome/Welcome";
import { Toolbar } from "../components/Toolbar/Toolbar";
import { MonthPicker } from "../components/MonthPicker/MonthPicker";
import { Events } from "../components/Events/Events";

export const Home = () => {
  return (
    <div className={home.homeContainer}>
      <div className={home.topContainer}>
        <Welcome />
        <Toolbar />
      </div>
      <MonthPicker />
      <Events />
    </div>
  );
};
