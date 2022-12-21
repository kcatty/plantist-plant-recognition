import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="d-flex flex-row p-2 border-success border-2 border-bottom border-opacity-25 background-color">
                <div className="d-flex flex-grow-1  justify-content-center align-items-center">
                    <Link to="/">
                        <img src="/plantist.png" alt="logo" width="200" height="100"/>
                    </Link>
                </div>
                <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                    <Link to="/">
                        <button type="button" className="btn button">
                            Home
                        </button>
                    </Link>
                    <Link to="/search">
                        <button type="button" className="btn button">
                            Search
                        </button>
                    </Link>
                    <Link to="/plants">
                        <button type="button" className="btn button">
                            Plants
                        </button>
                    </Link>
                </div>
                <div className="d-flex flex-grow-1 justify-content-center align-items-center">
                    <Link to="/contact">
                        <button type="button" className="btn button-contact">
                            Contact
                        </button>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    );
}
export default Navbar;
