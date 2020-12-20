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
  useToast,
} from "@chakra-ui/react";
import { Form } from "./UniversityCourseModulePanel.styles";

const initialState = {
  moduleName: "",
  moduleCode: "",
  startDate: "",
  endDate: "",
  courseName: "",
};

const UniversityCourseModulePanel = ({ onClose, isOpen, add }) => {
  const firstField = React.useRef();
  const success = useToast();

  const [form, setForm] = React.useState(initialState);
  function eventChange(event) {
    const { value, id } = event.target;

    setForm((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  }
  // function alertUser(event) {
  //   event.preventDefault();

  //   window.alert(JSON.stringify(form, null, 2));
  //   setForm(initialState);
  // }
  function handleSubmit(event) {
    event.preventDefault();

    add(form);
    setForm(initialState);

    onClose();

    success({
      title: "Module has been added.",
      description: "We've added your module details",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      initialFocusRef={firstField}
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new module
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Form>
                <FormControl>
                  <FormLabel htmlFor="moduleName">Module name:</FormLabel>
                  <Input
                    value={form.moduleName}
                    onChange={eventChange}
                    id="moduleName"
                    type="text"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="moduleCode">Module Code:</FormLabel>
                  <Input
                    onChange={eventChange}
                    value={form.moduleCode}
                    id="moduleCode"
                    type="text"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="startDate">Start Date:</FormLabel>
                  <Input
                    onChange={eventChange}
                    value={form.startDate}
                    id="startDate"
                    type="text"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="endDate">End Date:</FormLabel>
                  <Input
                    onChange={eventChange}
                    value={form.endDate}
                    id="endDate"
                    type="text"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="courseName">Course Name:</FormLabel>
                  <Input
                    onChange={eventChange}
                    value={form.courseName}
                    id="courseName"
                    type="text"
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
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default UniversityCourseModulePanel;
