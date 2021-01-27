import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
} from "@chakra-ui/react";
import { Form } from "../ModulePanel/ModulePanel.styles";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Signin = ({ onClose, isOpen, signIn }) => {
  const secondField = React.useRef();

  const [user, setUser] = React.useState(initialState);

  function eventChange(event) {
    const { value, id } = event.target;

    setUser((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("user signed in with data:", user);
    signIn(user);
    setUser(initialState);

    onClose();
  }

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      initialFocusRef={secondField}
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Sign In</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Form>
                <FormControl>
                  <FormLabel htmlFor="email">Email:</FormLabel>
                  <Input
                    value={user.email}
                    onChange={eventChange}
                    id="email"
                    type="text"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password:</FormLabel>
                  <Input
                    onChange={eventChange}
                    value={user.password}
                    id="password"
                    type="password"
                  />
                </FormControl>
              </Form>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              aria-label="Submit form data"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button colorScheme="red" as={Link} to="/signup">
              Create Account
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Signin;
