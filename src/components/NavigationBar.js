import { NavLink } from "react-router-dom";

const NavigationBar = (props) => {

    return (
        <nav>
            <NavLink to='/' className="text-center flex-center">Home</NavLink>
            <NavLink to='/about' className="text-center flex-center">About</NavLink>
            <NavLink to='/login' className="text-center flex-center right">Login</NavLink>
        </nav>
    );
}

export default NavigationBar;