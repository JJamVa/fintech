import React from 'react'
import { useState } from 'react'

const InputComponents = () => {
    const [userName, setUserName] = useState("박준홍")
    const handleChange = (event) => {
        const { value } = event.target
        console.log(value)
        setUserName(value)
    }

    const handleClick = () => {
        window.alert(userName)
    }
    return (
        <div>
            <br></br>
            <p>{userName}</p>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}></button>
        </div>
    )
}

export default InputComponents