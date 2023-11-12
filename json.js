'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json1 = JSON.stringify(true);
console.log("json1", json1);

let json2 = JSON.stringify(['apple', 'banana']);
console.log("json2", json2);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: function () {
        console.log(`${this.name} can jump!`);
    },
};

let json = JSON.stringify(rabbit);
console.log("rabbit", json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);   // 원하는 properties만 전달할 수 있음
console.log(json);

// 좀 더 세밀하게 통제하고 싶을 때 사용
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'jeongdaeman' : value;
});
console.log("rabbit json", json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log("JSON.stringify(rabbit)", json);

// 함수는 stringify에 추가되지 않으므로 parse를 다시 해줘도 함수가 생기지 않음
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log("obj", obj);
rabbit.jump();
// obj.jump();  // jump 함수가 없음

console.log("rabbit birthDate", rabbit.birthDate.getDate());
console.log("obj birthDate", obj.birthDate.getDate());
