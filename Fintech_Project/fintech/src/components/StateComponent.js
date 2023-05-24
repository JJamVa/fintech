import React, { useState } from 'react'

const StateComponent = () => {
    let userName = "홍길동"
    let [count, setCount] = useState(0)

    setInterval(() => {
        console.log("카운트를 변경합니다. ",count)
        setCount(count++)
    },3000)//userCount의 내부적으로 데이터는 변경이 되었으나, 
    //실질적으로는 화면에서는 변경이 되지않음 그러나 useState를 이용하면 변경이 가능함.

    return (
        <div>{userName}</div>
    )
}

export default StateComponent