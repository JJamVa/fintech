import { useState } from "react";

// react state사용하기
const InputComponents = (props) => {
  //let value = "test"
  const handleChangeInput = (event) => {//입력이 변경될 때 마다 동작
    console.log(event.target.value);
    setName(event.target.value)//리랜더링작업이 가능하다. 즉, 즉각적인 화면 표출이 가능
  }
  const handleClick = () => {
    window.alert(name + "를 누르셨습니다.");
  }
  const [name, setName] = useState("hello");
  //name은 변수명, setName은 name을 바꾸기 위한 메소드명이 들어간다
  return (
    <>
      <p>{name}</p>
      <input onChange={handleChangeInput}></input>
      <button onClick={handleClick}>입력</button>
    </>
  );
}

export default InputComponents;