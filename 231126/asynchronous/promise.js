'use strict';

// promise : callback hell 방지

// promise 객체 생성
let likePizza = true;
// let likePizza = false;
const pizza = new Promise((resolve, reject) => {
    if (likePizza) {
        resolve('피자를 주문하자!');
    } else {
        reject('치킨을 주문하자!');
    }
});
// promise 객체가 하는 일은 실행 결과에 따라 resolve() 함수나 reject() 함수로 연결할 뿐,
// 성공/실패에 따라서 실행할 명령을 가지고 있지는 않음.
// promise 객체를 만들기만 할 뿐, 실제 이 promise를 사용하지는 않는데, 이를 제작 코드(producing code)라고 함.


// promise 객체 사용하기 : 소비 코드(consuming code)
// then(), catch(), finally() 메서드 사용
pizza
    .then(function (result) {
        console.log('result', result);
    })
    .catch(error => console.log('error', error))    // 이런식으로 생략해서 작성 가능
    .finally(
        () => console.log('완료')
    );


// promise의 상태
// pending : 처음 프로미스를 만들면 대기 상태(pending)가 됨
// fulfilled : 처리에 성공하면 이행 상태(fulfilled)가 됨
// rejected : 처리에 성공하지 못하면 거부 상태(rejected)가 됨

// promise 연습
const order = new Promise(function (resolve, reject) {
    let coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
    if (coffee != null && coffee != "") {
        document.querySelector(".start").innerText = `${coffee} 주문 접수`;
        setTimeout(() => {
            resolve(coffee);
        }, 3000);
    } else {
        reject("커피를 주문하지 않았습니다.");
    }
});

function display(result) {
    document.querySelector(".end").innerText = `${result} 준비 완료 🥤 `;
    document.querySelector(".end").classList.add("active");
    document.querySelector(".start").classList.add("done");
}

function showErr(err) {
    document.querySelector(".start").innerText = err;
}

order
    // then() 메서드를 실행하면 order 프로미스를 반환하는데, 
    // then(display)라고 하면 반환된 order 프로미스의 결과값(result)이 display로 넘겨짐
    .then(display)
    // .then(function (result) {
    //     display(result);
    // })
    .catch(function (error) {
        showErr(error);
    })
