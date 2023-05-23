//구조 분해
var car = {
    name : "Maserati",
    ph : 140,
    // start : (i = 0) => {
    //     console.log("engine is started, starting speed is", i)
    // },
    // stop : () => {
    //     console.log("engine is  stoped")
    //     return 0
    // },
    speed: 190,
    make: "hyundai"
}

let carname = car.name;
let carph = car.ph;

const {name,ph,make} = car;//간결한 표현과 편리성

console.log(carname,ph)

console.log(name,ph,make)