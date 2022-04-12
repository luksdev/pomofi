import { Stack, Text, Box } from "@chakra-ui/react";
import { Fragment } from "react";

// Components
import Title from "../src/components/Title";
import Counter from "../src/components/Counter";

export default function Home() {
  return (
    <Fragment>
      {/* Main */}
      <Stack bgColor={"brand.background"} h="100vh" bgSize={"contain"}>
        <Title />
        <Counter />
      </Stack>
    </Fragment>
  );
}
