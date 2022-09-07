import * as loading from "./../animations/99680-3-dots-loading.json";
import Lottie from "react-lottie";
import { useState } from "react";
import { Text } from "@chakra-ui/react";

const defaultOptions = {
  // loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const PreLoader = () => {
  return (
    <>
      <Text
        textAlign={"center"}
        fontSize="3xl"
        marginLeft={1}
        fontWeight={"black"}
        color={"brand.primary"}
      >
        POMOFI
      </Text>
      <Lottie options={defaultOptions} width={300} height={100} />
    </>
  );
};
