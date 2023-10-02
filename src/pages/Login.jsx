import React from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="login container mx-auto mt-20">
        <p
          className="text-white font-bold text-lg cursor-pointer inline-flex items-center"
          onClick={() => navigate("/")}
        >
          {" "}
          <HomeIcon /> Bosh menyu
        </p>
        <h2 className="text-4xl text-center text-white mb-10">
          Profilga kirish
        </h2>
        <form action="" className="w-1/2 mx-auto">
          <input
            className="w-full py-4 mb-6 px-10 rounded-sm"
            type="email"
            name=""
            id=""
            placeholder="Emailingizni kiriting"
          />
          <input
            className="w-full py-4 mb-6 px-10 rounded-sm"
            type="password"
            name=""
            id=""
            placeholder="Parolni kiriting"
          />
          <button className="w-full py-4 mb-6 px-10 bg-Fblue text-white font-bold text-xl rounded-sm">
            Kirish
          </button>
        </form>
        <p className="text-white text-center font-bold text-xl">or</p>

        <div className="auth w-1/2 mx-auto mt-5">
          <GoogleOAuthProvider clientId="<your_client_id>">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>

        <p className="text-white text-center mt-5">
          Don't have an account?{" "}
          <span className="underline text-blue-900" onClick={navigate("/register")}>
            <Link>Sign up.</Link>
          </span>
        </p>
      </div>
    </>
  );
}

export default Login;
