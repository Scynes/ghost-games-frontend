import axios from "axios";
import Cookie from "universal-cookie";
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

        const COOKIE = new Cookie();

        COOKIE.set('authToken', RESULT.data.token, {path:'/'});

        console.log(RESULT.data)
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

    const handleHover = (event) => {

        const TARGET = document.getElementById('login-signup-wrapper');
        
        const mouseX = Math.abs(event.clientX - TARGET.getBoundingClientRect().x);
        const mouseY = Math.abs(event.clientY - TARGET.getBoundingClientRect().y);
        const width = (TARGET.getBoundingClientRect().width / 2);
        const height = (TARGET.getBoundingClientRect().height / 2);

        const calcAngleX = (mouseX - width) / 10;
        const calcAngleY = (mouseY - height) / 10;

        console.log(`X: ${calcAngleX} - Y: ${calcAngleY}`)

        TARGET.style.transform = `perspective(70ch) rotateX(${-calcAngleY}deg) rotateY(${calcAngleX}deg) scale(1.15)`
    }

    const handleReset = () => {

        const TARGET = document.getElementById('login-signup-wrapper');

        TARGET.style.transform = `rotateX(0) rotateY(0) scale(1)`;
    }

    return (
        <div onMouseLeave={event => handleReset()} onMouseMove={event => handleHover(event)} id="login-signup-wrapper" className="border-radius-10px trans-shadowcast">
            <div id="login-container" className={loginHidden ? CONTAINER_CLASSES.join(' ') + ' hidden' : CONTAINER_CLASSES.join(' ')}>
                <form id="login-form" onSubmit={() => handleLoginSubmit(this)} autoComplete="off">
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="text" name="username" id="username" placeholder="Username"/>
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="password" name="password" id="password" placeholder="Password"/>
                    <input className="borderless border-radius-5px bg-color-t color-t" type="submit" value="Submit"/>
                    <p className="text-center">OR</p>
                </form>
                <input className="borderless border-radius-5px bg-color-t color-t" type="button" value="Signup" onClick={() => showSignup()}/>
            </div>
            <div id="signup-container" className={loginHidden ? CONTAINER_CLASSES.join(' ') + ' active' : CONTAINER_CLASSES.join(' ')}>
                <form id="signup-form" onSubmit={event => handleSignupSubmit(event)} autoComplete="off">
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