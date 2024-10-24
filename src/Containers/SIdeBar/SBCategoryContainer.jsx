import { useState, useEffect } from "react";
import axios from "axios";
import SBCategoryComponent from "../../Components/SideBar/SBCategotyComponent";
import { checkTokenValidity } from "../../Services/Tokoen";

const SBCategoryContainer = () => {
  checkTokenValidity();
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");

  // 백엔드에서 카테고리 목록을 가져오는 함수
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/categories", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error("카테고리 목록을 불러오는 데 실패했습니다:", error);
    }
  };

  // 카테고리 추가 핸들러
  const handleAddCategory = async () => {
    if (newCategoryName.trim() === "") {
      alert("카테고리 이름을 입력해주세요.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:8080/categories",
        { categoryName: newCategoryName },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setNewCategoryName(""); // 입력 필드 초기화
      fetchCategories(); // 카테고리 목록을 새로고침
    } catch (error) {
      console.error("카테고리를 추가하는 데 실패했습니다:", error);
    }
  };

  // 카테고리 삭제 핸들러
  const handleDeleteCategory = async (categoryId) => {
    const isConfirmed = window.confirm(
      "정말 이 카테고리와 관련된 모든 메모를 삭제하시겠습니까?"
    );
    if (!isConfirmed) return;

    try {
      await axios.delete(`http://localhost:8080/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      fetchCategories(); // 카테고리 목록을 새로고침
    } catch (error) {
      console.error("카테고리를 삭제하는 데 실패했습니다:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <SBCategoryComponent
      categories={categories}
      newCategoryName={newCategoryName}
      setNewCategoryName={setNewCategoryName}
      handleAddCategory={handleAddCategory}
      handleDeleteCategory={handleDeleteCategory}
    />
  );
};

export default SBCategoryContainer;
