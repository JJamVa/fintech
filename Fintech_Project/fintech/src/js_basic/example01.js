// var
// 함수레벨 스코프를 가진변수
// 중복선언이 가능함 => 변수의 오염문제
// 선언 전에 사용해도 에러 발생X
// undefined로 초기화됨

// let
// 블록레벨 스코프를 가진 변수
// 중복선언이 불가능
// 재할당 가능

//const
// 블록레벨 스코프를 가진 변수
// 중복선언이 불가능
// 재할당 불가능반드시 초기값이 필요함

var a = "data_a"
var b = "data_b"
const c = 11
const obj = {
    name : "test",
    age : 99
}
const d = obj

var x = 10

{
    const x = 2
}

console.log(a)
console.log(b)
console.log(c)
console.log(obj)
console.log(x)