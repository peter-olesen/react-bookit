import cw from "./ContentWrapper.module.scss";

export const ContentWrapper = ({ children }) => {
  return (
    <main className={cw.ContentWrapper}>
      <section>{children}</section>
    </main>
  );
};
