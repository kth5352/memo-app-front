import EditPw from "../Pages/EditPw";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Main from "../Pages/Main";
import Memo from "../Pages/Memo";
// import Document from "../Pages/Document";
// import Issue from "../Pages/Issue";

//기본 틀임. 로그인 회원가입은 고정된 레이아웃이 없을거라 여기(사실 역할별로 나눈거)
const publicRoutes = [
  { path: "/", element: Login },
  { path: "/login", element: Login },
  {
    path: "/register",
    element: Register,
  },
];

const authenticatedRoutes = [
  { path: "/main", element: Main },
  { path: "memo/:id", element: Memo },
  { path: "/editPw", element: EditPw },
];

// 추가로 필요한게 생각나면 위 형식대로 만들면 됨
export { publicRoutes, authenticatedRoutes }; // 여기서 export해주는거 까먹으면 오류남
