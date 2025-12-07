import React, {useEffect, useState} from 'react'

const Sidebar = () => {
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

            <span className="badge text-bg-secondary mb-2 d-block text-center truncate-badge">Recommendation</span>
            {recommend.map(item => (
            <div className="card mb-2 custom-dark-card" key={item.id}>
                <h5 className="card-header d-block text-center " onClick={() => window.location.href = item.user.url}>{item.user.username}</h5>
                <div className="card-body">
                    {item.entry.map(entry => (
                        <h5 className="badge d-block text-center text-bg-secondary truncate-badge m-1">{entry.title}</h5>
                    ))}

                    <p className="card-text clamp-3">{item.content}</p>
                </div>
            </div>



            ))}

        </div>
    )
}
export default Sidebar
