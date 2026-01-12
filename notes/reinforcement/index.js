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
//const obj = {
//value: 42,
//getValue() {
//return this.value;
//},
//};

//console.log(obj.getValue());

// arrow function and this keyword
//const obj = {
//value: 10,
//getValue: () => this.value,
//};

//console.log(obj.getValue());

// Promises
//Promise.resolve(5)
//.then((value) => value * 2)
//.then(console.log);

// Async await application
//async function foo() {
//return 42;
//}

//foo().then(console.log);

// coalesce nullish
//const user = {
//theme: null,
//userSetup: 5,
//gamer: false,
//};

//console.log(user.theme ?? "light-theme");

// asynchronous timeline
//console.log("start");

//setTimeout(() => console.log("timeout"), 0);

//Promise.resolve().then(() => console.log("promise"));

//console.log("end");

// creating a custom made error message
//try {
//throw new Error("oops");
//} catch (e) {
//console.log(e.message);
//}

//for (let i = 0; i < 25; i += 2) {
//if (i % 5 === 0) {
//continue;
//}
//if (i % 13 === 0) {
//break;
//}
//console.log(i);
//}

//for (let i = 1; i < 6; i++) {
//if (i === 4) break;
//console.log(i);
//}

//const shoppingList = { tomatoes: 4, apples: 10 };
//for (const item in shoppingList) {
//console.log(item);
//}

//for (let i = 2; i <= 13; i++) {
//if (i % 2 === 0) continue;
//console.log(i);
//}

const fruits = ["Mango", "Pineapple", "Oranges"];
for (const fruit of fruits) {
  console.log(fruit);
}
