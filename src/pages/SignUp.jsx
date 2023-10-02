import Select from "react-select";
import React, { useContext, useMemo, useState } from "react";
import countryList from "react-select-country-list";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { Contexts } from "../contexts/Contexts";

export default function SignUp() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const changeHandler = (value) => {
    setValue(value);
  };

  const { setOpen } = useContext(Contexts);

  const handleRegister = (e) => {
    e.preventDefault();
    setOpen(true);
    navigate("/");
  };

  return (
    <div className="signUp container mx-auto mt-[100px]">
      <h2 className="text-center text-white text-3xl mb-5">Register</h2>

      <form action="" className="w-1/2 mx-auto">
        <input
          className="w-full py-5 px-6 rounded-lg mb-5"
          type="text"
          name=""
          id=""
          placeholder="Enter your name"
        />
        <input
          className="w-full py-5 px-6 rounded-lg mb-5"
          type="text"
          name=""
          id=""
          placeholder="Enter your surname"
        />

        <Select
          options={options}
          value={value}
          onChange={changeHandler}
          placeholder="Select your country"
        />

        <br />

        <PhoneInput
          country={"uz"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />

        <br />

        <input
          className="w-full py-5 px-6 rounded-lg mb-5"
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
        />
        <input
          className="w-full py-5 px-6 rounded-lg mb-5"
          type="password"
          name=""
          id=""
          placeholder="Confirm your password"
        />

        <button
          onClick={(e) => handleRegister(e)}
          className="text-white text-lg font-medium text-center w-full rounded-lg bg-Fblue py-3 mb-10"
        >
          Register
        </button>
      </form>
    </div>
  );
}
