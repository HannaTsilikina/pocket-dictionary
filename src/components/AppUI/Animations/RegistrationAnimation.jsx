import React from "react";
import { useLottie } from "lottie-react";
import AnimationReg from "./registration.json";

const RegistrationAnimation = () => {
  const options = {
    animationData: AnimationReg,
    loop: true,
  };

  const { View } = useLottie(options);

  return <div className="animation-register">{View}</div>;
};

export default RegistrationAnimation;
