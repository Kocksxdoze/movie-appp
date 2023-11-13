import React from "react";
import MovieSlider from "../components/movieSlider";
import Navigation from "../components/navigation";
import Chips from "../categories/chips";
export default function Home() {



    return (
        <>
            <div className="main">
                <button className="top">TOP</button>
                <h1>Spider man no way home</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc ullamcorper semper.</p>
                <p>2022 |  <span className="age">16+</span> | 1 Seans | TV series for teenagers</p>
                <p>Seans 1 - Eplscode 1 - Genre comedy, detective, detective </p>
                <button className="watch">Watch</button>
            </div>
            <Navigation />
            <Chips />
            <MovieSlider title={"Recommended"} url={"/movie/top_rated"} />
            <MovieSlider title={"Popular"} url={"/movie/popular"} />
            <MovieSlider title={"Series"} url={"/tv/popular"} />
            <MovieSlider title={"Multifilms"} url={"/movie/upcoming"} />
        </>
    );
}