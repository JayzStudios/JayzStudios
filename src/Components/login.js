import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';




const Login = (props) => 
{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate();

    const onButtonClick = () => {
        setEmailError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }
        

    }

    return(
        <div className="login-container">
            <h3>Sign in to Jayz STUDIOS</h3>
            <div className="email-container">
            <input
                value={email}
                placeholder="Email: "
                onChange={event => setEmail(event.target.value)}
                className={"input-box"} />
            <label className="error-label-email">{emailError}</label>

            </div>
            <br />
            <div className={"password-container"}>
            <input
                value={password}
                placeholder="Password: "
                onChange={event => setPassword(event.target.value)}
                className={"input-box"} />
            <label className="error-label-password">{passwordError}</label>
        </div>
        <div className={"input-container"}>
            <input
                className={"input-button"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>

        </div>
    )
}
export default Login;