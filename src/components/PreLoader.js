import * as loading from "./../animations/99680-3-dots-loading.json";
import Lottie from "react-lottie";
import { useState } from "react";

const defaultOptions = {
  // loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const PreLoader = () => {
  const [loading, setLoading] = useState([true]);
  const [done, setDone] = useState(undefined);

  return (
    <>
      <Lottie options={defaultOptions} width={300} height={100} />
    </>
  );
};
