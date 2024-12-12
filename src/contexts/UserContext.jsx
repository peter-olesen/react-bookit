import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);

  const login = () => {
    setSignedIn(true);
  };

  const logout = () => {
    setSignedIn(false);
  };

  return (
    <UserContext.Provider value={{ signedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
