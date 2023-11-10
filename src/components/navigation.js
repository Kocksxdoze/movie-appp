import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import {
    Tag,
    Flex,
    Box,
    Image,
    chakra,
    Heading,
    Button,
} from '@chakra-ui/react'
function Navigation() {
    return (
        <div>
            <Flex alignItems={"center"}
                justifyContent={"center"}
            >
                <Swiper spaceBetween={0}
                    slidesPerView={"auto"}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                        <Box display={"flex"}
                            gap={5}
                            flexDir={"row"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            mt={10}
                        >
                            <Button color={"white"} backgroundColor={"#E50914"} w={130} borderRadius={20} _hover={0}>Action</Button>
                            <Button color={"white"} backgroundColor={"#17161B"} w={130} borderRadius={20} _hover={0}>Comedy</Button>
                            <Button color={"white"} backgroundColor={"#17161B"} w={130} borderRadius={20} _hover={0}>Adventure</Button>
                            <Button color={"white"} backgroundColor={"#E50914"} w={130} borderRadius={20} _hover={0}>Drama</Button>
                            <Button color={"white"} backgroundColor={"#17161B"} w={130} borderRadius={20} _hover={0}>Animation</Button>
                            <Button color={"white"} backgroundColor={"#E50914"} w={130} borderRadius={20} _hover={0}>Fantasy</Button>
                            <Button color={"white"} backgroundColor={"#17161B"} w={130} borderRadius={20} _hover={0}>Family</Button>
                            <Button color={"white"} backgroundColor={"#17161B"} w={130} borderRadius={20} _hover={0}>Horror</Button>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Flex>
        </div >
    )
}

export default Navigation