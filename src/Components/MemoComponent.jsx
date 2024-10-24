import styled from "styled-components";

const MemoComponent = ({
  memoTitle,
  setMemoTitle,
  memoContent,
  setMemoContent,
  categories,
  selectedCategoryId, // 선택된 카테고리 ID
  onCategoryChange,
  onSave,
  handleDelete,
}) => {
  return (
    <div>
      <MemoTitle>
        <input
          id="title"
          type="text"
          value={memoTitle}
          onChange={(e) => setMemoTitle(e.target.value)}
        />
        <ButtonBlock>
          <button onClick={onSave}>저장</button>
          <button onClick={handleDelete}>삭제</button>{" "}
        </ButtonBlock>
        <select
          value={selectedCategoryId}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.categoryId} value={category.categoryId}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </MemoTitle>
      <MemoContent>
        <textarea
          id="content"
          value={memoContent}
          onChange={(e) => setMemoContent(e.target.value)}
        />
      </MemoContent>
    </div>
  );
};

const ButtonBlock = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  button {
    margin: 5px;
  }
`;

const MemoTitle = styled.div`
  display: flex;
  #title {
    width: 80%;
  }
  select {
    margin-left: 10px;
    padding: 5px;
  }
`;

const MemoContent = styled.div`
  margin-top: 10px;
  #content {
    width: 100%;
    height: 500px;
    resize: none;
    overflow-y: auto;
    vertical-align: top;
    padding: 10px;
    box-sizing: border-box;
  }
`;

export default MemoComponent;
