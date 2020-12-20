import {
  Box,
  useColorModeValue,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const Card = ({ moduleName, moduleCode, startDate, endDate, courseName }) => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "#4A5568")}
      borderRadius="5px"
      px={10}
      py={5}
    >
      <UnorderedList listStyleType="none">
        <ListItem>Module Name: {moduleName}</ListItem>
        <ListItem>Module Code: {moduleCode}</ListItem>
        <ListItem>Start Date: {startDate}</ListItem>
        <ListItem>End Date: {endDate}</ListItem>
        <ListItem>Course Name: {courseName}</ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Card;
