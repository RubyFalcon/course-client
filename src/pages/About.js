import React from "react";
import { Heading, Container, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container paddingTop="70px" maxW="1280px">
      <Heading textAlign="center" padding="20px">
        This website is all about modules
      </Heading>
      <Text textAlign="center" padding="10px">
        This website contains details on differet modules that are available out
        there, form Courses like Business to Physics to engineering and even
        Computer Science. You will need to create an account to view these
        modules but once you have, you have free reign to add, delete, or view
        the modules. Want to see other users who use our app, not to worry, just
        look under our user-data section.
      </Text>
    </Container>
  );
};

export default About;
