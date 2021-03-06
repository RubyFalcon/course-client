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

/**
 * The header displayed at the top of the screen, will display login only when a user isnt logged in
 * @param {*} props takes in onAdd as props
 */
const HomeHeader = ({ onAdd }) => {
  const { userData } = useGlobalContext();
  const { signin, logout } = useSignIn();

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
              fontStyle="initial"
              fontFamily="unset"
              as="h2"
              fontSize="32px"
              color={useColorModeValue("#57585d ", "#fff9e6")}
            >
              Tupay's Module Website
            </Heading>
          </Link>

          <Group>
            <Link href="/about">
              <Heading
                color="#c8b6b5"
                as="h3"
                fontSize="18px"
                paddingRight="5px"
              >
                About
              </Heading>
            </Link>

            {userData.First_Name ? (
              <>
                <Heading
                  color="#c8b6b5"
                  as={Link}
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
                  signIn={signin}
                />
                <Heading
                  color="#c8b6b5"
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
