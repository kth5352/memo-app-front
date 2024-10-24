import styled from "styled-components";
import InputForm from "./Common/InputForm";

const EditPwComponent = (props) => {
  const {
    userPw,
    userPw2,
    pwError,
    pw2Error,
    handlePwChange,
    handlePw2Change,
    handleFormSubmit,
    handleNavigate,
    handleLeave,
  } = props;
  console.log(props); // 이 부분을 추가해서 함수가 제대로 전달되는지 확인

  return (
    <EditPwComponentBlock>
      <RegisterForm>
        <h1>회원 정보 변경</h1>
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
            비밀번호 변경
          </button>
        </div>
        <br></br>
        <LeaveBtnDiv>
          <button type="button" onClick={handleLeave}>
            탈퇴하기
          </button>
        </LeaveBtnDiv>
        <ActionItem onClick={() => handleNavigate("/login")}>취소</ActionItem>
      </RegisterForm>
    </EditPwComponentBlock>
  );
};

const LeaveBtnDiv = styled.div`
  button {
    background-color: red !important;
    color: white;
    padding: 10px;
    width: 100%;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: darkred;
    }
  }
`;

const EditPwComponentBlock = styled.div`
  height: 80vh;
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

export default EditPwComponent;
