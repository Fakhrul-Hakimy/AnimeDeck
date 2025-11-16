import React from 'react';
import logo from "./assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();

    return (
        <div className="menu-nav">
            <img className="nav-logo" src={logo}/>

            <ul className="nav-list">
                <li className="nav-item" onClick={() => navigate("/airing")}>Airing</li>
                <li className="nav-item" onClick={() => navigate("/popular")}>Popular</li>
            </ul>
        </div>
    );
};

export default Menu;
