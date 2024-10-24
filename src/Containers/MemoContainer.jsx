import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MemoComponent from "../Components/MemoComponent";
import { checkTokenValidity } from "../Services/Tokoen";

checkTokenValidity();

const MemoContainer = () => {
  const { id } = useParams(); // URL의 메모 id
  const navigate = useNavigate();

  const [memoTitle, setMemoTitle] = useState("");
  const [memoContent, setMemoContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(""); // 선택된 카테고리 ID

  // 페이지 로드 시 메모 불러오기
  const fetchMemo = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/memos/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setMemoTitle(response.data.memoTitle);
      setMemoContent(response.data.memoContent);
      setSelectedCategoryId(response.data.categoryId); // 선택된 카테고리 설정
    } catch (error) {
      console.error("메모를 불러오는 데 실패했습니다:", error);
      alert("존재하지 않는 메모입니다.");
      navigate("/main"); // 없는 메모일 경우 메인으로 리다이렉트
    }
  };

  // 카테고리 리스트 불러오기
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

  // 메모 수정 저장 함수
  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:8080/memos/${id}`,
        {
          memoTitle,
          memoContent,
          categoryId: selectedCategoryId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("메모가 성공적으로 저장되었습니다.");
    } catch (error) {
      console.error("메모 저장 실패:", error);
      alert("메모를 저장하는 데 실패했습니다.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/memos/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      alert("메모가 삭제되었습니다.");
      navigate("/main");
    } catch (err) {
      console.error("메모 삭제 실패 : ", err);
      alert("메모를 삭제하는데에 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchMemo();
    fetchCategories(); // 카테고리 불러오기
  }, [id]);

  const handleCategoryChange = (newCategoryId) => {
    setSelectedCategoryId(newCategoryId); // 선택된 카테고리 변경
  };

  const propData = {
    memoTitle,
    setMemoTitle,
    memoContent,
    setMemoContent,
    categories,
    selectedCategoryId, // 선택된 카테고리 전달
    onCategoryChange: handleCategoryChange,
    onSave: handleSave,
    handleDelete,
  };

  return <MemoComponent {...propData} />;
};

export default MemoContainer;
