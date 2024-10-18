/* eslint-disable no-use-before-define */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../Components/Login/LoginComponent";

//필요한 변수 선언, 함수 정의 등등 처리 후 propDatas로 컴포넌트파일에 넘긴다
const LoginContainer = () => {
  const navigate = useNavigate();

  // 보통은 useState사용해서 변수 선언
  // const [id, setId] = useState("");
  // const [pw, setPw] = useState("");

  // 로그인 처리 함수
  const handleSignin = () => {
    navigate("/main");
  };

  // const propDatas = {  props가 나중에 되면 많아질거임. 아래와 같이 "변수 / setter / 그 외 함수" 순서로 넘김. 이거는 규칙으로 정합시다ㅏ.
  //     id,
  //     pw,

  //     setId,
  //     setPw,

  //     handleSignin,
  // };

  // 상태 관리: id, pw, 에러 상태
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
  };

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
  const handleFormSubmit = () => {
    // 입력값이 없으면 에러 메시지 표시
    if (userId === "") {
      setIdError(true);
    }
    if (userPw === "") {
      setPwError(true);
    }

    // 입력값이 있으면 로그인 처리
    if (userId !== "" && userPw !== "") {
      handleSignin();
    }
  };

  const propData = {
    userId,
    userPw,
    idError,
    pwError,
    handleSignin,
    handleIdChange,
    handlePwChange,
    handleFormSubmit,
    handleNavigate,
  };

  return <LoginComponent {...propData} />;
};

export default LoginContainer;
