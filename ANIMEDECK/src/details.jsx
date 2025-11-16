import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://api.jikan.moe/v4"
const API_OPTIONS = {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
}

const Details = () => {
    const { id } = useParams();
    const [animeDetails, setAnimeDetails] = useState(null);


    const getDetails = async () => {

        try{
            const endpoint=`${BASE_URL}/anime/${id}/full`;
            const res = await fetch(endpoint);
            const data = await res.json();
            setAnimeDetails(data.data);


        }catch(error){
            console.log(error);
        }

    }
    useEffect(() => {
        getDetails();
    },[id])

    useEffect(() => {
        console.log("Updated anime details:", animeDetails);
    }, [animeDetails]);

    return (
        <div className="text-white">
            <h1>Anime Details</h1>
            <p>ID from URL: {animeDetails?.mal_id}</p>
            <p>Anime Name : {animeDetails?.title}</p>
        </div>
    );
};

export default Details;
