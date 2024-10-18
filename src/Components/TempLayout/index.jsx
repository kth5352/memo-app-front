import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <LayoutWrapper>
        <SideBarWrapper>
          <Sidebar />
        </SideBarWrapper>
        <ContentArea>{children}</ContentArea>
      </LayoutWrapper>
    </div>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* Header의 높이 */
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 60px); /* Header의 높이를 제외한 화면 크기 */
  margin-top: 60px; /* Header 높이만큼 위쪽 공간 확보 */
`;

const SideBarWrapper = styled.div`
  width: 240px;
  height: 100%-5px; /* Header를 제외한 나머지 영역을 모두 차지 */
  overflow-y: hidden; /* 사이드바 자체에서 스크롤이 생기지 않도록 설정 */
  border: solid 1px blue;
`;

const ContentArea = styled.main`
  flex: 1;
  height: 100% -60px; /* Header를 제외한 나머지 영역을 모두 차지 */
  overflow-y: auto; /* 내용이 길어질 경우에만 스크롤 */
  padding: 20px;
  border: solid 1px green;
`;

export default Layout;
