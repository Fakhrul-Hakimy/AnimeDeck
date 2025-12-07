import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    const goToAnime = (id) => {
        navigate(`/anime/${id}`);
    };

    const APIurl="https://api.jikan.moe/v4/recommendations/anime";
    const [recommend, setRecommend] = useState( []);

    function getRecommendations() {
        fetch(APIurl)
        .then(res => res.json())
        .then(data => {
            setRecommend(data.data);
        })
    }

    useEffect(() => {
        getRecommendations();
    },[])



    return (
        <div className="sidebar flex-column">
  <span className="badge text-bg-secondary mb-2 d-block text-center truncate-badge">
    Recommendation
  </span>

            {recommend.map(item => (
                <div className="card mb-2 custom-dark-card" key={item.mal_id}>
                    <a href={item.user.url} target="_blank" rel="noopener noreferrer"
                       className="card-header d-block text-center">
                        {item.user.username}
                    </a>

                    <div className="card-body">
                        {item.entry.map(entry => (
                            <h5
                                key={entry.mal_id}
                                className="badge d-block text-center text-bg-secondary truncate-badge m-1"
                                onClick={() => goToAnime(entry.mal_id)}
                            >
                                {entry.title}
                            </h5>
                        ))}

                        <p
                            className="card-text clamp-3"
                            data-bs-toggle="modal"
                            data-bs-target={`#modal-${item.mal_id}`}
                        >
                            {item.content}
                        </p>

                        <div className="modal fade" id={`modal-${item.mal_id}`} tabIndex="-1"
                             aria-labelledby={`modalLabel-${item.mal_id}`} aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id={`modalLabel-${item.mal_id}`}>
                                            Recommendation by {item.user.username}
                                        </h5>

                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">{item.content}</div>
                                    {item.entry.map(entry => (
                                        <h5
                                            key={entry.mal_id}
                                            className="badge text-bg-secondary truncate-badge m-1"
                                            onClick={() => goToAnime(entry.mal_id)}
                                        >
                                            {entry.title}
                                        </h5>
                                    ))}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>

    )
}
export default Sidebar
