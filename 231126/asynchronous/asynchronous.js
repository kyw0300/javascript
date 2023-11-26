'use strict';

// javscript는 기본적으로 한 번에 하나의 작업만 처리하는 싱글 스레드(single thread) 언어
// 하지만 중간에 시간이 많이 걸리는 소스가 있다면 별도로 처리하고, 그 다음에 있는 소스를 먼저 실행함

// function displayA() {
//     console.log("A");
// }
// function displayB() {
//     setTimeout(() => console.log("B"), 2000);
// }
// function displayC() {
//     console.log("C");
// }
// displayA();
// displayB();
// displayC();   // A, C, B 순서로 콘솔에 출력됨
// javascript는 싱글 스레드를 사용하지만, 시간이 많이 걸리는 작업은 따로 처리해서 싱글 스레드의 단점을 보완


// 프로그램에서는 여러 개의 함수를 작성하는데, 실행 시간이 다른 함수들을 
// 원하는 처리 순서에 맞게 프로그래밍라는것을 '비동기 처리'라고 한다.

// displayA, displayB, displayC 순서대로 실행되야 한다면
function displayA() {
    console.log("A");
}
function displayB(callback) {   // callback function
    setTimeout(() => {
        console.log("B")
        callback();
    }, 2000);
}
function displayC() {
    console.log("C");
}
displayA();
displayB(displayC);

// javascript 에서 비동기 방식으로 처리하려면 세 가지 방법 중 사용하면됨
// 1. callback 함수 : 함수 안에 또 다른 함수를 매개변수로 넘겨서 실행 순서를 제어, callback function이 많아지면 가독성이 떨어짐, callback 지옥...
// 2. promise : Promise 객체와 콜백 함수를 사용해서 실행 순서를 제어
// 3. async, await : async 함수와 await 예약어를 사용해서 실행 순서를 제어

//  callback function
function order(param, callback) {
    console.log(`${param} 주문 접수`);

    setTimeout(() => {
        callback(param);
    }, 2000);
}
function display(param) {
    console.log(`${param} 준비 완료`);
}

order('latte', display);
