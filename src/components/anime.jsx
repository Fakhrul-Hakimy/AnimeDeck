import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const Anime = () => {
    const { id } = useParams();
    const animeUrl= `https://api.jikan.moe/v4/anime/${id}/full`;
    const [anime, setAnime] = useState([])
    function getAnime() {
      fetch(animeUrl)
        .then(res => res.json())
        .then(data => setAnime(data.data))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getAnime();
    }, [id])


    return <div>
        {anime.title}

    </div>;

};

export default Anime; // ✅ default export
