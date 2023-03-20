import React from 'react'
import axios from 'axios';
import { useState } from 'react';

// axios는 http 통신,응답을 받는 모듈이라고 생각

const AxiosComponent = () => {
    const [data, setData] = useState();
    const handleClick = () => {
        console.log("서버로 요청을 보냅니다.")
        const url = "https://www.google.com"
        axios.get(url).then((response) => {//비동기 처리
            console.log(response)
            setData(response.data);
        });
    };
    //then은 비동기 처리 방식(별도로 실행을 시키기)
    //naver 홈페이지에 get을 하였는데 에러가 뜨는 이유는? CORS정책 때문이다
    //Cross-Origin Resource Sharing -> 교차 출처 리소스 공유 정책.(보안 문제)
    //chrome에서는 Allow CORS라는 응용프로그램으로 쉽게 동작가능
    return (
        <div>
            <button onClick={handleClick}>데이터 통신하기</button>
        </div>
    )
}

export default AxiosComponent