import React, { useState } from 'react'
import Welcome from "./Welcome"
//ES7+ 다운받고 rafce이를 입력하면 파일명과 관련된 포멧을 생성
const ListComponents = () => {
    const [list, setList] = useState([
        { username: "안녕1", age: 33, school:"숭실대학교" },
        { username: "안녕하세요", age: 22, school:"고려대학교" }
    ]);

    return (
        <div>
            {list.map((user)=> {
                return (
                    <Welcome
                        userName={user.username}
                        userAge={user.age}
                        userSchool={user.school}
                        ></Welcome>
                )
            })}
        </div>
    )

}

export default ListComponents;