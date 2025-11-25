import './card.css'

const UpcomingAnime = ({anime}) => {


    return (
        <div className="Anime-Card">

            <div className="Anime-Card-Image">
                <img className="img-fluid"
                    src={anime?.images?.webp?.large_image_url || ""}
                    alt="anime cover"W
                />
            </div>

            <div className="Anime-Card-Body">
                <h6 className="d-flex justify-content-center"><span className="badge text-bg-secondary">
                    {anime.status}

                </span></h6>
                <div className="Anime-Card-Body-Title">
                    {anime?.title}
                </div >
                <div className="Anime-Card-Body-SubTitle">
                <span> : { anime.aired.from!=null
                                        ? `${anime.aired.prop.from.day} /${anime.aired.prop.from.month}/${anime.aired.prop.from.year}`
                                        : "Not Available"}
                </span>
                <span> : {anime.rating.split(" - ")[0]}</span>
                <span> : {anime.broadcast.day || anime.broadcast.time
                                    ? `${anime.broadcast.day} |  ${anime.broadcast.time}`
                    : "Not Available"

                                }
                </span>
                </div>


                <div className="Anime-Card-Body-status">

                </div>

            </div>
        </div>
    )
}
export default UpcomingAnime
