import { useState } from "react";

const Login = () => {

    const [loginHidden, setLoginHidden] = useState(false);

    const CONTAINER_CLASSES = ['flex-center', 'flex-column', 'height-100', 'pad-20'];

    const showSignup = () => {

        setLoginHidden(!loginHidden)
    }
    return (
        <div id="login-signup-wrapper" className="border-radius-10px trans-shadowcast">
            <div id="login-container" className={loginHidden ? CONTAINER_CLASSES.join(' ') + ' hidden' : CONTAINER_CLASSES.join(' ')}>
                <form>
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="text" name="username" id="username" placeholder="Username"/>
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="password" name="password" id="password" placeholder="Password"/>
                    <input className="borderless border-radius-5px bg-color-t color-t" type="submit" value="Submit" />
                    <p className="text-center">OR</p>
                </form>
                <input className="borderless border-radius-5px bg-color-t color-t" type="button" value="Signup" onClick={() => showSignup()}/>
            </div>
            <div id="signup-container" className={loginHidden ? CONTAINER_CLASSES.join(' ') + ' active' : CONTAINER_CLASSES.join(' ')}>
                <form>
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="text" name="username" id="s-username" placeholder="Username"/>
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="password" name="password" id="s-password" placeholder="Password"/>
                    <input className="borderless border-radius-5px bg-color-p tertiary-outline text-center" type="password" name="password" id="s-cpassword" placeholder="Confirm Password"/>
                    <input className="borderless border-radius-5px bg-color-t color-t" type="submit" value="Submit" />
                    <p className="text-center">OR</p>
                </form>
                <input className="borderless border-radius-5px bg-color-t color-t" type="button" value="Signup" onClick={() => showSignup()}/>
            </div>
        </div>
    );
}

export default Login;