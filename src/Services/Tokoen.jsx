/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const checkTokenValidity = async () => {
  const navigate = useNavigate();
  console.log("test");
  const token = localStorage.getItem("token");
  if (!token) {
    return false; // 토큰이 없으면 false 반환
  }

  try {
    // 서버에 토큰 유효성 검사를 요청
    await axios.get("http://localhost:8080/verifyToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("토큰이 유효하지 않습니다:", error);
    navigate("/login");
  }
};
