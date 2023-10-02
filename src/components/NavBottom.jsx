import React from "react";
import { category } from "../utilities/constants";
import { Link } from "react-router-dom";

function NavBottom() {
  return (
    <div className="navBottom container mx-auto mt-10">
      <ul className="flex justify-between items-center overflow-x-scroll scrollbar-hide">
        {category.map((element) => {
          return (
            <li className="mr-10 whitespace-nowrap py-2 text-xl text-white mb-5 bg-Fgray rounded-2xl px-2">
              <Link className="font-medium">{element.linkName}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBottom;
