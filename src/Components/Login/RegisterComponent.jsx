import styled from "styled-components";
import InputForm from "../Common/InputForm";

const RegisterComponent = (props) => {
  const {
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
  } = props;
  console.log(props); // 이 부분을 추가해서 함수가 제대로 전달되는지 확인

  return (
    <RegisterComponentBlock>
      <RegisterForm>
        <h1>회원 가입</h1>
        <InputForm
          title="아이디"
          inputTitle="ID"
          eMsgColor={idError ? "red" : "white"}
          eMsgContent={idError ? "아이디를 입력해 주세요" : ""}
          onChange={handleIdChange}
          value={userId}
        />
        <InputForm
          title="비밀번호"
          inputTitle="Password"
          type="password"
          eMsgColor={pwError ? "red" : "white"}
          eMsgContent={pwError ? "비밀번호를 입력해 주세요" : ""}
          onChange={handlePwChange}
          value={userPw}
        />
        <InputForm
          title="비밀번호 확인"
          inputTitle="Confirm Password"
          type="password"
          eMsgColor={pw2Error ? "red" : "white"}
          eMsgContent={pw2Error ? "비밀번호가 일치하지 않습니다" : ""}
          onChange={handlePw2Change}
          value={userPw2}
        />

        <div>
          <button type="button" onClick={handleFormSubmit}>
            가입하기
          </button>
        </div>
        <ActionItem onClick={() => handleNavigate("/login")}>취소</ActionItem>
      </RegisterForm>
    </RegisterComponentBlock>
  );
};

const RegisterComponentBlock = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 30px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #4491ff;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1em;
  }

  button:hover {
    background-color: #4a78ba;
  }
`;

const ActionItem = styled.span`
  margin: 0 10px;
  margin-top: 20px;
  cursor: pointer;
  color: #6b6b6b;
  font-size: 1rem;
  border-bottom: 1px solid grey;
  text-decoration: none;
  &:hover {
    color: #000000;
  }
`;

export default RegisterComponent;
