import { Button } from "@material-ui/core";
import React from "react";
import "../css/login.css";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://media1.tenor.com/images/427100f25fe76c0b971eaa1c65e8561f/tenor.gif'
          alt='dicord'
        />
        <h1>Clone</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
