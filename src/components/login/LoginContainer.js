import React from 'react'
import Login from './Login'
import style from "./LoginStyle.module.css";
import pic from "./loginImage.jpg";
import { Stack } from 'react-bootstrap';

function LoginContainer() {
    return (
        <div className = "loginSection">
        <div>
        <img  width={400} height={150} src={pic} />
        </div>
        <div className={style.formContainer}>
            <Login></Login>
        </div>
        </div>
    )
}

export default LoginContainer