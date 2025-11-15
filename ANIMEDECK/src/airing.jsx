import React, {useEffect, useState} from 'react'
import Menu from "./menu.jsx";
import Card from "./card.jsx";


const BASE_URL = "https://api.jikan.moe/v4"
const API_OPTIONS = {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
}
const Airing =  () => {

    const [airingList, setAiringList] = useState([])


    const getAiring = async () => {

            try{

                const endpoint = `${BASE_URL}/schedules`;
                const result = await fetch(endpoint,API_OPTIONS );

                const data = await result.json();   // <-- FIX HERE
                setAiringList(data.data);
                console.log(data.data);

            }catch(error){
                console.log(error);
            }
        }


    useEffect(() => {
        getAiring();
    },[]);



    return (
       <div>
           <h1 className="text-white bg-center">Airing</h1>

            <div className="card-grid">
                {airingList.map((anime) => (
                    <Card key={anime.mal_id} anime={anime} />
                ))}
            </div>


       </div>
    )
}
export default Airing
