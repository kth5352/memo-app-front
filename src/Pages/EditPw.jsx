import styled from "styled-components";
import EditPwContainer from "../Containers/EditPwContainer";

const EditPw = () => {
  //페이지 코드에서는 컴포넌트or 컨테이너 외엔 아무것도 없어야함. 스타일도 웬만하면 ㄴㄴ
  return (
    <EditPwBlock>
      <EditPwContainer />
    </EditPwBlock>
  );
};

const EditPwBlock = styled.div``;
export default EditPw;
