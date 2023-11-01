// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. 함수 선언(declaration)
// 호이스팅 됨
// function name(param1, param2) { body... return; }
// 하나의 함수는 하나의 기능만!
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS => 변수에 할당, 파라미터, 리턴값 등 으로 활용가능!
function printHello() {
    console.log('Hello');
  }
  printHello();
  
  function log(message) {
    console.log(message);
  }
  log('Hello@');
  log(1234);
  
  // 2. Parameters
  // 기본 타입(primitive parameters): passed by value
  // 참조 타입(object parameters): passed by reference
  function changeName(obj) {
    obj.name = '서태웅';
  }
  const jdm = { name: '정대만' };
  changeName(jdm);
  console.log(jdm);
  
  // 3. Default parameters (added in ES6)
  // parameter가 전달되지 않을 때, 설정한 기본값이 전달됨
  function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!');
  
  // 4. Rest parameters (added in ES6)
  function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
  
    // foreach와 비슷
    for (const arg of args) {
      console.log(arg);
    }
  
    args.forEach((arg) => console.log(arg));
  }
  printAll('서태웅', '정대만', '송태섭');
  
  // 5. Local scope
  // 밖에서는 안을 볼 수 있지만 안에서는 밖을 볼 수 없음
  let globalMessage = 'global'; // 전역 변수(global variable)
  function printMessage() {
    let message = 'hello';  // 지역 변수(local variable)
    function printAnother() {
      console.log(message);
      let childMessage = 'hello';
    }
    // console.log(childMessage); //error
  }
  
  // 6. Return a value
  // 모든 함수에는 return 값이 없으면 return undifined 가 되어 있는것과 같음
  function sum(a, b) {
    return a + b;
  }
  const result = sum(1, 2); // 3
  console.log(`sum: ${sum(1, 2)}`);
  
  // 7. Early return, early exit
  // bad
  function upgradeUser(user) {
    if (user.point > 10) {
      // long upgrade logic...
    }
  }
  
  // good
  // return이 필요한 경우를 먼저 작성하는 습관을 들이자(불필요한 로직 줄이기)
  function upgradeUser(user) {
    if (user.point <= 10) {
      return;
    }
    // long upgrade logic...
  }
  
  // First-class function
  // functions are treated like any other variable
  // can be assigned as a value to variable
  // can be passed as an argument to other functions.
  // can be returned by another function
  
  // 1. 함수 표현(Function expression)
  // a function declaration can be called earlier than it is defined. (hoisted)
  // a function expression is created when the execution reaches it.
  const print = function () {   // 익명 함수(anonymous function)
    // anonymous function
    console.log('print');
  };
  print();
  const printAgain = print;
  printAgain();
  const sumAgain = sum;
  console.log(sumAgain(1, 3));
  
  // 2. Callback function using function expression
  function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
      printYes();
    } else {
      printNo();
    }
  }
  const printYes = function () {
    console.log('yes!');
  };
  
  // named function
  // better debugging in debugger's stack traces(디버깅할 때 좋음)
  // 재귀함수(recursions)
  const printNo = function print() {
    console.log('no!');
    // print();
  };
  
  // Arrow function(화살표 함수, 항상 익명함수임)
  // always anonymous
  // const simplePrint = function () {
  //   console.log('simplePrint!');
  // };
  
  const simplePrint = () => console.log('simplePrint!');
  const add = (a, b) => a + b;  // 한 줄로 작성 시 return 생략 가능
  const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
  };
  
  // 즉시 실행 함수(IIFE: Immediately Invoked Function Expression)
  (function hello() {
    console.log('즉시 실행 함수!!');
  })();
  