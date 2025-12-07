import React, {useEffect, useState} from 'react'
import UpcomingAnime from "./upcomingAnime.jsx";
import {useNavigate} from "react-router-dom";


const Content = () => {
    const navigate = useNavigate();

    const goToAnime = (id) => {
        navigate(`/anime/${id}`);
    };
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setmaxPage] = useState(0);
    function getAnimeId() {
        const api=`https://api.jikan.moe/v4/seasons/upcoming?page=${page}`;
        fetch(api).then(res => res.json())
            .then(output => {
                setData(output.data);
                setmaxPage(output.pagination.last_visible_page);
            })
            .catch(err => console.log(err));

    }

    useEffect(() => {
        getAnimeId()
    },[page])
    return (
        <div>
            <span>
            <h2 className="text-center">Upcoming Anime</h2>
            </span>
            <div className="card-wrapper">
                {data.map((item) => {
                    return (
                        <div key={item.mal_id} onClick={() => goToAnime(item.mal_id)}>
                            <UpcomingAnime anime={item}></UpcomingAnime>
                        </div>
                    )
                })}


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
export default Content
