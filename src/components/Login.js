import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { Button } from "@material-ui/core";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import bird from '../components/bird.png'
import logo from '../components/logo.png'

function Login() {
    const [{}, dispatch] = useStateValue();

    // How to Sign in (function)
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src={bird}
                    alt=""
                />
                <img
                    src={logo}
                    alt=""
                />
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
