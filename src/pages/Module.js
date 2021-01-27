import React from "react";
import useModule from "../Hooks/useModule";
import { useParams } from "react-router-dom";
import { Container, Box, Heading } from "@chakra-ui/react";
import { CourseName, TextData } from "./Module.styles";
import { useGlobalContext } from "../Context/Context";

const Module = () => {
  const { userData } = useGlobalContext();
  const { moduleCode } = useParams();
  const { Code, Name, Course_Name, Start_Date, End_Date, ID } = useModule(
    moduleCode
  );

  return (
    <Container maxW="1280px">
      {userData.First_Name ? (
        <Box
          padding="20px"
          mr="50px"
          mt="50px"
          bg="gray.700"
          width="50%"
          borderRadius="10px"
        >
          <Heading fontSize="24px">ModuleName: {Name}</Heading>
          <TextData fontSize="18px">Module Code: {Code}</TextData>
          <TextData fontSize="18px">ID: {ID}</TextData>
          <TextData>Starting Date: {Start_Date}</TextData>
          <TextData>End Date: {End_Date}</TextData>
          <CourseName>{Course_Name}</CourseName>
        </Box>
      ) : (
        <Box>
          <Heading fontSize="24px">
            Sign In Required to view these routes
          </Heading>
          <TextData>
            If you wish to view this module please login or create an account
          </TextData>
        </Box>
      )}
    </Container>
  );
};

export default Module;
