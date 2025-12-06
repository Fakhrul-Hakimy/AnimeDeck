import React from 'react'

const Sidebar = () => {
    const APIurl="https://api.jikan.moe/v4/recommendations/anime";

    function getRecommendations() {
        fetch(APIurl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    getRecommendations();
    return (
        <div className="sidebar">
            <span className="badge text-bg-secondary">Recommendation</span>

        </div>
    )
}
export default Sidebar
