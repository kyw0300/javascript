'use strict';

// Promise is a Javascript object for asynchronous operation.
// 1. State : 수행 중인지(pending), 기능 수행이 완료되어서 성공(fulfilled), 실패(rejected했는지
// 2. Producer, Consumer : 원하는 데이터를 제공하는 사람과, 데이터를 소비하는 사람

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('뭔가 하는중...');  // promise가 만들어지는 순간 실행됨
    setTimeout(() => {
        // resolve('JeongDaeman');
        reject(new Error('no network!!'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally!');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});
fetchNumber
    .then(num => num * 2) // then에서는 값을 바로 전달해도 되고 다른 promise를 전달해도됨
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log("num", num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen() //
    .then(getEgg)   // 값을 바로 전달할 경우 이렇게 생략가능
    // .catch(error => {return '🍗'})   // error 발생 시 값 대체 가능
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(console.log);