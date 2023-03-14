import { useState } from "react";

// react state사용하기
const InputComponents = (props) => {
  const handleChangeInput = (event) => {//입력이 변경될 때 마다 동작
    console.log(event.target.value);
  }
  const [name, setName] = useState("hello");
  //name은 변수명, setName은 name을 바꾸기 위한 메소드명이 들어간다
  return (
    <>
      <p>{name}</p>
      <input onChange={handleChangeInput}></input>
      <button>입력</button>
    </>
  );
}

export default InputComponents;