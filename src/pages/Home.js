import React from "react";
import { Box, Heading, Text, Container, Button } from "@chakra-ui/react";
import { useGlobalContext } from "../Context/Context";
import { ButtonWrap } from "../components/Card/card.styles";
import { Link } from "react-router-dom";

/**
 * the Home page which display 2 separate things depending of if a user is logged in or not
 */
const Home = () => {
  const { userData } = useGlobalContext();

  console.log("in home", userData);

  return (
    <Container paddingTop="40px">
      {userData.First_Name ? (
        <Box maxW="1280px">
          <Text>
            Welcome in {userData.First_Name} feel free to check out our modules
            and choose the ones you like :D
          </Text>
          <ButtonWrap>
            <Button as={Link} to="/modules">
              Display all modules
            </Button>
          </ButtonWrap>
        </Box>
      ) : (
        <Box>
          <Heading size="lg" padding="10px" textAlign="center">
            Welcome To Tupay's Course and Module Application
          </Heading>
          <Text>Please Sign In or create to display </Text>
        </Box>
      )}
    </Container>
  );
};

export default Home;
