import { useState } from "react";

useState
// react state사용하기
const InputComponents = (props) => {
    const [name, setName] = useState("test");//초기값 설정
    //name은 변수명, setName은 name을 바꾸기 위한 메소드명이 들어간다
    return <p>{name}</p>;
  }

  export default InputComponents;