import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // react-router-dom에서 useNavigate 사용

const SBMemoComponent = ({ memos }) => {
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트 함수

  const handleMemoClick = (memoId) => {
    navigate(`/memo/${memoId}`); // 클릭한 메모의 id로 이동
  };

  return (
    <MemoContainer>
      <MemoList>
        {memos.length > 0 ? (
          memos.map((memo) => (
            <MemoItem
              key={memo.memoId}
              onClick={() => handleMemoClick(memo.memoId)}
            >
              {memo.memoTitle || "제목 없음"}
            </MemoItem>
          ))
        ) : (
          <NoMemoMessage>메모가 없습니다</NoMemoMessage>
        )}
      </MemoList>
    </MemoContainer>
  );
};

const MemoContainer = styled.div`
  margin-top: 10px;
`;

const MemoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MemoItem = styled.li`
  padding: 5px;
  border-bottom: 1px solid #ddd;
  cursor: pointer; /* 클릭 가능하게 커서 변경 */
  &:hover {
    background-color: #f0f0f0;
  }
`;

const NoMemoMessage = styled.div`
  padding: 5px;
  color: #888;
`;

export default SBMemoComponent;
