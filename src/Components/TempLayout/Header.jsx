import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios"; // axios 추가

const Header = () => {
  const navigate = useNavigate();

  // 새 메모 만들기 핸들러
  const handleNewMemo = async () => {
    try {
      // categoryId는 넘기지 않음. 백엔드에서 기본값 사용
      const response = await axios.post(
        "http://localhost:8080/memos/new",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const newMemoId = response.data.memoId;
      navigate(`/memo/${newMemoId}`);
    } catch (error) {
      console.error("새 메모 생성 실패:", error);
      alert("새 메모를 생성하는데 실패했습니다.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleUserInfoClick = () => {
    navigate("/editPw");
  };

  return (
    <HeaderContainer>
      <Logo>메모-저장-웹</Logo>
      <ButtonGroup>
        <NewMemoButton onClick={handleNewMemo}>새 메모 만들기</NewMemoButton>
        <UserName onClick={handleUserInfoClick}>비밀번호 수정</UserName>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </ButtonGroup>
    </HeaderContainer>
  );
};

export default Header;

// Styled-components

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.h1`
  font-size: 1.5em;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const NewMemoButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 15px;
  &:hover {
    background-color: #45a049;
  }
`;

const UserName = styled.span`
  font-size: 1em;
  color: #333;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e53935;
  }
`;
