import React from 'react'

export const Welcome = ({username, userage}) => {//사용되는 파라미터를 그대로 가져와서 사용이 가능하다.
  return (
    <p>안녕하세요! {username}님 {userage}살 이시군요!</p>
  )
}
