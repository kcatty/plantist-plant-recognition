import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/contact">Contact</Link>

            <Outlet/>
        </>
    );
}
export default Navbar;