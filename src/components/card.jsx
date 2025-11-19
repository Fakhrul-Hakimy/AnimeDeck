import React from 'react'
import './card.css'

const Card = () => {
    return (
        <div className="Anime-Card">

            <div className="Anime-Card-Image">
                <img className="img-fluid"
                    src="https://cdn.myanimelist.net/images/anime/1541/147774.jpg"
                    alt="anime cover"
                />
            </div>

            <div className="Anime-Card-Body">
                <h6><span className="badge text-bg-secondary">Finished Airing | 23 EP</span></h6>
                <div className="Anime-Card-Body-Title">
                    Title
                </div>
                <span>Score : 000</span>
                <span>Rank : 32</span>
                <span>Author : 32</span>



                <div className="Anime-Card-Body-status">

                </div>

            </div>
        </div>
    )
}
export default Card
