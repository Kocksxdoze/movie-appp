import React from 'react'
import {
    Tag,
    Flex,
    Box,
    Image,
    chakra,
    Heading,
    Button,
    Input,
    Center,
} from '@chakra-ui/react'


function Comments({ data }) {
    return (
        <div className='commentContainer'>

            <div className='oneComment'>
                <div className='profile'>
                    <img src='/img/avatar.png' />
                </div>
                <div className='commentDesc'>
                    <h4 className='nameCom'>
                        {data.name}
                    </h4>
                    <p>
                        {data.comment}
                    </p>
                </div>


            </div>
        </div >
    )
}

export default Comments