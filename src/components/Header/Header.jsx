import { NavLink, Link } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Header = () => {

    const { user, logoutUser } = useContext(AuthContext);

    console.log(user)

    const handleLogoutuser = () => {
        logoutUser()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className="max-w-[1280px] mx-auto navbar bg-info sticky top-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-[17px] font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link href="/" className="md:text-2xl uppercase text-white font-black animate-bounce">JS Paradigm</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[17px] font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <p className="text-white mr-3">{user.email}</p>
                        <button className="btn" onClick={handleLogoutuser}>Logout</button>
                    </> : <Link className="btn btn-md" to='/login'><button></button>Login</Link>
                }

            </div>
        </div>
    );
};

export default Header;