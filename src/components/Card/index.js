import { useColorModeValue, UnorderedList, Button } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { CardContainer, ButtonWrap, StyledList } from "./card.styles";
import { Link } from "react-router-dom";
import moment from "moment";

/**
 * this Card is a Box wrapped around a unordered list, displaying our modules on page
 * @param {*} props takes is props and displays them on page
 */
const Card = ({ Name, Code, Start_Date, End_Date, Course_Name }) => {
  return (
    <CardContainer
      bg={useColorModeValue("gray.50", "gray.700")}
      borderRadius="5px"
    >
      <UnorderedList listStyleType="none">
        <StyledList>Module Name: {Name}</StyledList>
        <StyledList>Module Code: {Code}</StyledList>
        <StyledList>
          Start Date:{" "}
          {moment(Start_Date, moment.HTML5_FMT.DATETIME_LOCAL_MS).format(
            "DD-MM-YYYY"
          )}
        </StyledList>
        <StyledList>
          End Date:{" "}
          {moment(End_Date, moment.HTML5_FMT.DATETIME_LOCAL_MS).format(
            "DD-MM-YYYY"
          )}
        </StyledList>
        <StyledList>Course Name: {Course_Name}</StyledList>
      </UnorderedList>
      <ButtonWrap>
        <Button
          size="sm"
          //onClick={}
          leftIcon={<InfoIcon />}
          as={Link}
          to={`/modules/${Code}`}
        >
          Details
        </Button>
      </ButtonWrap>
    </CardContainer>
  );
};

export default Card;
