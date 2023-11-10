"use strict";

// 타이머 함수(timer function) : 실행할 함수와 시간을 지정하는 함수
// 타이머 함수에 실행할 함수를 인수로 받기 때문에 콜백함수를 매개변수로 사용한다.

// setInterval(func, delay, arg0, arg1,...) - 일정 시간마다 반복
// delay를 지정하지 않으면 기본값은 0
// 반환값 : setInterval() 호출로 생성된, 타이머를 식별하는 0이 아닌 숫자 값
// 추후에 clearInterval()에 전달되어 interval을 취소한다.
// 네트워크 대기 시간, 응답하지 않는 서버 및 기타 여러 문제로 인해 요청이 할당된 시간 내에 완료되지 않을 수 있음.
function hi(arg0, arg1) {
    console.log(`${arg0}아 안녕! 난 ${arg1}라고해`);
}

// setInterval(hi("대만"), 1000);  // 함수가 실행되기 때문에 한번만 실행됨 hi로 넣어야함
// setInterval(hi, 1000, "대만", "강백호");    // 매개변수는 이런식으로

let hihi;
let cnt = 0;

// hihi에 interval이 이미 설정되어 있는지 확인
hihi = setInterval(() => {
    console.log("태웅아 안녕");
    cnt++;
    if (cnt == 5) {
        clearInterval(hihi);
        hihi = null; // 변수에서 interval을 해제
        console.log("setInterval 끝!");
    }
}, 1000);

const myArray1 = ["zero", "one", "two"];
myArray1.myMethod = function (sProperty) {
    // console.log("arguments", arguments);
    // console.log("sProperty", sProperty);
    // console.log("this", this);

    console.log(arguments.length > 0 ? this[sProperty] : this);
    // this가 myArray1로 설정됨
    // this[sProperty]가 myArray1[sProperty]와 동일함
};

// setInterval(() => this.myMethod, 1000, 1);  // 실행안됨 왜안되징...

// 즉시 실행 함수를 통해 즉시 setInterval 실행 가능!! $, !도 가능하당
(function loop() {
    setTimeout(() => {
        // 로직을 넣어주세요
        console.log("루프 실행!!");
        loop();
    }, 500);
})();

// setTimeout(func, delay, arg0, arg1,...) - 지정한 시간이 지난 후에 콜백 함수를 실행
// setTimeout()은 비동기 함수로서, 함수 스택의 다른 함수 호출을 막지 않음.
// setTimeout()을 사용해서 다음 함수 호출을 "일시정지"할 수는 없음.
// 함수의 실행이 완료된 후에 다른 함수를 호출하는 구조가 필요한 경우 프로미스 참고
setTimeout(hi, 3000, "고양이", "강아지");

const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
    // console.log("arguments", arguments);
    // console.log("sProperty", sProperty);
    // console.log("this", this);

    console.log(arguments.length > 0 ? this[sProperty] : this);
    // this가 myArray로 설정됨
    // this[sProperty]가 myArray[sProperty]와 동일함
};

// myArray.myMethod(); // "zero,one,two" 기록
// myArray.myMethod(1); // "one" 기록

// 1초 후 "[object Window]" 기록, this가 따로 설정되지 않았으므로 기본값인 window 객체를 가리킨다.
// setTimeout(myArray.myMethod, 1000);

// 1.5초 후 "undefined" 기록
// setTimeout(myArray.myMethod, 1500, "1");

// thisArg를 설정할 수 있는 방법이 없음. call()을 사용해 this를 설정하는 것 역시 안됨

// 해결법1 : 다른 함수로 감싸기
setTimeout(function () {
    myArray.myMethod();
}, 2000); // 2초 후 "zero,one,two" 기록
setTimeout(function () {
    myArray.myMethod("1");
}, 2500); // 2.5초 후 "one" 기록

// 해결법2 : bind() 사용해서 주어진 함수의 모든 호출에서 this값을 설정
const myBoundMethod = function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
}.bind(myArray);

myBoundMethod(); // "zero,one,two" 기록, this가 myArray에 바인딩됐기 때문
myBoundMethod(1); // "one" 기록
setTimeout(myBoundMethod, 1.0 * 1000); // 1초 후, 바인딩으로 인해 여전히 "zero,one,two" 기록
setTimeout(myBoundMethod, 1.5 * 1000, "1"); // 1.5초 후 "one" 기록

// setTimeout에 함수 대신 문자열을 지정하는 것 금지!!
// setTimeout("console.log('Hello World!');", 500);

// // 이렇게 사용하세요
// setTimeout(function () {
//     console.log("Hello World!");
// }, 500);
