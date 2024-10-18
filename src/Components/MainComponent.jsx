import styled from "styled-components";
import MemoCategoryContainer from "../Containers/Memo/MemoCategoryContainer";

const MainComponent = (props) => {
  const { categories, onCategoryChange } = props;

  return (
    <div>
      <MemoTitle>
        <input id="title" type="text" />
        <ButtonBlock>
          <button>저장</button>
          <button>삭제</button>
        </ButtonBlock>
        <MemoCategoryContainer
          categories={categories}
          onCategoryChange={onCategoryChange}
        />
      </MemoTitle>
      <MemoContent>
        <textarea id="content" />
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
`;

const MemoContent = styled.div`
  margin-top: 10px;
  #content {
    width: 100%;
    height: 500px;
    resize: none; /* 사용자가 크기를 조정하지 못하도록 함 */
    overflow-y: auto;
    vertical-align: top;
    padding: 10px;
    box-sizing: border-box;
  }
`;

export default MainComponent;
