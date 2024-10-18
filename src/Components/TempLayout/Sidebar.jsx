import styled from "styled-components";
import SBCategoryContainer from "../../Containers/SIdeBar/SBCategoryContainer";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <h1>Sidebar</h1>
      <SBCategoryContainer />
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 240px;
  height: 100vh; /* 전체 화면 높이 */
  overflow-y: auto; /* 세로 스크롤 가능하게 설정 */
  border-right: 1px solid #ddd;
`;

export default Sidebar;
