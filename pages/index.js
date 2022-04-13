import { Stack, Text, Box } from "@chakra-ui/react";
import React, { Fragment, Suspense } from "react";

// Components
import Title from "../src/components/Title";
import Counter from "../src/components/Counter";
import { PreLoader } from "../src/components/PreLoader";

export default function Home() {
  return (
    <Fragment>
      <Stack bgColor={"brand.background"} h="100vh" bgSize={"contain"}>
        <Title />
        <Counter />
        <PreLoader />
      </Stack>

      {/* Main */}
    </Fragment>
  );
}
