import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MaybeHideNavbar = ({ children }) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    console.log("this is it!", location);

    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [location]);

  return <div>{showNavBar && children}</div>;
};

export default MaybeHideNavbar;
