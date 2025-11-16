import React from 'react';
import { Routes, Route } from "react-router-dom";

import Menu from "./menu.jsx";
import Airing from "./airing.jsx";
import Details from "./Details.jsx";
import { Sidebar } from "./sidebar.jsx";
import Footer from "./Footer.jsx";

const App = () => {
    return (
        <div className="parent">
            <div className="div1">
                <Menu />
            </div>

            <div className="div2">
                <Routes>
                    <Route path="/" element={<h1>Select a menu</h1>} />
                    <Route path="/airing" element={<Airing />} />
                    <Route path="/popular" element={<h1>Popular</h1>} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </div>

            <div className="div3">
                <Sidebar />
            </div>

            <div className="div4">

                <Footer />
            </div>
        </div>
    );
};

export default App;
