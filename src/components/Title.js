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

const Title = () => {
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
          <Button
            leftIcon={<AtSignIcon />}
            size={"sm"}
            background={"brand.primary"}
            color={"brand.background"}
            _hover={{ background: "brand.secondary" }}
          >
            Login
          </Button>
        </ButtonGroup>
      </Box>
    </Fragment>
  );
};

export default Title;
