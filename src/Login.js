import React from "react";
import "./login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    // Do Abhi google login shizz...
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
