import ph from "./PageHeader.module.scss";
import { Toolbar } from "../Toolbar/Toolbar";
import { Divider } from "../Divider/Divider";

export const PageHeader = ({ title }) => {
  return (
    <>
      <header className={ph.PageHeader}>
        <h2>{title}</h2>
        <Toolbar />
      </header>
      <Divider width="90%" />
    </>
  );
};
