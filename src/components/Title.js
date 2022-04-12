import { Fragment } from "react";
import { Text } from "@chakra-ui/react";

const Title = () => {
  return (
    <Fragment>
      <Text
        textAlign={"center"}
        fontSize="5xl"
        fontWeight={"black"}
        color={"brand.primary"}
        pt={5}
      >
        POMOFI
      </Text>
    </Fragment>
  );
};

export default Title;
