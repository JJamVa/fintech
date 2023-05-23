//Object 오브젝트
// 객체는 관련된 데이터와 함수
// (일반적으로 여러 데이터와 함수로 이뤄짐, 객체 안에 있을 때는 보통 프로퍼티와 메소드)의 집합

var car = {
    name : "Maserati",
    ph : 140,
    start : (i = 0) => {
        console.log("engine is started, starting speed is", i)
    },
    stop : () => {
        console.log("engine is  stoped")
        return 0
    },
    speed: 190
}

car.start(120)
car.start()
console.log(car)