import {
  Container,
  Link,
  Flex,
  Heading,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import DarkModeSwitch from "./DarkModeSwitch";
import { HeaderSection, Group } from "./header.styles";
import ModulePanel from "../ModulePanel";
import Signin from "../signin";
import { useGlobalContext } from "../../Context/Context";
import useSignIn from "../../Hooks/useSignIn";

const HomeHeader = ({ onAdd, onSignIn }) => {
  const { userData } = useGlobalContext();
  const { sigin, logout } = useSignIn();

  const {
    isOpen: moduleIsOpen,
    onOpen: moduleOnOpen,
    onClose: moduleOnClose,
  } = useDisclosure();
  const {
    isOpen: signInIsOpen,
    onOpen: signInOnOpen,
    onClose: signInOnClose,
  } = useDisclosure();
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
            <Heading as="h3" fontSize="18px" paddingRight="5px">
              About
            </Heading>
            {userData.First_Name ? (
              <>
                <Heading
                  onClick={logout}
                  fontSize="18px"
                  paddingLeft="10px"
                  paddingRight="10px"
                >
                  Log Out
                </Heading>
                <IconButton
                  icon={<AddIcon />}
                  colorScheme="teal"
                  onClick={moduleOnOpen}
                />
              </>
            ) : (
              <Link>
                <Signin
                  isOpen={signInIsOpen}
                  onClose={signInOnClose}
                  signIn={sigin}
                />
                <Heading
                  onClick={signInOnOpen}
                  as="h3"
                  fontSize="18px"
                  lineHeight="35px"
                  paddingLeft="10px"
                  paddingRight="15px"
                >
                  Sign in
                </Heading>
              </Link>
            )}

            <ModulePanel
              isOpen={moduleIsOpen}
              onClose={moduleOnClose}
              add={onAdd}
            />
            <DarkModeSwitch />
          </Group>
        </Flex>
      </Container>
    </HeaderSection>
  );
};

export default HomeHeader;
