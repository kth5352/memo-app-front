import axios from "axios";

export const checkTokenValidity = async (navigate) => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login"); // 토큰이 없으면 로그인 페이지로 이동
    return;
  }

  try {
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
