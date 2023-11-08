import { ListItem, UnorderedList } from '@chakra-ui/react'
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

function MovieCard({ data }) {
    return (
        <div>
            <Flex ml="100px">
                <Box>
                    <Image borderRadius="15px" height="320px" src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} />
                </Box>
                <Box>
                    <Heading color="white" ml="10px" mb="12px">{data.title}</Heading>

                    <UnorderedList display="flex" flexDir="column" gap={3} textAlign="left" ma="10px" fontWeight="600">
                        <ListItem>Name: <chakra.span color="#E50914">{data.original_title}</chakra.span></ListItem>
                        <ListItem>Time: <chakra.span color="#E50914">{data.runtime} minutes</chakra.span></ListItem>
                        <ListItem>Date: <chakra.span color="#E50914">{data.release_date.slice(0, 4)}</chakra.span></ListItem>
                        <ListItem>Genre: <chakra.span color="#E50914">{data.genres.map((genre) => genre.name).join(', ')}</chakra.span></ListItem>

                        <ListItem>Language: <chakra.span color="#E50914">{data.spoken_languages[0].english_name}</chakra.span></ListItem>
                        <ListItem display="flex" flexDir="row" gap={2} alignItems="center" justifyContent="flex-start"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 8H14.388L15.511 4.633C15.713 4.025 15.611 3.351 15.236 2.831C14.861 2.311 14.253 2 13.612 2H12C11.703 2 11.422 2.132 11.231 2.36L6.531 8H4C2.897 8 2 8.897 2 10V19C2 20.103 2.897 21 4 21H17.307C17.7139 20.9986 18.1108 20.8738 18.4452 20.6421C18.7796 20.4103 19.0359 20.0825 19.18 19.702L21.937 12.351C21.9789 12.2387 22.0002 12.1198 22 12V10C22 8.897 21.103 8 20 8ZM4 10H6V19H4V10ZM20 11.819L17.307 19H8V9.362L12.468 4H13.614L12.052 8.683C12.0013 8.83331 11.9871 8.99355 12.0107 9.15043C12.0343 9.3073 12.095 9.45629 12.1877 9.58504C12.2803 9.71379 12.4024 9.8186 12.5436 9.89076C12.6849 9.96293 12.8414 10.0004 13 10H20V11.819Z" fill="#0DE509" />
                        </svg>{data.vote_count}
                        </ListItem>
                    </UnorderedList>

                    <Flex ml="20px" mt="10px" gap={2}>
                        <Button
                            bg="#E50914"
                            color="white"
                            borderRadius="20px"
                            leftIcon={<svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 5.63398C11.1667 6.01888 11.1667 6.98113 10.5 7.36603L2.25 12.1292C1.58333 12.5141 0.75 12.0329 0.75 11.2631L0.75 1.73686C0.75 0.967059 1.58333 0.485935 2.25 0.870835L10.5 5.63398Z" fill="white" />
                            </svg>}>
                            WATCH</Button>
                        <Button color="white" bg="#17161B" borderRadius="20px">DOWNLOAD</Button>
                    </Flex>


                </Box>
            </Flex>
            <Flex mt="20px" flexDir="column">
                <Tag bg="transparent"
                    color="white"
                    fontSize="24px"
                    fontWeight="600"
                    ml="90px"
                >About the movie</Tag>

                <Tag bg="transparent"
                    color="white"
                    fontWeight="500"
                    textAlign="left"
                    mt="20px"
                    ml="90px"
                    width="80%">{data.overview}</Tag>
            </Flex>



        </div>
    )
}

export default MovieCard