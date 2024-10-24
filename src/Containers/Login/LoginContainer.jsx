import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginComponent from "../../Components/Login/LoginComponent";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          // 서버에 토큰 유효성 검사를 요청
          await axios.get("http://localhost:8080/verifyToken", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // 토큰이 유효하다면 메인 페이지로 이동
          navigate("/main");
        } catch (error) {
          // 토큰이 유효하지 않다면, 에러 처리
          console.error("토큰이 유효하지 않습니다:", error);
          navigate("/login");
        }
      }
    };

    checkTokenValidity();
  }, [navigate]);

  // 아이디 입력 처리 함수
  const handleIdChange = (e) => {
    setId(e.target.value);
    if (e.target.value !== "") {
      setIdError(false); // 에러 숨김
    }
  };

  // 비밀번호 입력 처리 함수
  const handlePwChange = (e) => {
    setPw(e.target.value);
    if (e.target.value !== "") {
      setPwError(false); // 에러 숨김
    }
  };

  // 로그인 버튼 클릭 시 처리
  const handleFormSubmit = async () => {
    // 입력값이 없으면 에러 메시지 표시
    if (userId === "") {
      setIdError(true);
    }
    if (userPw === "") {
      setPwError(true);
    }

    // 입력값이 있으면 로그인 처리
    if (userId !== "" && userPw !== "") {
      try {
        const response = await axios.post("http://localhost:8080/login", {
          userId,
          userPw,
        });

        // 응답 확인
        console.log("JWT Token:", response.data.token);

        // 로그인 성공 시, JWT를 로컬 스토리지에 저장
        localStorage.setItem("token", response.data.token);

        // 로그인 성공 후 메인 페이지로 이동
        navigate("/main");
      } catch (error) {
        console.error("로그인 실패:", error);
        alert("로그인에 실패했습니다. 아이디 또는 비밀번호를 확인하세요.");
      }
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const propData = {
    userId,
    userPw,
    idError,
    pwError,
    handleIdChange,
    handlePwChange,
    handleFormSubmit,
    handleNavigate,
  };

  return <LoginComponent {...propData} />;
};

export default LoginContainer;
