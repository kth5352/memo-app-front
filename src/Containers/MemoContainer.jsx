import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MemoComponent from "../Components/MemoComponent";

const MemoContainer = (memoid) => {
  const propData = {};

  return <MemoComponent {...propData} />;
};

export default MemoContainer;
