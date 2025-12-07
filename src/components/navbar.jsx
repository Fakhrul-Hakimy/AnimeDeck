import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link
import logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" className="img-fluid" style={{ maxHeight: "70px" }}/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/airing">Airing</Link>
                        </li>
                   
                        <li className="nav-item">
                            <span className="nav-link" aria-disabled="true">Contact</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
