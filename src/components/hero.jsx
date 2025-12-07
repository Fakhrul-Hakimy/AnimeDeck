import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    const goToAnime = (id) => {
        navigate(`/anime/${id}`);
    };

    const apiUrl = "https://api.jikan.moe/v4/top/anime?limit=10";
    const [topAnime, setTopAnime] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setTopAnime(data.data))
            .catch(err => console.error(err));
    }, []);

    if (topAnime.length === 0) {
        return <p>Loading top anime...</p>;
    }

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
                {topAnime.map((anime, index) => (
                    <button
                        key={anime.mal_id}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : undefined}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
                {topAnime.map((anime, index) => (
                    <div key={anime.mal_id} className={`carousel-item ${index === 0 ? "active" : ""}`} onClick={() => goToAnime(anime.mal_id)}>
                        <img
                            src={anime.images.webp.large_image_url}
                            className="d-block mx-auto"
                            alt={anime.title}
                            style={{
                                width: '75%',       // control width
                                height: '400px',    // fixed height
                                objectFit: 'cover'  // preserve aspect ratio, crop if necessary
                            }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{anime.title}</h5>
                            <p>Score: {anime.score} | Episodes: {anime.episodes}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Hero;
