import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { useState, useEffect } from "react";

const Counter = () => {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(25 * 60);
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      // If isRunning is true
      console.log(totalTimeInSeconds);
      const interval = setInterval(() => {
        setTotalTimeInSeconds(
          (prevTotalTimeInSeconds) => prevTotalTimeInSeconds - 1
        );
      }, 1000);
    }
    if (totalTimeInSeconds === 0) {
      // If isRunning is false and totalTimeInSeconds is 0
      setTotalTimeInSeconds(25 * 60);
    }
    return () => {
      clearInterval(interval);
    };
  }, [totalTimeInSeconds, isRunning]);

  return (
    <Fragment>
      <Stack
        p={20}
        display={"flex"}
        alignItems="center"
        justifyContent="flex-start"
        h={"100%"}
      >
        <Box
          rounded={"full"}
          w={300}
          h={300}
          boxShadow="-1px 4px 22px rgba(56, 192, 147, 0.43), inset 1px 1px 50px 9px rgba(0, 0, 0, 0.25);"
          display={"flex"}
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            fontSize={"7xl"}
            color={"brand.secondary"}
            textShadow="10px 8px 5px rgba(0, 0, 0, 0.25);"
          >
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </Heading>
        </Box>
        <Button
          onClick={() => {
            setIsRunning(true);
          }}
        >
          Start
        </Button>
      </Stack>
    </Fragment>
  );
};

export default Counter;
