import { useState, useEffect } from "react";
import axios from "axios";
import SBMemoComponent from "../../Components/SideBar/SBMemoComponent";

const SBMemoContainer = ({ categoryId }) => {
  const [memos, setMemos] = useState([]);

  // 메모 리스트를 불러오는 함수
  const fetchMemos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/memos/category/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setMemos(response.data);
    } catch (error) {
      console.error("메모 리스트를 불러오는 데 실패했습니다:", error);
    }
  };

  // categoryId가 변경될 때마다 메모 목록을 불러옴
  useEffect(() => {
    if (categoryId) {
      fetchMemos();
    }
  }, [categoryId]); // categoryId가 변경될 때마다 fetchMemos 호출

  return <SBMemoComponent memos={memos} />;
};

export default SBMemoContainer;
