/* eslint-disable @next/next/link-passhref */
import { Fragment } from "react";
import { Box, Button, ButtonGroup, DefaultIcon, Text } from "@chakra-ui/react";
import {
  AddIcon,
  AtSignIcon,
  BellIcon,
  ChatIcon,
  EmailIcon,
  InfoIcon,
  InfoOutlineIcon,
  LinkIcon,
  SettingsIcon,
  SunIcon,
  TimeIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import Link from "next/link";

// Icons
import { FaUserAlt } from "react-icons/fa";

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";

// Modal Account
import { ModalAccount } from "./ModalAccount";

const Title = () => {
  const [user] = useAuthState(auth);

  return (
    <Fragment>
      <Box
        w={"100%"}
        margin="0 auto"
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent={"space-evenly"}
        pt={5}
      >
        <Box display={"flex"} alignItems="center" justifyContent={"center"}>
          <BellIcon w={6} h={6} color="brand.primary" />
          <Text
            textAlign={"center"}
            fontSize="3xl"
            marginLeft={1}
            fontWeight={"black"}
            color={"brand.primary"}
          >
            POMOFI
          </Text>
        </Box>
        <ButtonGroup>
          <Button
            leftIcon={<SettingsIcon />}
            size={"sm"}
            background={"brand.primary"}
            color={"brand.background"}
            _hover={{ background: "brand.secondary" }}
          >
            Settings
          </Button>
          <Button
            leftIcon={<InfoIcon />}
            size={"sm"}
            background={"brand.primary"}
            color={"brand.background"}
            _hover={{ background: "brand.secondary" }}
          >
            About
          </Button>
          {user ? (
            <>
              <ModalAccount dataUser={user} />
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <Button
                  leftIcon={<FaUserAlt />}
                  size={"sm"}
                  background={"brand.primary"}
                  color={"brand.background"}
                  _hover={{ background: "brand.secondary" }}
                >
                  Login
                </Button>
              </Link>
            </>
          )}
        </ButtonGroup>
      </Box>
    </Fragment>
  );
};

export default Title;
