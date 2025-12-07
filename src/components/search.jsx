import React, {useEffect, useState} from 'react'
import { useNavigate, useParams} from "react-router-dom";
import Anime from "./anime.jsx";
import Card from "./card.jsx";

const Search = () => {
    const navigate = useNavigate();

    const goToAnime = (id) => {
        navigate(`/anime/${id}`);
    };

    const { searchString } = useParams();
    const [maxPage, setmaxPage] = useState(0);
    const [page, setPage] = useState(1)
    const [anime, setAnime] = useState([]);
    console.log(searchString);
    const url= `https://api.jikan.moe/v4/anime?q=${searchString}&page=${page}`;

    function getSearch(){
        fetch(url)
        .then(res => res.json())
        .then(data => {
                setAnime(data.data);
                setmaxPage(data.pagination.last_visible_page);

            }
        );
    }

    useEffect(() => {
        getSearch()
    },[page])

    return (
        <div><h1 className="text-center">Search : {searchString}</h1>
            <div className="card-wrapper">
            {anime.map(item =>
                <div key={item.mal_id} onClick={() => goToAnime(item.mal_id)}>
                    <Card anime={item}></Card>
                </div>

            )}
            </div>
            <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-3">
                <ul className="pagination">
                    <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                        <button className="page-link" aria-label="Next" onClick={()=> setPage(page-1)}>&laquo;</button>
                    </li>
                    {page > 1 && page-1 > 0 && (
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(page-1)}>{page-1}</a></li>
                    )}
                    <li className="page-item active"><a className="page-link" href="#">{page}</a></li>
                    {page < maxPage && (
                        <li className="page-item"><a className="page-link" onClick={()=> setPage(page+1)}>{page+1}</a></li>
                    )}
                    <li className={`page-item ${page === maxPage ? "disabled" : ""}`}>
                        <button className="page-link" aria-label="Next" onClick={()=> setPage(page+1)}>&raquo;</button>

                    </li>
                </ul>
            </nav>
        </div>

    )
}
export default Search
