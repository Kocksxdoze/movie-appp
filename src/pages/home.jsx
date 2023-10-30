import "../index.css";
import React, { useState, useEffect } from "react";
import VideosList from "./../components/videos";
import Input from "./../components/input";

// import { arrayOfVideos } from "./db/db";

export default function Home() {
    const [videos, setVideos] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const [contentType, setContentType] = useState("movies");

    useEffect(() => {
        const fethcData = () => {
            fetch(
                "https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=1",
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODk3ODRiZjZkZDY0YjM1OTg1OWUxM2MxZTAyYjc4ZiIsInN1YiI6IjY1MzkwYTcxMGZiMTdmMDEzOGZjY2I0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-uRJx4DycDZ1HnYGChzFThZVy2FKxZQ8DeNtudYP1wM"
                    }
                }
            )
                .then((res) => res.json())
                .then((data) => setVideos(data.results))

                .catch((err) => console.error("error:" + err));
        };
        fethcData();
    }, []);

    const fetchContent = (type) => {
        const apiKey =
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODk3ODRiZjZkZDY0YjM1OTg1OWUxM2MxZTAyYjc4ZiIsInN1YiI6IjY1MzkwYTcxMGZiMTdmMDEzOGZjY2I0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-uRJx4DycDZ1HnYGChzFThZVy2FKxZQ8DeNtudYP1wM";
        const apiUrl =
            type === "movies"
                ? "https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=1"
                : "https://api.themoviedb.org/3/tv/popular?language=ru-RU&page=1";

        fetch(apiUrl, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${apiKey}`
            }
        })
            .then((res) => res.json())
            .then((data) => setVideos(data.results))
            .catch((err) => console.error("error:" + err));
    };

    const switchToMovies = () => {
        setContentType("movies");
        fetchContent("movies");
    };

    const switchToSeries = () => {
        setContentType("series");
        fetchContent("series");
    };

    const filterData = (prompt) => {
        setSearchValue(prompt);
        if (prompt.length > 0) {
            const filteredData = videos.filter((video) => {
                return contentType === "movies" ? video.title.toLowerCase().includes(prompt.toLowerCase()) : video.name.toLowerCase().includes(prompt.toLowerCase());
            });
            setVideos(filteredData);
        } else setVideos(videos);
    };

    return (
        <>

            <div className="main">

                <h1>Expend4bles</h1>
                {document.title}
                <p>
                    Armed with every weapon they can get their hands on and the skills to
                    use them, The Expendables are the world’s last line of defense and the
                    team that gets called when all other options are off the table. But
                    new team members with new styles and tactics are going to give “new
                    blood” a whole new meaning.
                </p>
            </div>

            <div className="inputContainer">
                <Input setSearchValue={filterData} searchValue={searchValue} />
            </div>
            <div className="moviesContainer">
                <div className="buttonsSwitch">
                    <button className="left" onClick={switchToMovies}>
                        Movies
                    </button>
                    <button className="right" onClick={switchToSeries}>
                        Series
                    </button>
                </div>
                <h2>Popular {contentType === "movies" ? "Movies" : "Series"}</h2>
                {videos.length > 0 ? (
                    <VideosList data={videos} />
                ) : (
                    <h2> No matches for {searchValue} </h2>
                )}
            </div>
        </>
    );
}