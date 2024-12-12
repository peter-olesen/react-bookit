import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path={"/"} element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path={"/add"} element={<Home />} />
              <Route path={"/settings"} element={<Home />} />
              <Route path={"/account"} element={<Home />} />
              <Route path={"/add"} element={<Home />} />
              <Route path={"/signin"} element={<Signin />} />
              <Route path={"/signup"} element={<Signup />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
