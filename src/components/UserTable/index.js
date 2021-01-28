import { Container, Stack } from "@chakra-ui/react";
import { Table, Th, Tbody, Td, Tr, Thead } from "../Table/Table";
import { useState, useEffect } from "react";
import axios from "axios";

/**
 * the UserTable is a Table to Display all the users who signed up, it uses useState and getUserData
 */
const UserTable = () => {
  const [userData, setUserData] = useState([]);
  /**
   * runs on render
   */
  useEffect(() => {
    getUserData();
  }, []);

  /**
   * simple get request to API
   */
  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/");
      console.log(response);

      setUserData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack as="student">
      <Container maxW="1280px">
        <Table>
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>User Id</Th>
              <Th>Address</Th>
              <Th>Date Of Birth</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData.map((user) => (
              <Tr>
                <Td>{user.First_Name}</Td>
                <Td>{user.Last_Name}</Td>
                <Td>{user.ID}</Td>
                <Td>{user.Address}</Td>
                <Td>{user.DOB}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </Stack>
  );
};

export default UserTable;
