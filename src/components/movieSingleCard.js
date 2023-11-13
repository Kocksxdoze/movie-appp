import React from 'react'
import { Link } from 'react-router-dom';
import {
    Tag,
    Flex,
    Box,
    Image,
    chakra,
    Heading,
    Button,
} from '@chakra-ui/react'
import _ from "lodash";

function MovieSingleCard({ movie, indx }) {
    const ranking = Math.round(movie.vote_average / 2)
    return (
        <div>
            <Link to={`/movie/${movie.id}`} key={indx}>
                <Box
                    height={600}
                    w={370}
                    display={"flex"}
                    flexDir={"column"}
                    backgroundBlendMode={"darken"}
                    backgroundColor={"#616161d4"}
                    justifyContent={"flex-end"}
                    pb={2}
                    backgroundRepeat={"no-repeat"}
                    backgroundSize={"cover"}
                    borderRadius={10}
                    backgroundImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                >
                    <span>
                        <Flex ml={"10%"} pb="20px">
                            {_.times(ranking).map(() => (
                                <svg width="18" height="18" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99992 2.61355L7.95832 5.36522L8.13362 5.86853H8.66659H11.5205L9.31054 7.62808L8.91732 7.94117L9.05742 8.42388L9.86838 11.2179L7.41976 9.56372L6.99992 9.28009L6.58008 9.56372L4.13146 11.2179L4.94242 8.42388L5.08252 7.94117L4.6893 7.62808L2.47933 5.86853H5.33325H5.86622L6.04152 5.36522L6.99992 2.61355Z" fill="white" stroke="white" stroke-width="1.5" />
                                </svg>

                            ))}
                        </Flex>
                    </span>
                    <Heading size={"md"} ml={"10%"} color={"white"} textAlign={"left"} fontSize={"24px"} pb={"50px"}>
                        {movie.title}

                    </Heading>
                </Box>
            </Link>
        </div>
    )
}

export default MovieSingleCard