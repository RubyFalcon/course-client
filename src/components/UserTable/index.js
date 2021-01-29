import { Container, Heading, Stack } from "@chakra-ui/react";
import { Table, Th, Tbody, Td, Tr, Thead } from "../Table/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../../Context/Context";
import moment from "moment";
/**
 * the UserTable is a Table to Display all the users who signed up, it uses useState and getUserData
 */
const UserTable = () => {
  const { userData } = useGlobalContext();
  const [allUserData, setAllUserData] = useState([]);
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

      setAllUserData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack as="student">
      <Container maxW="1280px">
        {userData.First_Name ? (
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
              {allUserData.map((user) => (
                <Tr>
                  <Td>{user.First_Name}</Td>
                  <Td>{user.Last_Name}</Td>
                  <Td>{user.ID}</Td>
                  <Td>{user.Address}</Td>
                  <Td>
                    {moment(
                      user.DOB,
                      moment.HTML5_FMT.DATETIME_LOCAL_MS
                    ).format("DD MMM YYYY")}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        ) : (
          <Heading>You need to be signed in to see this</Heading>
        )}
      </Container>
    </Stack>
  );
};

export default UserTable;
