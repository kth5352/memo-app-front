import styled from "styled-components";
import SBCategoryContainer from "../../Containers/SIdeBar/SBCategoryContainer";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SBCategoryContainer />
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 240px;
  height: 100%; /* 전체 화면 높이 */
  border-right: 1px solid #ddd;
`;

export default Sidebar;
