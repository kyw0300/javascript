'use strict';
// class : Template
// object : instance of a class
// javascript class > prototype 기반

// class declarations
class Person {
    // 생성자(constructor)
    constructor(firstName, lastName, age) {
        // 필드(fields)
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // getter, setter
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            throw Error('age can not be negative');
        }
        this._age = value < 0 ? 0 : value;
    }

    // 메서드(methods)
    speak() {
        console.log(`${this.firstName}${this.lastName}: 안녕!`);
    }
}

const jdm = new Person('정', '대만', 18);
console.log("name", jdm.firstName + jdm.lastName);
console.log("age", jdm.age);
jdm.speak();

// 접근제한자(public, private) 아직은 사용하기 이르다
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class SeoTaeWoong {
    publicField = '서태웅';
    #privateField = '북산고의 에이스';

    callPrivateField() {
        console.log('privateField', this.#privateField);
    }
}
const stw = new SeoTaeWoong();
stw.callPrivateField();

// Static properties and methods 아직 사용하기 이름
class StaticTest {
    static dinner = '낙지볶음';
    constructor() {
        console.log('StaticTest class 생성!');
    }

    static hungry(name) {
        console.log(`${name}은 지금 배가 고프다..`);
        console.log(`오늘 저녁은 ${StaticTest.dinner}`);
    }
}
const kyw = new StaticTest();
console.log(kyw.dinner);            // undifined 출력
// console.log(kyw.hungry("영우"));    // Uncaught TypeError: kyw.hungry is not a function
console.log(StaticTest.dinner);
StaticTest.hungry('영우');          // 출력이 잘 되는것을 확인할 수 있다

// 상속(Inheritance)
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {        // override
        super.draw();
        console.log('🔺');
    }
    getArea() {     // override
        return (this.width * this.height) / 2;
    }

    toString() {    //  override
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {    // value <= obj
  value.value = 7;
}
change(obj);
console.log(obj);   // { value: 7 } 이 출력
