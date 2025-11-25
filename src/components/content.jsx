import React, {useEffect, useState} from 'react'
import UpcomingAnime from "./upcomingAnime.jsx";


const Content = () => {
    const [data, setData] = useState([]);
    function getAnimeId() {
        const api="https://api.jikan.moe/v4/seasons/upcoming";
        fetch(api).then(res => res.json())
            .then(output => {
                setData(output.data);
            })
            .catch(err => console.log(err));

    }

    useEffect(() => {
        getAnimeId()
    },[])
    return (
        <div>
            <span>
            <h2 className="text-center">Upcoming Anime</h2>
            </span>
        <div className="card-wrapper">
            {data.map((item,index) => {
                return (
                    <div key={index}>
                        <UpcomingAnime anime={item} ></UpcomingAnime>
                    </div>
                )
            })}


        </div>
        </div>
    )
}
export default Content
