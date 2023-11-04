import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import fetcher from "../utils/fetcher";

function OneMovie() {
    const [data, setData] = useState([])
    const location = useLocation()
    const id = location.pathname.replace(/^\D+/g, '')
    console.log(data)
    useEffect(() => {
        fetcher(`/movie/${id}`)
            .then((responseData) => {
                setData(responseData)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    console.log(data)
    return (
        <div>
            <img className="bg" src={`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`} />
            <div className="columnInfo">
                <div className="movieContain">
                    <img className="poster" src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt="" />
                </div>
                <div className="movieContain">
                    <h3 className="movieTitle">{data.title}</h3>
                    <p>Name: <span className="redText">{data.title}</span></p>
                    <p>Data: <span className="redText">{data.release_date}</span></p>
                    <p>Genre: </p>
                    <p>Language: <span className="redText">{data.original_language}</span></p>

                    <p>
                        <svg className="star" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff700">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#fff700" d="M8.67.912a.75.75 0 00-1.34 0L5.266 5.006l-4.622.662a.75.75 0 00-.412 1.285l3.335 3.18-.786 4.488a.75.75 0 001.082.796L8 13.287l4.137 2.13a.75.75 0 001.082-.796l-.786-4.489 3.335-3.18a.75.75 0 00-.412-1.284l-4.622-.662L8.67.912z">
                                </path>
                            </g>
                        </svg>
                        <span className="redText">
                            {data.vote_average}</span></p>
                </div>
            </div>
            <div className="about">
                <h2 className="aboutText">About movie</h2>
                <p className="aboutTexty">{data.overview}</p>
            </div>

            <div className="comments">
                <h3 className="thg">Thoughts</h3>

                <div className="commentContainer">
                    <div className="inputCom">
                        <img src="/img/Rectangle 6.png" alt="" />
                        <input className="typeCom" type="text" placeholder="Express an opinion" />
                    </div>
                    <div className="oneComment">
                        <div className="profile"><img src="/img/Rectangle 6.png" alt="" /></div>
                        <div className="commentDesc">
                            <h4 className="nameCom">Asadbek Shomurodov <span className="redText">a day ago</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc ullamcorper semper... <span className="redText">More</span></p>
                        </div>
                    </div>
                    <div className="oneComment">
                        <div className="profile"><img src="/img/Rectangle 6.png" alt="" /></div>
                        <div className="commentDesc">
                            <h4 className="nameCom">Asadbek Shomurodov <span className="redText">a day ago</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc ullamcorper semper... <span className="redText">More</span></p>
                        </div>
                    </div>
                    <div className="oneComment">
                        <div className="profile"><img src="/img/Rectangle 6.png" alt="" /></div>
                        <div className="commentDesc">
                            <h4 className="nameCom">Asadbek Shomurodov <span className="redText">a day ago</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc ullamcorper semper... <span className="redText">More</span></p>
                        </div>
                    </div>
                    <div className="oneComment">
                        <div className="profile"><img src="/img/Rectangle 6.png" alt="" /></div>
                        <div className="commentDesc">
                            <h4 className="nameCom">Asadbek Shomurodov <span className="redText">a day ago</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc ullamcorper semper... <span className="redText">More</span></p>
                        </div>
                    </div>
                    <div className="oneComment">
                        <div className="profile"><img src="/img/Rectangle 6.png" alt="" /></div>
                        <div className="commentDesc">
                            <h4 className="nameCom">Asadbek Shomurodov <span className="redText">a day ago</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc ullamcorper semper... <span className="redText">More</span></p>
                        </div>
                    </div>
                    <div className="oneComment">
                        <div className="profile"><img src="/img/Rectangle 6.png" alt="" /></div>
                        <div className="commentDesc">
                            <h4 className="nameCom">Asadbek Shomurodov <span className="redText">a day ago</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc ullamcorper semper... <span className="redText">More</span></p>
                        </div>
                    </div>
                </div>
                <a className="more" href="/"><span className="redText">More all thoughts</span></a>
            </div>

            <div className="films">

                <h3 className="thg">Thoughts</h3>
                <div className="filmsrow">
                    <div className="oneFilm">
                        <img src="/img/Movie card.png" alt="" />
                    </div>
                    <div className="oneFilm">
                        <img src="/img/Movie card (1).png" alt="" />
                    </div>
                    <div className="oneFilm">
                        <img src="/img/Movie card (2).png" alt="" />
                    </div>
                    <div className="oneFilm">
                        <img src="/img/Movie card (3).png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OneMovie