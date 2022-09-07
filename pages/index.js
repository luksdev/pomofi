import { Stack, Text, Box } from "@chakra-ui/react";
import React, { Fragment, Suspense } from "react";

// Components
import Counter from "../src/components/Counter";
import { PreLoader } from "../src/components/PreLoader";
import Header from "../src/components/Header";
import { useState } from "react";
import { useEffect } from "react";
import Todo from "../src/components/Todo";
import ReactPlayer from "react-player";
import { BiPause, BiPlay } from "react-icons/bi"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [playMusic, setPlayMusic] = useState(false)

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  const pauseMusic = () => {
    setPlayMusic(false)
  }

  const playMusicAgain = () => {
    setPlayMusic(true)
  }

  useEffect(() => {
    wait(3000).then(() => setLoading(false))
  })

  if (loading) {
    return (
      <Fragment>
        <Stack bgColor={"brand.background"} minH="100vh" maxH={"100%"} bgSize={"contain"} display="flex" justifyContent="center">
          <PreLoader />
        </Stack>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Box bgColor={"brand.background"}>
        <Header />
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=qCa64XOO5Ng"}
          playing={playMusic}
          width={0}
          height={0}
          onPlay={() => {
            console.log("Music is playing")
          }}
        />

        <Stack bgColor={"brand.background"} minH="100vh" maxH={"100%"} bgSize={"contain"} display="flex" mt={10}>
          <Box display={"flex"} alignItems={"center"} justifyContent="center">
            {playMusic ? (
              <BiPause size={50} style={{ cursor: "pointer" }} onClick={pauseMusic}/>
            ) : (
              <BiPlay size={50} style={{ cursor: "pointer" }} onClick={playMusicAgain}/>
            )}
          </Box>
          <Counter playingMusic={setPlayMusic}/>
          <Todo />
        </Stack>
      </Box>
    </Fragment>
  );
}
