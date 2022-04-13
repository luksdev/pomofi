/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import {
  Stack,
  Box,
  Heading,
  Input,
  FormLabel,
  Text,
  FormControl,
  Divider,
  ButtonGroup,
  Button,
  Center,
  useTimeout,
} from "@chakra-ui/react";

// Icons
import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";

// Firebase
// import { auth } from "../src/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../src/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { PreLoader } from "../src/components/PreLoader";

const Login = () => {
  const router = useRouter();

  const [user] = useAuthState(auth);
  const [count, setCount] = useState(5);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then(() => {
      console.log("Signed in with Google");
      router.push("/");
    });
  };

  useEffect(() => {
    setInterval(() => {
      setCount(count - 1);
      if (count == 1) {
        if (user) {
          router.push("/");
        }
      }
    }, 1000);
  }, [count]);

  return (
    <>
      {user ? (
        <>
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            minHeight={"100vh"}
            flexDir="column"
          >
            <Text textAlign={"center"} fontSize="3xl" fontWeight={"black"}>
              You are already logged in
            </Text>
            <Text>Redirecting in {count} seconds...</Text>
            <PreLoader />
          </Box>
        </>
      ) : (
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          minHeight={"100vh"}
        >
          <Stack
            display={"flex"}
            alignItems="center"
            justifyContent="flex-start"
            h={"100%"}
          >
            <Heading size={"2xl"} fontWeight={"black"} color={"brand.primary"}>
              Pomofi
            </Heading>

            {/* Content Box */}
            <Box
              boxShadow={
                "-1px 4px 22px rgba( 90, 192, 147, 0.20), inset 1px 1px 50px 9px rgba(0, 0, 0, 0.25);"
              }
              display={"flex"}
              rounded="md"
              p={10}
              alignItems="center"
              flexDir={"column"}
              justifyContent="center"
            >
              {/* Social Login */}
              <Box pb={5}>
                <Heading size={"lg"}>Login to your account</Heading>
                <Text fontSize={"small"} textAlign="center">
                  Login using social networks
                </Text>
                <Divider my={4} />
                {/* Buttons */}

                <ButtonGroup w="full">
                  <Button
                    w={"full"}
                    variant={"outline"}
                    onClick={signInWithGoogle}
                    leftIcon={<FcGoogle />}
                  >
                    <Center>Google</Center>
                  </Button>

                  <Button
                    w={"full"}
                    variant={"outline"}
                    leftIcon={<FiGithub />}
                  >
                    <Center>Github</Center>
                  </Button>
                </ButtonGroup>
              </Box>

              {/* Form */}
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type={"email"} />

                <FormLabel>Password</FormLabel>
                <Input type={"password"} />

                <Input mt={5} type={"submit"} value="Login" />
              </FormControl>
            </Box>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Login;
