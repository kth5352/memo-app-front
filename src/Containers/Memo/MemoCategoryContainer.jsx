import { useState, useEffect } from "react";
import MemoCategoryComponent from "../../Components/Memo/MemoCategoryComponent";

const MemoCategoryContainer = ({ categories = [], onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // 카테고리 변경 핸들러
  const handleCategoryChange = (selectedCategoryId) => {
    setSelectedCategory(selectedCategoryId);
    onCategoryChange(selectedCategoryId);
  };

  // 통신 부분이 필요할 때 사용할 수 있는 useEffect 예시
  useEffect(() => {
    // 여기서 API 호출로 카테고리 데이터를 받아와서
    // categories state를 업데이트할 수 있습니다.
  }, []);

  return (
    <MemoCategoryComponent
      categories={categories}
      selectedCategory={selectedCategory}
      onCategoryChange={handleCategoryChange}
    />
  );
};

export default MemoCategoryContainer;
