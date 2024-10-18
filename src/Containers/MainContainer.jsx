import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainComponent from "../Components/MainComponent";

const MainContainer = () => {
  const propData = {};

  return <MainComponent {...propData} />;
};

export default MainContainer;
