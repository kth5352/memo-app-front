import styled from "styled-components";
import InputForm from "../Common/InputForm";

//컴포넌트 코드에서는 함수선언은 없음. return 안에서 html태그(devExtreme 같은거 써도 되고)로 화면을 구성 및 배치
const LoginComponent = (props) => {
  const {
    userId,
    userPw,
    idError,
    pwError,
    handleIdChange,
    handlePwChange,
    handleFormSubmit,
    handleNavigate,
  } = props;

  return (
    <LoginComponentBlock>
      <h1>Login Page</h1>
      <LoginForm>
        <InputForm
          inputTitle={"아이디"}
          eMsgColor={idError ? "red" : "white"}
          eMsgContent={idError ? "아이디를 입력해 주세요" : ""}
          onChange={handleIdChange}
          value={userId}
        />
        <InputForm
          inputTitle={"비밀번호"}
          type="password"
          eMsgColor={pwError ? "red" : "white"}
          eMsgContent={pwError ? "비밀번호를 입력해 주세요" : ""}
          onChange={handlePwChange}
          value={userPw}
        />

        <div>
          <button type="button" onClick={handleFormSubmit}>
            Login
          </button>
        </div>
        <Actions>
          <ActionItem onClick={() => handleNavigate("/register")}>
            회원가입
          </ActionItem>
        </Actions>
      </LoginForm>
    </LoginComponentBlock>
  );
};

const LoginComponentBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
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

const Actions = styled.div`
  margin-top: 20px;
`;

const ActionItem = styled.span`
  margin: 0 10px;
  cursor: pointer;
  color: #6b6b6b;
  font-size: 0.7rem;
  text-decoration: none;
  &:hover {
    color: #000000;
  }
`;

export default LoginComponent;
