import styled from "styled-components";
import { useState } from "react";

const SBCategoryComponent = ({ categories }) => {
  // 각 카테고리의 메모 목록을 나중에 토글로 펼치고 접는 기능을 추가할 수 있음
  const [openCategory, setOpenCategory] = useState(null);

  // 카테고리 클릭 시 메모 목록을 펼치는 토글 핸들러
  const handleCategoryClick = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <CategoryList>
      {categories.map((category) => (
        <CategoryItem key={category.categoryId}>
          <CategoryButton
            onClick={() => handleCategoryClick(category.categoryId)}
          >
            {category.categoryName}
          </CategoryButton>
          {/* 나중에 카테고리 클릭 시 메모 목록을 펼치는 기능 */}
          {openCategory === category.categoryId && (
            <MemoList>
              {/* 메모 항목을 여기서 렌더링 */}
              <MemoItem>Sample Memo 1</MemoItem>
              <MemoItem>Sample Memo 2</MemoItem>
            </MemoList>
          )}
        </CategoryItem>
      ))}
    </CategoryList>
  );
};

const CategoryList = styled.ul`
  list-style: none; /* 리스트 앞의 점을 없애줍니다 */
  padding: 0;
  margin: 0;
  overflow-y: auto; /* 카테고리가 많아지면 세로 스크롤 가능 */
  max-height: 100%; /* 높이 제한 */
`;

const CategoryItem = styled.li`
  margin-bottom: 10px;
`;

const CategoryButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  padding: 10px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 텍스트가 넘치면 말줄임표 처리 */
  &:hover {
    background-color: #f0f0f0;
  }
`;

const MemoList = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin: 5px 0;
`;

const MemoItem = styled.li`
  padding: 5px 0;
`;

export default SBCategoryComponent;
