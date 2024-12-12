import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ContentWrapper } from "../components/ContentWrapper/ContentWrapper";
import { Divider } from "../components/Divider/Divider";
import { PageHeader } from "../components/PageHeader/PageHeader";

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8081/sign-up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const userData = await res.json();
        console.log("User data:", userData);
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error occurred during signup:", error);
    }
  };

  return (
    <>
      <PageHeader title="Sign up" />
      <ContentWrapper>
        <h2>Welcome</h2>
        <Divider />
        <p>
          We are thrilled to have on board. Now we just need to get to know you
          a little
        </p>
        <form onSubmit={handleSignup} method="post">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            pattern=".{6,}"
            required
          />

          <label htmlFor="phoneNumber">Phone</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <div>
            <span>
              Already have an account?{" "}
              <NavLink to="/signin" style={{ textDecoration: "underline" }}>
                Click here
              </NavLink>{" "}
              to sign in
            </span>
            <input type="submit" value="Sign in" />
          </div>
        </form>
      </ContentWrapper>
    </>
  );
};
