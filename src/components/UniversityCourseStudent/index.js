import { Container, Stack } from "@chakra-ui/react";
import { Table, Th, Tbody, Td, Tr, Thead } from "../Table/Table";

const UniversityCourseStudent = ({ studentData }) => (
  <Stack as="student">
    <Container maxW="1280px">
      <Table>
        <Thead>
          <Tr>
            <Th>Firstname</Th>
            <Th>studentId</Th>
            <Th>courseName</Th>
            <Th>courseStartDate</Th>
          </Tr>
        </Thead>
        <Tbody>
          {studentData.map((student) => (
            <Tr>
              <Td>{student.name}</Td>
              <Td>{student.studentId}</Td>
              <Td>{student.courseName}</Td>
              <Td>{student.courseStartDate}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  </Stack>
);

export default UniversityCourseStudent;
