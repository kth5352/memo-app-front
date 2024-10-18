import styled from "styled-components";
import MemoContainer from "../Containers/MemoContainer";

const Memo = (memoid) => {
  return (
    <MemoPageBlock>
      <MemoContainer />
    </MemoPageBlock>
  );
};

const MemoPageBlock = styled.div``;
export default Memo;
