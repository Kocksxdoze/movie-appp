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


function Comments() {
    return (
        <div>
            <Flex flexDir="column" alignItems="center" justifyContent="center" mt="100px" gap={10}>
                <Box display="flex" flexDir="row" gap={10}>
                    <Image src='/img/avatar.png' />
                    <Input type='text' placeholder='Add comment' border="none" borderBottom="1px solid white" borderRadius="0" width="880px" />
                </Box>
            </Flex>
            <Flex flexDir="row" alignItems="center" justifyContent="center" mt="100px" gap={10}>
                <Image src='/img/avatar.png' />
                <Box display="flex" flexDir="column " gap={5} textAlign="left">
                    <Tag background="transparent" color="white"> Asadbek<p></p><chakra.span color="red">a day ago</chakra.span></Tag>
                    <Tag background="transparent" color="white">Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc ullamcorper semper... More</Tag>
                </Box>
            </Flex>
            <Flex flexDir="row" alignItems="center" justifyContent="center" mt="100px" gap={10}>
                <Image src='/img/avatar.png' />
                <Box display="flex" flexDir="column " gap={5} textAlign="left">
                    <Tag background="transparent" color="white"> Asadbek<p></p><chakra.span color="red">a day ago</chakra.span></Tag>
                    <Tag background="transparent" color="white">Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc ullamcorper semper... More</Tag>
                </Box>
            </Flex>
            <Flex flexDir="row" alignItems="center" justifyContent="center" mt="100px" gap={10}>
                <Image src='/img/avatar.png' />
                <Box display="flex" flexDir="column " gap={5} textAlign="left">
                    <Tag background="transparent" color="white"> Asadbek<p></p><chakra.span color="red">a day ago</chakra.span></Tag>
                    <Tag background="transparent" color="white">Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc ullamcorper semper... More</Tag>
                </Box>
            </Flex>
            <Flex flexDir="row" alignItems="center" justifyContent="center" mt="100px" gap={10}>
                <Image src='/img/avatar.png' />
                <Box display="flex" flexDir="column " gap={5} textAlign="left">
                    <Tag background="transparent" color="white"> Asadbek<p></p><chakra.span color="red">a day ago</chakra.span></Tag>
                    <Tag background="transparent" color="white">Lorem ipsum dolor sit amet consectetur. Ac tortor vitae id lorem. Consectetur donec cursus massa nunc ullamcorper semper... More</Tag>
                </Box>
            </Flex>

            <Tag color="red" background="transparent" mt={25}>More all Thoughts</Tag>

        </div >
    )
}

export default Comments