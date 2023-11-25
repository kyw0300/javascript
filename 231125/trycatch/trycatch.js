'use strict'

// 예외 처리
// 프로그램에서 문제가 발생하면 프로그램은 실행을 멈추므로 코드를 작성할 때부터 발생할만한 문제를 미리 생각하고 대비해야 한다.
// 이런 작업을 '예외를 처리한다'고 한다.

// try문, catch문, finally문
// try 블록에서는 실행할 명령을 작성
// catch 블록에서는 예외를 어떻게 처리할지 작성. error 객체를 인자로 받는데, error 객체에는 오류 이름과 오류 설명이 들어있다.
// finally 문은 예외가 발생하든, 발생하지 않든 상관없이 try 블록 다음에 실행할 명령을 작성한다. 일반적으로 생략되는 경우 많음.
try {
    console.log("start");
    add();
    console.log("...ing");

} catch (error) {
    // console.log(`error 발생 : ${error}`);
    console.error(`error 발생 : ${error}`)
    console.error(`error.name : ${error.name}`)
    console.error(`error.nessage : ${error.message}`)
} finally {
    console.log("finally 문 실행..");
}

console.log("end");

// throw 문
let json = '{"grade": 3, "age": 25}';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        // throw "사용자 이름이 없습니다.";

        // throw문으로 오류 메시지를 만들 때 Error 객체를 사용할 수 있다.
        throw new Error("사용자 이름이 없습니다.");
    }
} catch (err) {
    console.error(err);
}