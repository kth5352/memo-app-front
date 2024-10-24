import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterComponent from "../../Components/Login/RegisterComponent";
import axios from "axios";

const RegisterContainer = () => {
  const navigate = useNavigate();

  // 상태 관리: 아이디, 비밀번호, 비밀번호 확인, 이름, 이메일
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userPw2, setPw2] = useState("");

  // 에러 상태 관리
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [pw2Error, setPw2Error] = useState(false);

  // 입력 처리 함수들
  const handleIdChange = (e) => setId(e.target.value);
  const handlePwChange = (e) => setPw(e.target.value);
  const handlePw2Change = (e) => setPw2(e.target.value);

  // 폼 제출 처리 함수
  const handleFormSubmit = async () => {
    // 각 필드에 대한 에러 상태 업데이트
    setIdError(userId === "");
    setPwError(userPw === "");
    setPw2Error(userPw !== userPw2);

    // 모든 입력값이 유효할 경우 회원가입 요청
    if (userId && userPw && userPw === userPw2) {
      try {
        // 회원가입 요청
        const response = await axios.post("http://localhost:8080/register", {
          userId,
          userPw,
        });

        // 성공 시 처리
        alert("회원가입이 완료되었습니다!");
        navigate("/login");
      } catch (error) {
        // 실패 시 에러 처리
        console.error("회원가입 실패:", error);
        alert("회원가입에 실패했습니다.");
      }
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const propData = {
    userId,
    userPw,
    userPw2,
    idError,
    pwError,
    pw2Error,
    handleIdChange,
    handlePwChange,
    handlePw2Change,
    handleFormSubmit,
    handleNavigate,
  };

  return <RegisterComponent {...propData} />;
};

export default RegisterContainer;
