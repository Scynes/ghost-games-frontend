import { NavLink } from "react-router-dom";

const NavigationBar = (props) => {

    return (
        <nav className="bg-color-s">
            <NavLink to='/' className="text-center flex-center">Home</NavLink>
            <NavLink to='/join' className="text-center flex-center">Join</NavLink>
            <h1 className="flex-center color-p">Peanut Gallery</h1>
            <NavLink to='/login' className="text-center flex-center">Login</NavLink>
        </nav>
    );
}

export default NavigationBar;