import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { useState, useEffect } from "react";

const Counter = ({ playingMusic }) => {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(25 * 60);
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;
  const [isRunning, setIsRunning] = useState(false);

  const handleStopTimer = () => {
    setIsRunning(false);
  };

  const handleResumeTimer = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    if (isRunning) {
      console.log(totalTimeInSeconds);
      const interval = setInterval(() => {
        setTotalTimeInSeconds(
          (prevTotalTimeInSeconds) => prevTotalTimeInSeconds - 1
        );
      }, 1000);
    }
    if (totalTimeInSeconds === 0) {
      setTotalTimeInSeconds(25 * 60);
    }
    return () => {
      clearInterval(interval);
    };
  }, [totalTimeInSeconds, isRunning]);

  return (
    <Fragment>
      <Stack
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        h={"100%"}
      >
        <Box
          rounded={"full"}
          w={270}
          h={270}
          transition={"all 0.5s ease-in-out"}
          boxShadow={
            isRunning
              ? "-1px 4px 22px rgba( 90, 192, 147, 0.20), inset 1px 1px 50px 9px rgba(0, 0, 0, 0.25);"
              : "-1px 4px 22px rgba(56, 192, 147, 0.56), inset 1px 1px 50px 9px rgba(0, 0, 0, 0.25);"
          }
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

        <Box pt={5}>
          {!isRunning ? (
            <Button
              width={200}
              height={50}
              background={"brand.primary"}
              color={"brand.background"}
              _hover={{ background: "brand.secondary" }}
              onClick={() => {
                setIsRunning(true);
                playingMusic(true);
              }}
            >
              Start
            </Button>
          ) : (
            <Button
              width={200}
              height={50}
              background={"brand.primary"}
              color={"brand.background"}
              _hover={{ background: "brand.secondary" }}
              onClick={() => {
                {
                  isRunning ? handleStopTimer() : handleResumeTimer();
                }
              }}
            >
              Pause
            </Button>
          )}
        </Box>
      </Stack>
    </Fragment>
  );
};

export default Counter;
