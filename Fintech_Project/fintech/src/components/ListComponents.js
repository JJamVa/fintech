import React, { useState } from 'react'

const ListComponents = () => {
    const [list, setlist] = useState(
        {username: "홍길동", age: 23, height: 183},
        {username: "홍길동", age: 23, height: 183},
        {username: "홍길동", age: 23, height: 183})
    return (
        <div></div>
    )
}

export default ListComponents