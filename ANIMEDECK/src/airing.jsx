import React, {useEffect, useState} from 'react'
import Menu from "./menu.jsx";
import Card from "./card.jsx";
import Spinner from "./spinner.jsx";


const BASE_URL = "https://api.jikan.moe/v4"
const API_OPTIONS = {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
}
const Airing =  () => {

    const [airingList, setAiringList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    const [maxPage, setMaxPage] = useState(0)
    const [page, setPage] = useState(0)


    const getAiring = async () => {
        setIsLoading(true);
            try{

                const endpoint = `${BASE_URL}/schedules?page=${pageNumber}`;
                const result = await fetch(endpoint,API_OPTIONS );

                const data = await result.json();   // <-- FIX HERE
                setAiringList(data.data);
                setMaxPage(data.pagination.last_visible_page);
                setPage(data.pagination.current_page);


            }catch(error){
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        }


    useEffect(() => {
        getAiring();
    },[pageNumber]);



    return (
       <div>
           {isLoading ? (
               <Spinner />
           ):
            <div>
           <h1 className="text-white bg-center">Airing</h1>

            <div className="card-grid">
                {airingList.map((anime) => (
                    <Card key={anime.mal_id} anime={anime} />
                ))}
            </div>

                <div className="pagination flex items-center gap-2">

                    <button
                        className="px-4 py-2 bg-gray-700 text-white rounded-l-lg border-2"
                        onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}
                    >
                        Prev
                    </button>

                    <input
                        type="number"
                        value={page}
                        onChange={(e) => setPageNumber(Number(e.target.value))}
                        min={1}
                        max={maxPage}
                        className="w-12 px-1 py-1 text-center bg-gray-900 text-white border-2 border-gray-400 rounded focus:border-blue-400 focus:outline-none"
                    />


                    <span className="text-white">of {maxPage}</span>

                    <button
                        className="px-4 py-2 bg-gray-700 text-white rounded-r-lg"
                        onClick={() => pageNumber < maxPage && setPageNumber(pageNumber + 1)}
                    >
                        Next
                    </button>

                </div>
            </div>

           }
       </div>
    )
}
export default Airing
