// 배열

let array = [1,2,"3",[1,2],"안녕하세요"];//초기화

console.log(array)
console.log(array[3][1])
console.log(array[array.length-1])
console.log(array[array.length-1][3])

//반복문

var car = ["sonata", "maserati", "benz"]

// for(var i = 0; i < car.length; i++){
//     console.log(car[i])
// }//전형적인 for문

// for(arr of array){
//     console.log(arr)
// }//of를 이용하여 반복

// var check = 0
// while(check < array.length){
//     console.log(array[check])
//     check++
// }//while

for(var arr in array){
    console.log(array[arr])
}//in을이용하여 출력 of는 변수에 배열값을 넣고 in은 변수에 iter값을 넣어 배열에 직접 출력

car.map((arr) => {
    console.log(arr);
})//map을 이용하여 출력