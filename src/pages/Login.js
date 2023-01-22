import axios from "axios";
import { useState } from "react";

/**
 * API base URL axios instance.
 */
const API = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/'
})

const Login = () => {

    const [loginHidden, setLoginHidden] = useState(false);

    const CONTAINER_CLASSES = ['flex-center', 'flex-column', 'height-100', 'pad-20'];

    const showSignup = () => {

        setLoginHidden(!loginHidden)
    }

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const DETAILS = {
            username: document.getElementById('login-form').username.value,
            password: document.getElementById('login-form').password.value
        }

        const RESULT = await API.post('r/login', DETAILS);

        console.log(RESULT)
    }

    const handleSignupSubmit = async (event) => {
        event.preventDefault();

        const DETAILS = {
            username: document.getElementById('signup-form').username.value,
            password: document.getElementById('signup-form').spassword.value
        }
        
        const RESULT = await API.post('c/register', DETAILS);

        console.log(RESULT);
    }

    return (
        <div id="login-signup-wrapper" className="border-radius-10px trans-shadowcast">
            <div id="login-container" className={loginHidden ? CONTAINER_CLASSES.join(' ') + ' hidden' : CONTAINER_CLASSES.join(' ')}>
                <form id="login-form" onSubmit={(event) => handleLoginSubmit(event)}>
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="text" name="username" id="username" placeholder="Username"/>
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="password" name="password" id="password" placeholder="Password"/>
                    <input className="borderless border-radius-5px bg-color-t color-t" type="submit" value="Submit"/>
                    <p className="text-center">OR</p>
                </form>
                <input className="borderless border-radius-5px bg-color-t color-t" type="button" value="Signup" onClick={() => showSignup()}/>
            </div>
            <div id="signup-container" className={loginHidden ? CONTAINER_CLASSES.join(' ') + ' active' : CONTAINER_CLASSES.join(' ')}>
                <form id="signup-form" onSubmit={(event) => handleSignupSubmit(event)}>
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="text" name="username" id="s-username" placeholder="Username"/>
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="password" name="password" id="spassword" placeholder="Password"/>
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="password" name="password" id="scpassword" placeholder="Confirm Password"/>
                    <input className="borderless border-radius-5px bg-color-t color-t" type="submit" value="Submit" />
                    <p className="text-center">OR</p>
                </form>
                <input className="borderless border-radius-5px bg-color-t color-t" type="button" value="Login" onClick={() => showSignup()}/>
            </div>
        </div>
    );
}

export default Login;