import {
  useColorModeValue,
  UnorderedList,
  Button
} from "@chakra-ui/react";
import { InfoIcon} from '@chakra-ui/icons';
import {CardContainer, ButtonWrap, StyledList} from "./card.styles";
import { Link } from "react-router-dom";

const Card = ({ Name, Code, Start_Date, End_Date, Course_Name }) => {
  return (
    <CardContainer
      bg={useColorModeValue("gray.50", "gray.700")}
      borderRadius="5px"
     
    >
      <UnorderedList listStyleType="none">
        <StyledList>Module Name: {Name}</StyledList>
        <StyledList>Module Code: {Code}</StyledList>
        <StyledList>Start Date: {Start_Date}</StyledList>
        <StyledList>End Date: {End_Date}</StyledList>
        <StyledList>Course Name: {Course_Name}</StyledList>
      </UnorderedList>
      <ButtonWrap>
      <Button
        size="sm"
        //onClick={}
        leftIcon={<InfoIcon />}
        as={Link}
        to={`/quote/${Code}`}
      >
        Details
      </Button>
      </ButtonWrap>
      
    </CardContainer>
  );
};

export default Card;
