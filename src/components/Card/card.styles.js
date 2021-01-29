import styled from "@emotion/styled/macro";
import { Box, ListItem } from "@chakra-ui/react";
export const CardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px 15px;
  height: 200px;
  transition: transform 250ms;
  padding: 10px;
  box-shadow: 1px 3px 3px #888888;
  &:hover,
  &[dataHover] &:focus {
    transform: translateY(-3px);
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto 0 0 0;
  padding-top: 20px;
`;

export const StyledList = styled(ListItem)`
  padding: 2px;
`;
