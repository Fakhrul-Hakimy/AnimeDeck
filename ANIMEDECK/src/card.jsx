import React from 'react'
import star from "./assets/star.svg"

const Card = ({ anime }) => {
    return (
        <div className="card">
            <img className="poster" src={anime.images.webp.large_image_url} alt={anime.title} />
            <p className="text-white left-0">{anime.title}</p>
            <span className="rating-section">
                <img src={star} alt="star" className="star-icon"/>
                <p className="score"> {anime.rank}</p>
                <span className="type">{anime.type}</span>
                <span className="type">{anime.duration}</span>
            </span>
            <span className="details-section">

                <span className="type">{anime.broadcast.day ? anime.broadcast.day : "N/A"} </span>
                <span className="type" >○</span>
                <span className="type">{anime.broadcast.time ? anime.broadcast.time : "N/A" } </span>
                <span className="type">○</span>
                <span className="type">{anime.broadcast.timezone ? anime.broadcast.timezone : "N/A"}</span>
            </span>



        </div>
    );
};
export default Card
