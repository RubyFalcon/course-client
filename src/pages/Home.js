import React from 'react'
import {Box, Heading , Text, Container} from "@chakra-ui/react"
import { useGlobalContext } from '../Context/Context'

const Home = () => {
    const { userData } = useGlobalContext();

    console.log("in home", userData);

    return (
        <Container paddingTop="40px">
            <Box maxW="1280px">
                <Heading size="lg" padding="10px" textAlign="center">Welcome To Tupay's Course and Module Application</Heading>
                <Text>Please Sign In or create to display </Text>
                <Text>{userData.First_Name}</Text>
            </Box>
        </Container>
        
    )
}

export default Home
