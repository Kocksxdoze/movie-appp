import React from 'react'
import {
    Tag,
    Flex,
    Box,
    Image,
    chakra,
    Heading,
    Button,
} from '@chakra-ui/react'

function Thoughts() {
    return (
        <div>
            <Box textAlign="left" ml="370px">
                <Tag background="transparent" fontSize="32px" color="white" textAlign="left !important" gap={3} mt="50px" >

                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.25 5.56699C10.5833 5.75944 10.5833 6.24056 10.25 6.43301L1.25 11.6292C0.916666 11.8216 0.5 11.5811 0.5 11.1962V0.803847C0.5 0.418947 0.916667 0.178385 1.25 0.370835L10.25 5.56699Z" fill="#E50914" />
                    </svg>
                    Thoughts</Tag>
            </Box>
            <Flex alignItems="center" justifyContent="center">
                <Box display="flex" flexDir="row" mt="50px" gap={10} alignItems="center" justifyContent="center" >
                    <Image src='/img/Movie card.png' />
                    <Image src='/img/Movie card (1).png' />
                    <Image src='/img/Movie card (2).png' />
                    <Image src='/img/Movie card (3).png' />
                </Box>
            </Flex>

        </div>
    )
}

export default Thoughts