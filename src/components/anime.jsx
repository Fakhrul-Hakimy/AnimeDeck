import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Anime = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
                const data = await res.json();
                setAnime(data.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchAnime();
    }, [id]);

    if (!anime) return <p>Loading anime...</p>;

    return (
        <div className="container my-5">
            <div className="row g-4">
                {/* Anime Image */}
                <div className="col-md-4 text-center">
                    <img
                        src={anime.images.webp.large_image_url}
                        alt={anime.title}
                        className="img-fluid rounded shadow-sm"
                    />
                </div>

                {/* Anime Details */}
                <div className="col-md-8">
                    <h1 className="mb-3">{anime.title}</h1>
                    <p>{anime.synopsis}</p>

                    <div className="mt-3">
            <span className="badge bg-secondary me-2 mb-2">
              Episodes: {anime.episodes || "N/A"}
            </span>
                        <span className="badge bg-secondary me-2 mb-2">
              Score: {anime.score || "N/A"}
            </span>
                        <span className="badge bg-secondary me-2 mb-2">
              Rating: {anime.rating || "N/A"}
            </span>
                        <span className="badge bg-secondary me-2 mb-2">
              Status: {anime.status || "N/A"}
            </span>

                    </div>
                    <div className="mt-3">
                        <h5 className="display-6">Trailer</h5>
                        {anime.trailer?.embed_url ? (
                            <div className="ratio ratio-21x9">
                                <iframe
                                    src={anime.trailer.embed_url}
                                    title={anime.title}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ) : (
                            <p>No trailer available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Anime;
