import styled from "styled-components";

const MemoCategoryComponent = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <CategoryContainer>
      <label htmlFor="category">카테고리 선택:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">카테고리를 선택하세요</option>
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <option key={category.categoryId} value={category.categoryId}>
              {category.categoryName}
            </option>
          ))
        ) : (
          <option value="" disabled>
            로딩 중...
          </option>
        )}
      </select>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  margin-left: 10px;
  select {
    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
`;

export default MemoCategoryComponent;
