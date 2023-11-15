import React, { useState, useEffect } from 'react'
import fetcher from '../utils/fetcher'
import OneChip from './oneChip'
import { Container } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules';
import "swiper/css/navigation"
function Chips() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetcher("/genre/movie/list")
            .then((responseData) => {
                setData(responseData.genres)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <section>
            <Container maxW={"80%"} pt={10} pb={10}>
                <Swiper
                    spaceBetween={-30}
                    slidesPerView={8}
                    freeMode={true}
                    modules={[Navigation]}
                    navigation={true}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 2,
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 2,
                        },

                        1028: {
                            slidesPerView: 5,
                            spaceBetween: 2,
                        },
                        1920: {
                            slidesPerView: 7,
                            spaceBetween: 2,
                        },
                        2000: {
                            slidesPerView: 10,
                            spaceBetween: 2,
                        },
                    }}
                >
                    {data.map((oneGenre, indx) => (
                        <SwiperSlide key={indx} dir='row'>
                            <OneChip name={oneGenre.name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section >
    )
}

export default Chips