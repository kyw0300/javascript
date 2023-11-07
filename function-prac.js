'use strict';

// 함수 표현식 → 익명함수 : 함수의 이름이 없는 함수
// 익명함수로 선언하는 이유는 함수를 변수처럼 사용하기 위해!!
// javascript 에서는 함수는 마치 하나의 값처럼, 변수에 할당하거나,
// 함수를 다른 함수의 매개변수로 넘기고, return(반환값)값으로도 사용할 수 있다.(1급 함수!!!)

let sum = function(a, b) {
    return a + b;
}


// 즉시 실행 함수
// 함수를 한 번만 실행하는 경우 함수를 정의하면서 동시에 실행할 수 있다!
// () 로 묶어주면됨, 또는 함수앞에 +,-,!를 붙여도 인식함
// ()와 !를 권장함
(function(){
    console.log("()로 즉각실행함수 실행!!");
}());

// 요렇게 인수를 넣어줄 수도 있다
!function(a, b){
    let sum = a + b;
    console.log(`!로 즉시 실행 함수 결과 : ${sum}`);
} (100, 200);

// 화살표 함수(표현식을 사용해 정의할 경우에만 사용 가능)
// let hi = function(arg) {
//     alert(`${arg} : 안녕 난 ${arg}라고 해!`);
// }

// let hi = (arg) => {
//     alert(`${arg} : 안녕 난 ${arg}라고 해!`)
// };

// 함수에서 실행할 명령이 한 줄일 경우 {}, return 생략 가능
// 매개변수가 1개일 경우 () 생략 가능
let hi = arg => alert(`${arg} : 안녕 난 ${arg}라고 해!`);   // 요렇게
// hi("정대만");


// 콜백 함수 : 다른 함수의 인수로 사용하는 함수
const myBtn = document.querySelector("#myBtn");

function display() {
    alert("버튼 클릭!");
};

// myBtn.addEventListener("cliㄴck", display);   // display()가 아님에 주의!! 뒤에 소괄호를 넣으면 함수를 실행하는 것
// myBtn.addEventListener("click", () => {         // 한번만 실행할 경우 
//     alert("정대만 멋지다");
// });

// function showData(arg1, arg2) {
//     console.log(`이름 : ${arg1}, 나이 : ${arg2}`);
// };
// function getData(){
//     let name = prompt("이름을 입력하시오");
//     let age = prompt("나이를 입력하시오");
//     showData(name, age);
// }
// myBtn.addEventListener("click", getData);

function showData(arg1, arg2) {
    console.log(`이름 : ${arg1}, 나이 : ${arg2}`);
};
function getData(callback){
    let name = prompt("이름을 입력하시오");
    let age = prompt("나이를 입력하시오");
    callback(name, age);
}
// myBtn.addEventListener("click", getData(showData));      // 왜 버튼을 안눌러도 실행??
myBtn.addEventListener("click", () => getData(showData));   // 요렇게 써줘야함

// 함수 뒤에 ()가 붙고 안붙고를 신경써줘야함!
let kyw = (a, b) => a + b;
console.log(kyw(10, 5));

function add(a, b){
    return a + b;
}
// let kyw1 = add();    // 에러!!!!
// let kyw1 = add(30, 20); // kyw1에 50의 값이 할당됨, 밑에 console.log(kyw1(20, 10)); 부분에서 에러
let kyw1 = add;
console.log(kyw1(20, 10));


// 함수를 다른 함수로 전달
function hello(){
    return "안녕하세요!";
}
function bye(){
    return "안녕히가세요!";
}
function userCheck(name, fn){
    // console.log(`${name}님, ${fn}`); // 이렇게 쓰면 함수 자체가 반환됨
    console.log(`${name}님,`, fn());
}

userCheck('서태웅', hello);
userCheck('송태섭', bye);

// 함수에서 다른 함수로 반환하기
// let init = () => {
//     return (a, b) => {
//         return a > b ? a - b : b - a;
//     }
// };
let init = () => (a, b) => a > b ? a - b : b - a;   // 이렇게 변환도 가능함
console.log("init", init(15, 8));     // 이 경우 init() 함수 안의 함수가 반환됨
console.log("init", init()(15, 8));   // 처리된 값이 반환됨 : 7


// 전개 구문 : 배열을 하나의 덩어리로 처리해야 할 때 유용함!
let shohoku = ["채치수", "정대만", "서태웅", "송태섭", "강백호"];
console.log("shohoku", shohoku);
console.log("...shohoku", ...shohoku);

// 인수의 개수에 상관없이 작동 가능
function addNum(...numbers){
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

// 인수의 일부분만 나머지 매개변수로 받기
function favoriteShohoku(first, second, ...members){
    console.log(`저는 ${first}선수와 ${second}선수의 팬입니다!`);
    console.log(`나머지 멤버들 : ${members}`)
}
favoriteShohoku("채치수", "정대만", "서태웅", "송태섭", "강백호");
