import {
  Container,
  Link,
  Flex,
  Heading,
  useColorModeValue,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import {Link as RouterLink} from 'react-router-dom';
import { AddIcon } from "@chakra-ui/icons";
import DarkModeSwitch from "./DarkModeSwitch";
import { HeaderSection, Group } from "./header.styles";
import ModulePanel from "../ModulePanel";
import Signin from "../signin";


const Header = ({ onAdd,onSignIn }) => {
  const { isOpen: moduleIsOpen, onOpen: moduleOnOpen, onClose: moduleOnClose } = useDisclosure();
  const { isOpen: signInIsOpen, onOpen: signInOnOpen, onClose: signInOnClose } = useDisclosure();
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
            <ModulePanel
              isOpen={moduleIsOpen}
              onClose={moduleOnClose}
              add={onAdd}
            />
            {/*  */}
            <IconButton
              icon={<AddIcon />}
              colorScheme="teal"
              onClick={moduleOnOpen}
            />
            
            <DarkModeSwitch />
          </Group>
        </Flex>
      </Container>
    </HeaderSection>
  );
};

export default Header;
