import React from "react";
import { Container, SimpleGrid, Stack } from "@chakra-ui/react";
import Card from "../Card";
//data is a destructured props
const Modules = ({ data }) => {
  return (
    <Stack as="modules">
      <Container maxW="1280px">
        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={10} py={10}>
          {data.map((item, idx) => (
            <Card key={idx} {...item} />
          ))}
        </SimpleGrid>
      </Container>
    </Stack>
  );
};

export default Modules;
