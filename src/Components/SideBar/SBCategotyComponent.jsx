import styled from "styled-components";
import { useState } from "react";
import SBMemoContainer from "../../Containers/SIdeBar/SBMemoContainer";

const SBCategoryComponent = ({
  categories,
  newCategoryName,
  setNewCategoryName,
  handleAddCategory,
  handleDeleteCategory,
}) => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <CategoryContainer>
      <AddCategoryBlock>
        <input
          type="text"
          placeholder="카테고리 추가"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button onClick={handleAddCategory}>추가</button>
      </AddCategoryBlock>
      <CategoryList>
        {categories.map((category) => (
          <CategoryItem key={category.categoryId}>
            <CategoryHeader>
              <CategoryButton
                onClick={() => handleCategoryClick(category.categoryId)}
              >
                {category.categoryName}
              </CategoryButton>
              {/* <EditButton>수정</EditButton> */}
              <DeleteButton
                onClick={() => handleDeleteCategory(category.categoryId)}
              >
                삭제
              </DeleteButton>
            </CategoryHeader>
            {openCategory === category.categoryId && (
              <MemoList>
                <SBMemoContainer categoryId={category.categoryId} />
              </MemoList>
            )}
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  padding: 10px;
  max-height: 80%;
  overflow-y: auto;
  overflow-x: hidden;
`;

const AddCategoryBlock = styled.div`
  display: flex;
  margin-bottom: 10px;

  input {
    flex: 1;
    padding: 5px;
    margin-right: 5px;
  }

  button {
    padding: 5px 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 10px;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryButton = styled.button`
  background: none;
  border: none;
  text-align: left;
  padding: 10px;
  flex: 1; /* 버튼이 공간을 차지하도록 설정 */
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
// const EditButton = styled.div`
//   background-color: blue;
//   color: white;
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   &:hover {
//     background-color: blue;
//   }
// `;
const DeleteButton = styled.button`
  background-color: #ff4f4f;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e53935;
  }
`;

const MemoList = styled.div`
  margin-top: 10px;
  padding-left: 20px;
`;

export default SBCategoryComponent;
