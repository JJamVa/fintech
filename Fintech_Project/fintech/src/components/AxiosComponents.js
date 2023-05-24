import React from 'react';
import axios from "axios";

const AxiosComponents = () => {

    const handleClick = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/todos/1')
            .then((data) => {
            console.log(data)
        })
        console.log("응답수신 완료")
    }

    return (
        <div>
            <button onClick={handleClick}>요청 보내기</button>
        </div>
    )
}

export default AxiosComponents