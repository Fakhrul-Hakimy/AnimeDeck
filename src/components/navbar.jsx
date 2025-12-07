import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'; // ✅ import Link
import logo from "../assets/logo.svg";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const searchAnime = () => {
        if (searchTerm.trim() !== "") {
            navigate(`/search/${encodeURIComponent(searchTerm)}`);
            setSearchTerm(""); // optional: clear input after search
        }
    };
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


                    </ul>
                    <form className="d-flex m-1" role="search">
                        <input
                            className="form-control me-2 text-black"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="button" // important: NOT "submit"
                            onClick={searchAnime}
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
