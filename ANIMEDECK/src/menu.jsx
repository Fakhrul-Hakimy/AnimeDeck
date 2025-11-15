import React from 'react'
import logo from "./assets/logo.svg";

const Menu = ({selectMenu,setSelectMenu}) => {
    return (
        <div className="menu-nav">
            <img className="nav-logo" src={logo}/>



            <ul className="nav-list">
                <li className="nav-item" onClick={() =>setSelectMenu("Airing")}>Airing</li>
                <li className="nav-item" onClick={() => setSelectMenu("Popular")}>Popular</li>
            </ul>
        </div>
    )
}
export default Menu
