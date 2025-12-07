import './App.css';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar.jsx";
import Hero from "./components/hero.jsx";
import Content from "./components/content.jsx";
import Footer from "./components/footer.jsx";
import Anime from "./components/anime.jsx";
import { Routes, Route, useLocation } from 'react-router-dom';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS bundle (includes Popper)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    const location = useLocation();
    const isAnimePage = location.pathname.startsWith("/anime/");

    return (
        <div className="grid">
            <div className="nav_area"><Navbar /></div>
            <div className="hero"><Hero /></div>
            <div className="sidebar"><Sidebar /></div>
            {!isAnimePage && (
                <>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Content />} />
                        </Routes>
                    </div>
                </>
            )}

            {isAnimePage && (
                <div className="content">
                    <Routes>
                        <Route path="/anime/:id" element={<Anime />} />
                    </Routes>
                </div>
            )}

            <div className="footer"><Footer /></div>
        </div>
    );
}

export default App;
