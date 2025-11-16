import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();

    return (
        <div className="text-white">
            <h1>Anime Details</h1>
            <p>ID from URL: {id}</p>
        </div>
    );
};

export default Details;
