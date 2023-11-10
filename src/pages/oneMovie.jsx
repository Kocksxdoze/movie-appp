import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fetcher from "../utils/fetcher";
import MovieCard from "../components/movieCard";
import Comments from "../components/comments";
import Thoughts from "../components/thoughts";
import MovieSlider from "../components/movieSlider";

function OneMovie() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const id = location.pathname.replace(/^\D+/g, '')
    console.log(data)
    useEffect(() => {
        fetcher(`/movie/${id}`)
            .then((responseData) => {
                setData(responseData)
                    (setLoading(false))
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    console.log(data)
    return (
        <div>
            {!loading ?
                <>
                    <div style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`
                    }} className="background_img">

                    </div>
                    < MovieCard data={data} />
                    <Comments />

                    <Thoughts />

                </>
                : "Loading"}
        </div>
    )
}

export default OneMovie