// 문자열 연산
console.log('정' + '대만'); // 정대만
console.log('1' + 2);       // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 비교 연산자(Comparison operators)
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 논리 연산자(Logical operators): ||(or), &&(and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);  
// 앞부분이 true이면 더 이상 진행되지 않음
// 함수 호출같은 부분을 뒤로

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// 앞부분이 false이면 더 이상 진행되지 않음

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('하하');
  }
  return true;
}

// Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);    // true
console.log(stringFive != numberFive);    // false

// === strict equality, no type conversion
console.log(stringFive === numberFive);   // false
console.log(stringFive !== numberFive);   // true

// object equality by reference
const jdm1 = { name: '정대만' };
const jdm2 = { name: '정대만' };
const jdm3 = jdm1;
console.log("jdm");
console.log(jdm1 == jdm2);    // false
console.log(jdm1 === jdm2);   // false
console.log(jdm1 === jdm3);   // true

// 퀴즈
console.log(0 == false);          // true
console.log(0 === false);         // false
console.log('' == false);         // true
console.log('' === false);        // false
console.log(null == undefined);   // true
console.log(null === undefined);  // false