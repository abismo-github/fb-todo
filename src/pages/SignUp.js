import React, { useState } from "react";
import SignUpDiv from "../style/UserCSS";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const handleSignUp = (e) => {
    e.prventDefault();
    // firebase에 회원가입 하기
  }
  return (
    <div className="p-6 mt-5 shadow rounded-md bg-white">
      <h2>Signup</h2>
      {/* 
        1. emotion을 활용하여 tag의 용도를 구분한다. 
        2. css도 함께 적용한다.
      */}
      <SignUpDiv>
        <form className="shadow bg-white rounded">
          <label htmlFor="">별칭</label>
          <input type="text" required value={nickName} onChange={ (e) => setNickName(e.target.value)}minLength={2} />
          <label htmlFor="">이메일</label>
          <input type="email" required value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="" >비밀번호</label>
          <input type="password" value={pw} onChange={ (e) => setPw(e.target.value)} required minLength={8} maxLength={16}  />
          <label htmlFor="">비밀번호 확인</label>
          <input type="password" value={pwConfirm} onChange={(e) => setPwConfirm(e.target.value)} required minLength={8} maxLength={16} />
          <div className="flex justify-center gap-5 w-full">
          <button className="border rounded px-3 py-2 shadow" onClick={e => handleSignUp(e)}>회원가입</button>
            <button className="border rounded px-3 py-2 shadow" onClick={e => {
              e.prventDefault();
              navigate("/");
            }}>취소</button>
          </div>
        </form>
      </SignUpDiv>
    </div>
  );
};

export default SignUp;
