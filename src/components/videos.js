import { useState, useRef } from "react";


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
            )
        </div>
    );
}

export default function VideosList({ data }) {
    const imageRef = useRef();
    const handleHover = (index) => {
        const image = imageRef.current;
        image.className = "hidden";
        console.log(image.className);
    };
    return (
        <>
            <section className="cardContainer">
                {data &&
                    data.map((el, index) => (
                        <div className="card" key={index}>
                            <CardInner el={el} />
                            {el.title}
                            {el.name}
                        </div>
                    ))}
            </section>
        </>
    );
}