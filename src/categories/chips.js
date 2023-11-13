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
                    loop
                    modules={[Navigation]}
                    navigation={true}
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