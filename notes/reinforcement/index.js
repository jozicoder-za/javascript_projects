// Level 1 - JavaScript Fundamentals
// Q1 - What will this log
//console.log(typeof "Hello");
//console.log(typeof 42);
//console.log(typeof true);

// Q2 - What is the output
//let x;
//console.log(x);

// Q3 - Data Type and Type Coercion
//console.log(1 + "2" + "2");
//console.log(1 + +"2" + "2");
//console.log(1 + -"1" + "2");
//console.log(+"1" + "1" + "2");
//console.log("A" - "B" + "2");
//console.log("A" - "B" + 2);

// Q4 - Equality Operators
//console.log(1 == "1");
//console.log(1 === "1");
//console.log(null == undefined);
//console.log(null === undefined);
//console.log(NaN == NaN);
//console.log(Object.is(NaN, NaN));

// Q5 - Function Expression vs Declaration
//console.log(foo());
//console.log(bar());

//function foo() {
//return "foo";
//}

//var bar = function () {
//return "bar";
//};

//console.log(typeof null);

// modifying based on scope
//let x = 10;

//if (true) {
//let x = 20;
//}

//console.log(x);

// logging hosting
//console.log(a);
//var a = 5;

// Regular vs Arrow function
//function regular() {
//console.log(this);
//}

//const regularF = () => {
//console.log(this);
//};
//regular();
//regularF();

// Arrow function inheritance
//const add = (a, b) => a + b;
//console.log(add(2, 3));

//console.log([1, 2, 3].map((num) => num * 2));

// Referencing an object
//const obj = { a: 1 };
//const ref = obj;
//ref.a = 2;
//console.log(obj.a);

// Shallow copy and object
//const copy = Object.assign({}, myObj);

// Object Destructuring
//const user = { name: "Alex", age: 30 };
//const { name: firstName, age } = user;
//console.log(firstName, age);

// Iteration with the setTimeout function
//for (let i = 0; i < 3; i++) {
//setTimeout(() => console.log(i), 0);
//}

// While loop amplified

// Switch statement with a twist
//const x = 2;

//switch (x) {
//case 1:
//console.log("one");
//case 2:
//console.log("two");
//case 3:
//console.log("three");
//break;
//default:
//console.log("default");
//}

// Short Circuiting
//const result = false && console.log("Hello");
//console.log(result);

// empty return statement
//function test() {
//return;
//}

//console.log(test());

// Call a function with undefined parameter
//function greet(name = "Guest") {
//console.log(name);
//}

//greet(null);

// spread functionality withing a function
//const arr1 = [1, 2];
//const arr2 = [...arr1, 3, 4];
//console.log(arr2);

// setting function default values
//function foo(a, b = 2) {
//console.log(a + b);
//}

//foo(3);
// closure pattern
//function outer() {
//let count = 0;
//return function () {
//count++;
//return count;
//};
//}

//const counter = outer();
//console.log(counter());
//console.log(counter());

// global object
const obj = {
  value: 42,
  getValue() {
    return this.value;
  },
};

console.log(obj.getValue());
