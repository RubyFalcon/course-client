import React from "react";
import useModule from "../Hooks/useModule";
import { useParams } from "react-router-dom";
import { Container, Box, Heading, useToast, Button } from "@chakra-ui/react";
import { CourseName, TextData } from "./Module.styles";
import { useGlobalContext } from "../Context/Context";
import axios from "axios";
import { useHistory } from "react-router-dom";
import moment from "moment";

/**
 * a Module page displaying extra details about a module. Will only display if a user is logged in
 */
const Module = () => {
  const history = useHistory();
  const deleted = useToast();
  const { userData } = useGlobalContext();
  const { moduleCode } = useParams();
  const { Code, Name, Course_Name, Start_Date, End_Date, ID } = useModule(
    moduleCode
  );

  const deleteModule = async () => {
    console.log(Code);
    const deletedModule = await axios.delete(
      `http://localhost:5000/modules/${Code}`
    );
    if (deletedModule) {
      deleted({
        title: "Module",
        description: "Module was deleted from the table",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      history.push("/modules");
    }
  };
  console.log(typeof Start_Date);

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
          <TextData>
            Starting Date:{" "}
            {moment(Start_Date, moment.HTML5_FMT.DATETIME_LOCAL_MS).format(
              "DD MMM YYYY"
            )}
          </TextData>
          <TextData>
            End Date:{" "}
            {moment(End_Date, moment.HTML5_FMT.DATETIME_LOCAL_MS).format(
              "DD MMM YYYY"
            )}
          </TextData>
          <CourseName>{Course_Name}</CourseName>
          <Button onClick={deleteModule} bgColor="red">
            Delete
          </Button>
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
