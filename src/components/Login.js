import { Button } from "@material-ui/core";
import React from "react";
import "../css/login.css";

function Login() {
  const signIn = () => {};
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://media1.tenor.com/images/427100f25fe76c0b971eaa1c65e8561f/tenor.gif'
          alt='dicord'
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
