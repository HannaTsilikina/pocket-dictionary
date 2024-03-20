import React from "react";
import { useLottie } from "lottie-react";
import Animation from "./not-found.json";

const NotFoundAnimation = () => {
  const options = {
    animationData: Animation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default NotFoundAnimation;
