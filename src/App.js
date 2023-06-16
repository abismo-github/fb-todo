import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import MyPage from "./pages/MyPage";
import { useState } from "react";

function App() {
  // 추후에 Redux/Recoil state로 관리 필요
  const [fbName, setFBName] = useState("");
  const [fbEmail, setFBEmail] = useState("");
  const [fbUid, setFBUid] = useState("");
  return (
    <div className="w-screen h-screen bg-blue-300 overflow-x-hidden">
      <Header
        fbName={fbName}
        fbEmail={fbEmail}
        fbUid={fbUid}
        setFBName={setFBName}
        setFBEmail={setFBEmail}
        setFBUid={setFBUid}
      />
      <div className="container w-full h-full">
        <Routes>
          {/* Navigate를 이용한 강제 이동 */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={
              <Login
                setFBUid={setFBUid}
                setFBEmail={setFBEmail}
                setFBName={setFBName}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/todo"
            element={<Todo fbName={fbName} fbEmail={fbEmail} fbUid={fbUid} />}
          />
          <Route path="/mypage"
            element={
              <MyPage
                fbName={fbName}
                fbEmail={fbEmail}
                fbUid={fbUid}
                setFBName={setFBName}
                setFBEmail={setFBEmail}
                setFBUid={setFBUid}
          />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
