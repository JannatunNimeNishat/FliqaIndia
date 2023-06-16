import { Link } from "react-router-dom";

import logo from '../../assets/navbar/FliqaIndia-Logo.png'

const Navbar = () => {

    const navItems = <>

        <li className=" hover:bg-white font-semibold"><Link>Home</Link></li>
        <li className=" hover:bg-white font-semibold"><Link>Service</Link></li>
        <li className=" hover:bg-white font-semibold"><Link>Portfolio</Link></li>
        <li className=" hover:bg-white font-semibold"><Link>Community</Link></li>
        <li className=" hover:bg-white font-semibold"><Link>Blog</Link></li>

    </>

    return (
        <div className="navbar bg-black text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
                        {navItems}

                    </ul>
                </div>

                <img className="  lg:w-[196px] lg:h-[94px]" src={logo} alt="" />

                <div className="navbar-center   hidden lg:flex  w-full ">
                    <ul className="menu menu-horizontal  px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <a className=" bg-[#115b6b] px-2 lg:px-5 py-2 rounded-3xl text-white">Sign Up</a>
                <a className=" bg-[#115b6b]  px-2 lg:px-5 py-2 rounded-3xl text-white lg:ml-3 lg:mr-3">Sign In</a>
            </div>
        </div>
    );
};

export default Navbar;