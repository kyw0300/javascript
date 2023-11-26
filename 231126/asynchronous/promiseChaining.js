'use strict';

// 프로미스 체이닝(promise chaining)

/*
const step1 = (callback) => {
    setTimeout(() => {
        console.log("피자 도우 준비");
        callback();
    }, 2000);
}

const step2 = (callback) => {
    setTimeout(() => {
        console.log("토핑 완료");
        callback();
    }, 1000);
}

const step3 = (callback) => {
    setTimeout(() => {
        console.log("굽기 완료");
        callback();
    }, 2000);
}

// callback function로 연결
console.log("피자를 주문합니다.");
step1(function () {
    step2(function () {
        step3(function () {
            console.log("피자가 준비되었습니다. 🍕");
        });
    });
});
*/

// A.then(B).then(C)
// A promise를 만든 후 B promise로 넘겨주고, B promise를 다시 C promise에게 넘겨줌
// 이렇게 .then()으로 계속 연결이 가능하다. promise에서 then() 메서드를 실행하면 promise가 반환되기 때문
const pizza = () => {
    return new Promise((resolve) => {
        resolve('피자를 주문합니다.');
    });
};

const step1 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('피자 도우 준비');
        }, 3000);
    });
};

const step2 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('토핑 완료');
        }, 1000);
    });
};

const step3 = (message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('굽기 완료');
        }, 2000);
    });
};


// then() 메서드가 실행됐을 때 promise가 반환되는 것을 확인할 수 있다.
// pizza.then() 으로 작성 시 에러
pizza()
  .then((result) => step1(result)) // pizza()가 성공하면 step1() 실행
  .then((result) => step2(result)) // step1()이 성공하면 step2() 실행
  .then((result) => step3(result)) // step2()이 성공하면 step3() 실행
  .then((result) => console.log(result)) // step3()이 성공하면 "굽기 완료" 표시
  .then(() => {
    console.log('피자가 준비되었습니다. 🍕');
  });

// 위의 소비 코드를 아래와 같이 축약해서 표현할 수 있다.
// pizza()
// .then(step1)
// .then(step2)
// .then(step3)
// .then(console.log)
// .then(() => {
//   console.log("피자가 준비되었습니다. 🍕");
// });