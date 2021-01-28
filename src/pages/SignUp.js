import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  useToast,
  Container,
  Heading,
  Box,
} from "@chakra-ui/react";
import { Form } from "./SignUp.styles";
import axios from "axios";

const SignUp = () => {
  const initialState = {
    email: "",
    First_Name: "",
    Last_Name: "",
    Address: "",
    DOB: "",
    hashed_password: "",
  };

  const [createduser, setCreatedUser] = useState(initialState);
  const success = useToast();

  function eventChange(event) {
    const { value, id } = event.target;

    setCreatedUser((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  async function handleSubmit(event) {
    let dataReturned = false;
    console.log(createduser);
    event.preventDefault();
    try {
      const posted = await axios.post(
        "http://localhost:5000/user/",
        createduser
      );

      if (posted) {
        console.log(posted.data);
        dataReturned = true;
      }
    } catch (error) {}
    setCreatedUser(initialState);

    if (dataReturned) {
      success({
        title: "User has been created",
        description: "You have successfully created your account",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
    }
  }

  return (
    <Container
      display="flex"
      alignItems="center"
      paddingTop="70px"
      maxW="800px"
      borderRadius="10px solid black"
    >
      <Stack spacing="24px">
        <Box color="red" borderRadius="10pxm solid black">
          <Heading paddingLeft="10px">
            Submit Your details in the Form Below
          </Heading>
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                value={createduser.email}
                onChange={eventChange}
                id="email"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="First_Name">First Name:</FormLabel>
              <Input
                value={createduser.First_Name}
                onChange={eventChange}
                id="First_Name"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="Last_Name">Last Name:</FormLabel>
              <Input
                value={createduser.Last_Name}
                onChange={eventChange}
                id="Last_Name"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="Address">Address:</FormLabel>
              <Input
                value={createduser.address}
                onChange={eventChange}
                id="address"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="DOB">Date Of Birth:</FormLabel>
              <Input
                value={createduser.DOB}
                onChange={eventChange}
                id="DOB"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password:</FormLabel>
              <Input
                onChange={eventChange}
                value={createduser.hashed_password}
                id="hashed_password"
                type="password"
              />
            </FormControl>
            <Button
              colorScheme="blue"
              aria-label="Submit form data"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Box>
      </Stack>
    </Container>
  );
};
export default SignUp;
