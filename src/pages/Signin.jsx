import { NavLink } from "react-router-dom";
import { ContentWrapper } from "../components/ContentWrapper/ContentWrapper";
import { Divider } from "../components/Divider/Divider";
import { PageHeader } from "../components/PageHeader/PageHeader";

export const Signin = () => {
  return (
    <>
      <PageHeader title="Sign in" />
      <ContentWrapper>
        <h2>Welcome</h2>
        <Divider />
        <p>To use this app please sign in</p>
        <form action="">
          <label htmlFor="username_email">Username / email</label>
          <input type="text" name="username_email" id="username_email" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <div>
            <span>
              No user account?{" "}
              <NavLink to="/signup" style={{ textDecoration: "underline" }}>
                Click here
              </NavLink>{" "}
              to sign up
            </span>
            <input type="submit" value="Sign in" />
          </div>
        </form>
      </ContentWrapper>
    </>
  );
};
