import React from 'react'
import HeaderTitle from '../components/News/HeaderTitle'
import { useLocation } from 'react-router-dom';
import queryString from "query-string"
import { useState } from 'react';
import axios from 'axios';

const AuthResult = () => {
  const queryParams = useLocation().search;
  console.log(queryParams.replace("?", "").split("&")[1].split("="));
  const code = queryString.parse(queryParams).code;//자동으로 자바스크립트 오브젝트로 생성해주는 라이브러리
  console.log(code);

  const [accessToken, setAccessToken] = useState("")

  const getAccessToken = () => {
    //Axios를 통해 토큰을 발급 받습니다.
    let requestBody = {
      code: `${code}`,
      client_id: "26cf9539-e126-4f60-ae17-9542626b4cf5",
      client_secret: "6080fce5-5196-434d-9d49-44c7ea9695c0",
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code"
    }

    axios.post("https://testapi.openbanking.or.kr/oauth/2.0/token", requestBody)
      .then((response) => {
        console.log(response)
      })//post방식으로 데이터를 보내면 CORS 현상이 발생.
  }

  return (
    <div>
      <HeaderTitle title={"Token 발급"}></HeaderTitle>
      <p>발급 받은 인증 코드는 : {code}</p>
      <button onClick={getAccessToken}>AccessToken 발급</button>
    </div>
  )
}

export default AuthResult