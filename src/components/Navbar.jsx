import React, { useContext } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { options } from "../utilities/constants";
import NavBottom from "./NavBottom";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/login");
  };

  return (
    <>
      <div className="navbar shadow-md shadow-Fgray">
        <nav className="container mx-auto flex flex-wrap justify-between py-10 items-center relative">
          <div onClick={() => navigate("/")} className="logo">
            <Link className="text-3xl font-bold text-teal-500">
              Book<span className="text-lime-400">Shelf</span>
            </Link>
          </div>

          <form className="xs:w-full md:w-1/3 relative" action="">
            <input
              type="text"
              name=""
              id=""
              placeholder="Kitob nomini kiriting"
              className="w-full py-4 px-6 rounded-md"
            />
            <button className="absolute text-black top-[14px] right-2">
              {" "}
              <SearchIcon />{" "}
            </button>
          </form>

          <select name="" id="" className="p-2 rounded-md absolute right-32">
            {options.map((element) => {
              return (
                <option className="mt-2" value="">
                  {element.optionName}
                </option>
              );
            })}
          </select>

          <button
            onClick={(e) => handleLogin(e)}
            className="px-6 py-2 text-xl font-semibold rounded-xl text-white bg-Fblue"
          >
            Kirish
          </button>
        </nav>
      </div>

      <NavBottom />
    </>
  );
}

export default Navbar;
