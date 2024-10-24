import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EditPwComponent from "../Components/EditPwComponent";

const EditPwContainer = () => {
  const navigate = useNavigate();

  const [userPw, setPw] = useState("");
  const [userPw2, setPw2] = useState("");

  const [pwError, setPwError] = useState(false);
  const [pw2Error, setPw2Error] = useState(false);

  const handlePwChange = (e) => setPw(e.target.value);
  const handlePw2Change = (e) => setPw2(e.target.value);

  // 폼 제출 처리 함수
  const handleFormSubmit = async () => {
    setPwError(userPw === "");
    setPw2Error(userPw !== userPw2);

    if (userPw && userPw === userPw2) {
      try {
        const token = localStorage.getItem("token"); // 저장된 토큰 가져오기

        // 비밀번호 변경 요청 (PUT 요청)
        const response = await axios.put(
          "http://localhost:8080/user",
          { userPw }, // body에 전송할 데이터
          {
            headers: {
              Authorization: `Bearer ${token}`, // 인증 헤더 추가
              "Content-Type": "application/json", // Content-Type 명시
            },
          }
        );

        // 성공 시 처리
        alert("비밀번호 변경이 완료되었습니다!");
        localStorage.removeItem("token");
        navigate("/login");
      } catch (error) {
        // 실패 시 에러 처리
        console.error("비밀번호 변경 실패:", error);
        alert("비밀번호 변경에 실패했습니다.");
      }
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLeave = async () => {
    const isConfirmed = window.confirm(
      "정말로 회원 정보를 모두 삭제하시겠습니까?"
    );
    if (!isConfirmed) return;

    try {
      const token = localStorage.getItem("token"); // 저장된 토큰 가져오기

      // 회원 탈퇴 요청 (DELETE 요청)
      await axios.delete("http://localhost:8080/user", {
        headers: {
          Authorization: `Bearer ${token}`, // 인증 헤더 추가
        },
      });

      localStorage.removeItem("token");

      // 탈퇴 후 리다이렉션
      alert("회원 탈퇴가 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      console.error("탈퇴에 실패했습니다.", error);
      alert("탈퇴에 실패했습니다.");
    }
  };

  const propData = {
    userPw,
    userPw2,
    pwError,
    pw2Error,
    handlePwChange,
    handlePw2Change,
    handleFormSubmit,
    handleNavigate,
    handleLeave, // handleLeave 추가
  };

  return <EditPwComponent {...propData} />;
};

export default EditPwContainer;
