'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: function () {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log("rabbit", json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

// 좀 더 세밀하게 통제하고 싶을 때 사용
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'jeongdaeman' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);

// 함수는 stringify에 추가되지 않으므로 parse를 다시 해줘도 함수가 생기지 않음
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();  // jump 함수가 없음

console.log("rabbit birthDate", rabbit.birthDate.getDate());
console.log("obj birthDate", obj.birthDate.getDate());
