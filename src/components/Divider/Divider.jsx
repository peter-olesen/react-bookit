import div from "./Divider.module.scss";

export const Divider = ({ width }) => {
  return <hr className={div.Divider} style={{ width }} />;
};
