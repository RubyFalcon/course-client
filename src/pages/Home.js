import React from "react";
import { Box, Heading, Text, Container, Button, Flex } from "@chakra-ui/react";
import { useGlobalContext } from "../Context/Context";
import { ButtonWrap } from "../components/Card/card.styles";
import { Link } from "react-router-dom";
import { Group } from "../components/Header/header.styles";

/**
 * the Home page which display 2 separate things depending of if a user is logged in or not
 */
const Home = () => {
  /**
   * allows us to change what the user sees depending on wether or not they are logged in
   */
  const { userData } = useGlobalContext();

  return (
    <Container paddingTop="40px">
      {userData.First_Name ? (
        <Box maxW="1280px" alignItems="center">
          <Text fontFamily="serif">
            Welcome in {userData.First_Name} feel free to check out our modules
            and choose the ones you like :D
          </Text>
          <Flex width="60%" justifyContent="space-between" alignItems="center">
            <ButtonWrap>
              <Button as={Link} to="/modules" paddingRight="5px">
                Display all modules
              </Button>
            </ButtonWrap>
            <ButtonWrap>
              <Button padding="0px 20px" as={Link} to="/user-data">
                Our Users
              </Button>
            </ButtonWrap>
          </Flex>
        </Box>
      ) : (
        <Box maxW="1280px ">
          <Heading
            fontFamily="serif"
            size="lg"
            padding="10px"
            textAlign="center"
          >
            Welcome To Tupay's Course and Module Application
          </Heading>
          <Text paddingTop="5px" fontSize="22px" textAlign="center">
            Please Sign In or create an account to display our modules and users
          </Text>
        </Box>
      )}
    </Container>
  );
};

export default Home;
