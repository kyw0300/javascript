'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log('name', person.name);
  console.log('age', person.age);
}

const jdm = { name: 'jdm', age: 18 };
print(jdm);

// with JavaScript magic (dynamically typed language)
// can add properties later, WOW!
jdm.hasJob = true;
console.log(jdm.hasJob);

// can delete properties later
// 삭제도 가능하다
delete jdm.hasJob;
console.log(jdm.hasJob);

// 2. Computed properties
// key should be always string
// 실시간으로 원하는 키의 값을 받아오고 싶을 때 배열식 접근법 사용!
// 동적으로 키에 관련된 값을 받아오고 싶을 때 유용함
console.log('name', jdm.name);
console.log('배열식 접근법 name', jdm['name']);   // 배열식 접근법
jdm['hasJob'] = true;
console.log(jdm.hasJob);

function printValue(obj, key) {
    console.log('1', obj.key);      // undifined
    console.log('2', obj[key]);     // 18 출력
  }
  printValue(jdm, 'name');
  printValue(jdm, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// const person4 = makePerson('kangbaekho', 30);
const person4 = new Person('kangbaekho', 30);
console.log(person4);

// 4. Constructor Function
// 아래 2개의 함수가 같은 역할을 함
function makePerson(name, age) {
    return {
        name: name,
        age: age
    }
}
function Person(name, age) {  // javascript 엔진이 알아서 object를 생성해줌
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in jdm);
console.log('age' in jdm);
console.log('random' in jdm);
console.log(jdm.random);

// 6. for..in vs for..of
// for (key in obj)
// console.clear();
for (let key in jdm) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'songtaesub', age: 17 };
const user2 = user;   // 참조타입
// user2.name = 'seotaewoong';
console.log('user', user);
console.log('user2', user2);

// old way(노가다..)
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
// console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);    // 값이 덮어쓰기가 됨
console.log(mixed.color);   // blue 출력
console.log(mixed.size);    // big 출력

// 배열식 접근법 연습
let name = "merong";
var daeman  = {                 // new Object()
    name:"대만",                // 속성명은 변수처리 안됨! 왱? 문자열 처리되기 때문에
    role: "농구선수",
    songs: ["또뽀뽀", "뽀로로"]
};
console.log('daeman', daeman);

// 배열식 접근법 -> 무지막지 중요 -> 무조건 연습 -> 숟가락이 외울 정도롱 -> 연봉 많이 올라감!
var name2 = "음하하하!";
var taewoong = {
    [name]: "태웅2",    // 위의 merong이 key로 들어감
    ["3"]: ["3", "33"],
    ["4"]: ["4", "44"],
    ["1"]: "농구선수2",
    ["2"]: ["뽀뽀뽀2", "뽀로로2"]
};
// taewoong.3 = "ppp"; 요건 변수 선언 규칙 위반(숫자를 변수명이 시작될 순 없당)

console.log('taewoong', taewoong);
console.log('taewoong[1]', taewoong[1]);    // 왜 이 2개가 같을까?
console.log('taewoong[1]', taewoong['1']);  // 왜 이 2개가 같을까?
console.log('taewoong[2]', taewoong[2]);

console.log("prac1", taewoong['3']);
console.log("prac2", taewoong[name]);
console.log("prac3", taewoong['merong']);


