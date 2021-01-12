import {
  Container,
  Link,
  Flex,
  Heading,
  useColorModeValue,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import DarkModeSwitch from "./DarkModeSwitch";
import { HeaderSection, Group } from "./header.styles";
import UniversityCourseModulePanel from "../UniversityCourseModulePanel";

const Header = ({ onAdd }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //we want to change the light and darkmode values
  return (
    
    <HeaderSection as="header">
      <Container maxW="1280px">
        <Flex
          py={2}
          direction="row"
          justifyContent="space-between"
          align="center"
        >
          <Link href="/">
            <Heading
              as="h2"
              fontSize="26px"
              color={useColorModeValue("#2D3748", "#CBD5E0")}
            >
              Tupay's Module Website
            </Heading>
          </Link>
       
          <Group>
          <Link>
            <Heading as='h3' fontSize='18px' lineHeight="35px" paddingLeft='10px' paddingRight="15px">Sign in</Heading>
            </Link>
            <UniversityCourseModulePanel
              isOpen={isOpen}
              onClose={onClose}
              add={onAdd}
            />
            <IconButton
              icon={<AddIcon />}
              colorScheme="teal"
              onClick={onOpen}
            />
            
            <DarkModeSwitch />
          </Group>
        </Flex>
      </Container>
    </HeaderSection>
  );
};

export default Header;
