import React from 'react'
import MovieSingleCard from './movieSingleCard'
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react'
import { useEffect } from 'react'
import fetcher from '../utils/fetcher'
import {
    Tag,
    Flex,
    Box,
    Image,
    chakra,
    Heading,
    Button,
} from '@chakra-ui/react'

function MovieSlider({ url, title }) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetcher(url)
            .then((responseData) => {
                setData(responseData.results)
            })
            .catch((err) => console.error("error:" + err))
    }, []);
    return (
        <div>
            <Heading>
                {title}
            </Heading>
            <Swiper
                spaceBetween={0}
                slidesPerView={"auto"}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((movie, indx) => (
                    <SwiperSlide key={indx}>
                        <MovieSingleCard movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    )
}

export default MovieSlider