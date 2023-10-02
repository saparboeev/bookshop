import React from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import MaybeHideNavbar from "./components/HideNavbar";
import SignUp from "./pages/SignUp";
import { Contexts } from "./contexts/Contexts";
import BasicModal from "./components/ModalReg";
import Products from "./components/Products";
import BookInfo from "./components/BookInfo";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Contexts.Provider value={{ open, setOpen }}>
        <MaybeHideNavbar>
          <Navbar />
          <Products />
        </MaybeHideNavbar>

        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<SignUp />} />
          <Route path={"/bookInfo/:id"} element={<BookInfo />} />
        </Routes>

        <BasicModal />
      </Contexts.Provider>
    </div>
  );
}

export default App;
