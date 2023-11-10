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
import _ from "lodash";

function MovieSingleCard({ movie }) {
    const ranking = Math.round(movie.vote_average / 2)
    return (
        <div>
            <Box
                height={600}
                w={400}
                display={"flex"}
                flexDir={"column"}
                backgroundBlendMode={"darken"}
                backgroundColor={"#616161d4"}
                justifyContent={"flex-end"}
                pb={2}
                backgroundRepeat={"no-repeat"}
                backgroundSize={"cover"}
                backgroundImage={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            >
                <Heading size={"md"} color={"white"}>
                    {movie.title}

                </Heading>
                <span>
                    <Flex>
                        {_.times(ranking).map(() => (
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99992 2.61355L7.95832 5.36522L8.13362 5.86853H8.66659H11.5205L9.31054 7.62808L8.91732 7.94117L9.05742 8.42388L9.86838 11.2179L7.41976 9.56372L6.99992 9.28009L6.58008 9.56372L4.13146 11.2179L4.94242 8.42388L5.08252 7.94117L4.6893 7.62808L2.47933 5.86853H5.33325H5.86622L6.04152 5.36522L6.99992 2.61355Z" fill="white" stroke="white" stroke-width="1.5" />
                            </svg>

                        ))}
                    </Flex>
                </span>
            </Box>
        </div>
    )
}

export default MovieSingleCard