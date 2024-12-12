import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import { MainLayout } from "./layouts/MainLayout";

import { Home } from "./pages/Home";

import { AddEvent } from "./pages/AddEvent";
import { EditEvent } from "./pages/EditEvent";

import { Settings } from "./pages/Settings";
import { Account } from "./pages/Account";

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path={"/"} element={<MainLayout />}>
              <Route index element={<Home />} />

              {/* Add Event / Edit Event */}
              <Route path={"/add"} element={<AddEvent />} />
              <Route path={"/edit"} element={<EditEvent />} />

              {/* Settings / Account */}
              <Route path={"/settings"} element={<Settings />} />
              <Route path={"/account"} element={<Account />} />

              {/* Sign up/Sign in */}
              <Route path={"/signup"} element={<Signup />} />
              <Route path={"/signin"} element={<Signin />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
