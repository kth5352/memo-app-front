import styled from "styled-components";
import InputForm from "../Common/InputForm";
import { useState } from "react";
import MemoCategoryContainer from "../../Containers/Memo/MemoCategoryContainer";

const MainComponent = (props) => {
  const { categories, onCategoryChange } = props;
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const handleTitleChange = (e) => {
    const inputValue = e.target.value;
    setTitle(inputValue);

    // 제목 입력에 대한 에러 메시지 로직 예시 (길이 제한 검증)
    if (inputValue.length < 5) {
      setTitleError("제목은 5자 이상이어야 합니다.");
    } else {
      setTitleError("");
    }
  };

  return (
    <div>
      <MemoTitle>
        <InputForm
          title="메모 제목"
          inputTitle="제목을 입력하세요"
          eMsgColor="red"
          eMsgContent={titleError}
          onChange={handleTitleChange}
          value={title}
        />
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
  align-items: center;
  width: 100%;

  > div {
    flex: 1;
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
