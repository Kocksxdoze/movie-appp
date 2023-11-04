import { useState, useRef } from "react";
import { Link } from 'react-router-dom';
function CardInner({ el }) {
    const [isHovered, setIsHovered] = useState(true);

    return (
        <div
            className="parent"
            onMouseEnter={() => setIsHovered(false)}
            onMouseLeave={() => setIsHovered(true)}
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${el.poster_path})`
            }}
        >
            <p
                style={{
                    opacity: isHovered ? 0 : 1
                }}
                className="description "
            >
                {el.overview.slice(0, 300)}...
            </p>

        </div>
    );
}

export default function VideosList({ data }) {
    return (
        <>
            <section className="cardContainer">
                {data &&
                    data.map((el, index) => (
                        <Link to={`/movie/${el.id}`} key={index}>
                            <div className="card">
                                <CardInner el={el} />
                                <div>{el.title}</div>
                                <div>{el.name}</div>
                            </div>
                        </Link>
                    ))}
            </section>
        </>
    );
}