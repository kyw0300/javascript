'use strict';

// javascript 에서는 객체 간의 상속을 구현하기 위해 prototype을 사용(prototype 기반의 언어)
let arr = new Array();
console.log("arr", arr);

// 생성자 함수
const Shohoku = function(name, age, captain){
    this.name = name;
    this.age = age;
    this.captain = captain;
    this.position = function(){
        this.captain === true ? str = '주장' : str = '일반';
        return str;
    }
}

const jeongDaeMan = new Shohoku('정대만', 18, false);
// console.log("jeongDaeMan", jeongDaeMan, jeongDaeMan.position()); // 'use strict'로 인해 에러 발생
console.log("jeongDaeMan", jeongDaeMan);    

console.log("jeongDaeMan.__proto__", jeongDaeMan.__proto__);
console.log("Shohoku.prototype", Shohoku.prototype);
