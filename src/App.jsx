import './App.css';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar.jsx";
import Hero from "./components/hero.jsx";
import Content from "./components/content.jsx";
import Footer from "./components/footer.jsx";
import Anime from "./components/anime.jsx";
import Airing from "./components/airing.jsx";
import { Routes, Route, useLocation } from 'react-router-dom';
import Search from "./components/search.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    const location = useLocation();
    const isAnimePage = location.pathname.startsWith("/anime/");
    const isAiringPage = location.pathname === "/airing"; // exact match for Airing page
    const isSearchTermPage = location.pathname.startsWith("/search/");

    return (
        <div className="grid">
            <div className="nav_area"><Navbar /></div>

            {/* Only show Hero and Sidebar on non-anime, non-airing pages */}
            {!isAnimePage && !isAiringPage && !isSearchTermPage &&(
                <>
                    <div className="hero"><Hero /></div>
                    <div className="sidebar"><Sidebar /></div>
                </>
            )}

            <div className="content">
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/anime/:id" element={<Anime />} />
                    <Route path="/search/:searchString" element={<Search />} />
                    <Route path="/airing" element={<Airing />} /> {/* Clean Airing page */}
                </Routes>
            </div>

            <div className="footer"><Footer /></div>
        </div>

    );
}

export default App;
