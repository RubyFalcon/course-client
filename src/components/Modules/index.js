import React, { useEffect, useState } from "react";
import { Container, SimpleGrid, Stack } from "@chakra-ui/react";
import Card from "../Card";
import axios from "axios";
import { useGlobalContext } from "../../Context/Context";

//data is a destructured props
const Modules = () => {
  const { userData } = useGlobalContext();

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/modules/all");

    setData(response.data.data);
  };

  return (
    <Stack as="modules">
      <Container maxW="1280px">
        {userData.First_Name ? (
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} py={10}>
            {data.map((item, idx) => (
              <Card key={idx} {...item} />
            ))}
          </SimpleGrid>
        ) : (
          ""
        )}
      </Container>
    </Stack>
  );
};

export default Modules;
