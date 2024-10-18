import SBCategoryComponent from "../../Components/SideBar/SBCategotyComponent";

// 더미 데이터: 실제 백엔드 데이터는 나중에 여기로 대체할 수 있습니다.
const dummyCategories = [
  { categoryId: 1, categoryName: "Personal" },
  { categoryId: 2, categoryName: "Work" },
  { categoryId: 3, categoryName: "Others" },
];

const SBCategoryContainer = () => {
  // 카테고리 리스트를 SBCategoryComponent로 전달
  return <SBCategoryComponent categories={dummyCategories} />;
};

export default SBCategoryContainer;
