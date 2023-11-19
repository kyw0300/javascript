'use strict';

// javascript 에서는 객체 간의 상속을 구현하기 위해 prototype을 사용(prototype 기반의 언어)
let arr = new Array();
console.log("arr", arr);

// 생성자 함수
const Shohoku = function(name, age, captain){
    this.name = name;
    this.age = age;
    this.captain = captain;
    // this.position = function(){
    //     let str;
    //     this.captain === true ? str = '주장' : str = '일반';
    //     return str;
    // }
}

Shohoku.prototype.position = function(){
    let str;
    this.captain === true ? str = '주장' : str = '일반';
    return str;
}

const jeongDaeMan = new Shohoku('정대만', 18, false);
// console.log("jeongDaeMan", jeongDaeMan, jeongDaeMan.position()); // 'use strict'로 인해 에러 발생, str 선언을 해줘야함.
console.log("jeongDaeMan", jeongDaeMan);    

console.log("jeongDaeMan.name", jeongDaeMan.name);
console.log("jeongDaeMan.age", jeongDaeMan.age);
console.log("jeongDaeMan.position", jeongDaeMan.position());

console.log("jeongDaeMan.__proto__", jeongDaeMan.__proto__);
console.log("Shohoku.prototype", Shohoku.prototype);


const chaeChiSu = new Shohoku('채치수', 19, true);
const kangBaekHo = new Shohoku('강백호', 17, false);
console.log('chaeChiSu.position', chaeChiSu.position());
console.log('kangBaekHo.position', kangBaekHo.position());

// 메서드 추가
Shohoku.prototype.introduce = function(){
    console.log(`안녕하세요, 제 이름은 ${this.name}이고 나이는 ${this.age}입니다.`);
}

kangBaekHo.introduce();


// 프로토타입 상속
// 생성자 함수를 사용해 Book 선언하기
function Book (title, price) {
    this.title = title;
    this.price = price;
  }
  
  Book.prototype.buy = function() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다.`);  
  }
  
  const book1 = new Book("ABCDE", 10000);   
  book1.buy();  // Book 객체의 buy() 메서드 사용
  
  // 기존 객체를 확장해서 새로운 객체 만들기
  function Textbook(title, price, major) {
    Book.call(this, title, price);   // 기존 객체의 프로퍼티 재사용
    this.major = major;               // 새로운 프로퍼티 정의
  }
  
  Textbook.prototype.buyTextbook = function() {   // 새로운 메서드 정의
    console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
  }
  
  Object.setPrototypeOf(Textbook.prototype, Book.prototype);   // Textbook 프로토타입을 Book 프로토타입으로 연결
  
  const book2 = new Textbook("알고리즘", 5000, "컴퓨터공학");
  book2.buyTextbook();     // Textbook 객체의 메서드 사용
  book2.buy();             // Book 객체의 메서드 사용