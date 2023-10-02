import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReadMoreIcon from "@mui/icons-material/ReadMore";

function Products() {
  const [db, setDb] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    try {
      axios
        .get("https://api.itbook.store/1.0/new")
        .then((data) => setDb(data.data.books));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const res = db.length > 0 && db.find((element) => element.isbn13 === id);

  const handleBookInfo = (e) => {
    e.preventDefault();
    navigate('/bookInfo');
  };


  return (
    <div
      onClick={(e) => handleBookInfo(e)}
      className="mt-10 products container mx-auto grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 mb-10"
    >
      {db.length > 0 ? (
        db.map((element) => {
          return (
            <div className="box w-full rounded-md bg-Fgray py-4 px-2">
              <img
                className="w-[160px] h-[200px] mx-auto rounded-xl"
                src={element.image}
                alt=""
              />
              <br />
              <h1 className="w-full text-lg font-medium text-white">
                {" "}
                {element.title}{" "}
              </h1>
              <br />
              <p className="w-full text-sm font-bold text-green-400">
                {" "}
                {element.subtitle}{" "}
              </p>
              <br />
              <p className="w-full font-medium text-md text-blue-400 line-clamp-2">
                {" "}
                {element.url}{" "}
              </p>
              <br />
              <p className="w-full text-yellow-200 text-xs">
                {" "}
                {element.price}{" "}
              </p>
              <br />

              <div className="shop">
                <Link className=" text-sm text-white flex items-center hover:text-blue-600">
                  Shop now <ReadMoreIcon />
                </Link>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="text-white">Mahsulot yuklanmoqda...</h2>
      )}
    </div>
  );
}

export default Products;
