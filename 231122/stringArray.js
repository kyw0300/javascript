'use strict';

// 문자열을 문자 배열로 변환
let str = "Hello, jeongDaeMan!";

// 1. split() 메서드
let array1 = str.split("");
console.log("array1", array1);

// 2. 전개 연산자
let array2 = [...str];
console.log("array2", array2);

// 3. Array.from() 메서드
let array3 = Array.from(str);
console.log("array3", array3);


// 문자열 배열을 다시 문자열로 변환
// join() 메서드
let arrayToString = array1.join("");
console.log("arrayToString", arrayToString);


// 새로운 배열 만들기
// 1. 빈 배열을 만들고 값 할당하기
let season = [];
season[0] = "spring";
season[1] = "summer";
console.log("season", season);

// 2. 리터럴 표기법으로 만들기
let fruits = ["사과", "배", "복숭아"];
console.log("fruits", fruits);

// 3. Array 객체의 인스턴스 만들기
let pets = new Array('dog', 'cat', 'pig');
// console.log("pets", pets);

// 중간의 인덱스를 건너뛰고 값을 할당할 수 있다.
// 중간의 인덱스 자리는 비어있게 됨.
pets[4] = 'rabbit';
console.log("pets", pets);
console.log("pets[3]", pets[3]);

// 배열 요소 순회 - forEach() 메서드
pets.forEach((element, index, array) => {
    console.log("pet", element, index, array);
});

// 배열 합치기
// 1. concat() 메서드
let concatArray = season.concat(fruits, "까꿍");
console.log("concatArray", concatArray);

// 2. 전개 연산자
let array4 = ["안녕", ...season, ...pets];
console.log("array4", array4);
