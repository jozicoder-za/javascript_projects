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

//const fruits = ["Mango", "Pineapple", "Oranges"];
//for (const fruit of fruits) {
//console.log(fruit);
//}

// Higher order function
//function operateOnArray(arr, operation) {
//const result = [];
//for (let i = 0; i < arr.length; i++) {
//result.push(operation(arr[i]));
//}
//return result;
//}

//function double(x) {
//return x * 2;
//}

//const numbers = [1, 2, 3, 4, 5];
//const doubleNumbers = operateOnArray(numbers, double);
//console.log(doubleNumbers);

// Higher order function method
//const numbers = [1, 1, 1, 1, 1];
//let sum = 0;
//const forEachRes = numbers.forEach((num) => {
//return (sum += num);
//});

//const mapRes = numbers.map((num) => {
//return (sum += num);
//});

//console.log(forEachRes);
//console.log(mapRes);

// Unconventional sorting
//console.log([, undefined, "a", "b", { 20: 5 }].sort());

//const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
//const filteredArray = originalArray.filter((item) => item.id > 1);
//console.log(filteredArray);
//filteredArray[0].id = 4;
//console.log(filteredArray);
//console.log("original array");
//console.log(originalArray);

//const words = ["apple", "banana", "pear", "kiwi"];
//const shortWords = words.filter((word) => word.length <= 5);
//console.log(shortWords);

//setTimeout(() => {
//console.log("setTimeout wins");
//}, 0);

//queueMicrotask(() => {
//console.log("QueueMicrotask wins");
//});

//const x = new String("tricky");
//const y = x;
//console.log(x === y);

//async function goodbye() {
//return "goodbye";
//}

//console.log(goodbye());

// Q 9.
//function myFunc() {}
//console.log(typeof myFunc);

// Q 10
//let goodbye = async () => {
//return "Holla Dhlamini";
//};

//goodbye().then(console.log);

// Q 13

//let x = 10;
//function myFunc(y) {
//y = 12;
//}

//console.log(myFunc(x));
//console.log(x);

//const user = {
//isApp: true,
//num: 8,
//isReady: null,
//};

//console.log(user.isReady ?? "Blue");

// Continue Q19

// Continue Q 20
//console.log(BigInt(1000000000000000000) === 10000000000000000000);

// Q 23 - Function without return statement
//function add(a, b) {
//a + b;
//}

//console.log(add(5, 6));

// Syntax for calling none existing method
// console.log(myAPI.textMethod?.());

// Q 31 - Empty Map
//const map = new Map();
//map.set({}, 1);
//console.log(map.get({}));

// Q 32 - Unique values from arrays
//let map1 = new Map([
//["a", 1],
//["b", 1],
//["c", 1],
//]);

//let map2 = new Map([
// ["a", 2],
//["b", 2],
//]);

//let spreadMap = new Map([...map1, ...map2]);
//console.log(spreadMap);

// Q 38 - Function returning a value
//function getName() {
//var name = "Jon";
//function printName() {
//console.log(name);
//}
//printName();
//}

//getName();

// Q 41 - Recursive Function
//const test = (incrementer) => {
//if (incrementer < 0) {
//return;
//}
//console.log("first:" + incrementer);
//test(incrementer - 1);
//console.log("second" + incrementer);
//};

//test(2);

// Continue Q 43
//function resolveQuickly(x) {
//return new Promise((resolve) => {
//console.log(x);
//});
//}

//async function asyncTest() {
//var x = resolveQuickly(10);
//console.log(5);
//}

//asyncTest();

//const arr = [5, 10, 12, 4, 2];

//const minVal = arr.reduce((acc, elem) => {
//if (acc > elem) {
//return elem;
//}
//return acc;
//});

//console.log(minVal);

//console.log(Object.freeze());

//let scope = "global";
//let getScope = () => {
//var scope = "local";
//const inner = () => {
//return scope;
//};
//return inner;
//};

//console.log(getScope()());

// Q 64 - Closure that increment each time called

//let increment = (function () {
//let incrementer = 0;
//return function () {
//incrementer += 1;
//return incrementer;
//};
//})();

//console.log(increment());
//console.log(increment());

//function myFunction(x, y) {
//const arr = Array.prototype.slice.call(arguments);
//return arr.length;
//}

//console.log(myFunction(5));

//let xyz = "";
//xyz ||= "abc";
//console.log(xyz);

// Return final comma separated value
//let x = (1, 2, 3);
//console.log(x);

//setTimeout(function recur() {
//console.log("called me");
//setTimeout(recur, 1000);
//}, 1000);

//console.log(x);
//x = 5;
//if (x) {
//var x = 10;
//console.log(x);
//}

//let a = 8;
//a >>>= 3;
//console.log(a);

//let person = {
//age: 25,
//name: "Justin",
//};

//const beRef = (myObj) => {
//myObj.age = 30;
//};

//beRef(person);
//console.log(person.age);

//const dog = {
//color: "brown",
//breed: {
//pure: true,
//},
//};

//console.log(dog.hair.short);

// Coding Challenge - Student Score Analyzer
// Description
/* You are given an array of student object. 
   Create a function that will analyze the following
   1. averageScore
   2. highest Scorer
   3. passedStudent
*/

//const students = [
//{ name: "Alice", score: 78 },
//{ name: "Bob", score: 92 },
//{ name: "Charlie", score: 65 },
//{ name: "Diana", score: 88 },
//];

//function analyzeScores(students) {
//let totalScore = 0;
//let highestScore = 0;
//let highestScorer = "";
//let passedStudents = [];

//for (const student of students) {
//totalScore += student.score;

//if (student.score > highestScore) {
//highestScore = student.score;
//highestScore = student.name;
//}

//if (student.score >= 70) {
//passedStudents.push(student.name);
//}
//}
//const averageScore = totalScore / students.length;

//return {
//averageScore: averageScore,
//highestScore: highestScore,
//passedStudents: passedStudents,
//};
//}

//console.log(analyzeScores(students));

// Challenge 2 Order Summary Generator
// Write function that summarizes a customer order
/* Function should return a object containing
  - totalRevenue
  - largestOrderCustomer
  - smallOrders
  - totalItemsSold
*/

/*
{
 totalRevenue: 425,
 largestOrderCustomer: "Mike",
 smallOrders: ["Anna"],
 totalItemsSold: 7,
}
*/

// Solution
/*
const orders = [
  { customer: "John", items: ["Shoes", "Hat"], total: 120 },
  { customer: "Sarah", items: ["Bag"], total: 80 },
  { customer: "Mike", items: ["Watch", "Shoes", "Socks"], total: 200 },
  { customer: "Anna", items: ["Socks"], total: 25 },
];

function generateOrderSummary(orders) {
  let totalRevenue = 0;
  let highestTotal = 0;
  let largestOrderCustomer = "";
  let smallOrders = [];
  let totalItemsSold = 0;

  for (const order of orders) {
    totalRevenue += order.total;

    if (order.total > highestTotal) {
      highestTotal = order.total;
      largestOrderCustomer = order.customer;
    }

    if (order.total < 50) {
      smallOrders.push(order.customer);
    }

    totalItemsSold += order.items.length;
  }

  return {
    totalRevenue: totalRevenue,
    largestOrderCustomer: largestOrderCustomer,
    smallOrders: smallOrders,
    totalItemsSold: totalItemsSold,
  };
}

console.log(generateOrderSummary(orders));

*/

/*

  Continue with Mini-Real World Challenges
  1. Mini Banking System
  2. Fitness Tracker logic
  3. Inventory System
  4. Running log Analyzer

*/

// Mini Banking System (Logic Only)

/*
Expected Output
{
  owner: "Sifiso", 
  balance: 2900,
  totalDeposits: 700,
  totalWithdrawals: 300,
  numberOfTransactions: 3
  }
  */

/*
 Rules
 - Amount must be greater than 0;
 - Increase account balance
 - Add a transaction record
 */

/*
const account = {
  owner: "Bethuel",
  balance: 2500,
  transaction: [],
};

// Deposit Function
function deposit(account, amount) {
  if (amount <= 0) {
    console.log("Deposit amount must be greater than 0.");
    return;
  }

  account.balance += amount;

  account.transaction.push({
    type: "deposit",
    amount: amount,
    date: new Date().toLocaleString(),
  });
}

// Withdraw function
function withdraw(account, amount) {
  if (amount <= 0) {
    console.log("Withdrawal amount must be greater than 0.");
    return;
  }

  if (amount > account.balance) {
    console.log("insufficient funds.");
    return;
  }

  account.balance -= amount;

  account.transaction.push({
    type: "withdraw",
    amount: amount,
    date: new Date().toLocaleString(),
  });
}

// Account Summary Function
function getAccountSummary(account) {
  let totalDeposits = 0;
  let totalWithdrawals = 0;

  for (const transaction of account.transaction) {
    if (transaction.type === "deposit") {
      totalDeposits += transaction.amount;
    } else if (transaction.type === "withdraw") {
      totalWithdrawals += transaction.amount;
    }
  }

  return {
    owner: account.owner,
    balance: account.balance,
    totalDeposits: totalDeposits,
    totalWithdrawals: totalWithdrawals,
    numberOfTransactions: account.transactions.length,
  };
}
deposit(account, 500);
console.log(getAccountSummary(account));
*/

//  2. Fitness Tracker logic
// 3. Inventory System
// 4. Running log Analyzer

// 2. Fitness Tracker Logic
/* Create a workout app the tracks 
   type (e.g, 'running', 'cycling', 'gym')
   duration (in minutes)
   caloriesBurned
   date
*/

/* 
it should return 

{
  totalDuration: 160,
  totalCalories: 1480,
  longestWorkout: 'Gym',
  workoutBreakdown: {
    Running: 55,
    Cycling: 45,
    Gym: 60
  }
}

*/

// Start out data
const workouts = [
  { type: "Running", duration: 30, caloriesBurned: 300, date: "2026-02-01" },
  { type: "Cycling", duration: 45, caloriesBurned: 400, date: "2026-02-02" },
  { type: "Running", duration: 25, caloriesBurned: 280, date: "2026-02-03" },
  { type: "Gym", duration: 60, caloriesBurned: 500, date: "2026-02-04" },
];

function analyzeWorkouts(workouts) {
  let totalDuration = 0;
  let totalCalories = 0;
  let longestDuration = 0;
  let longestWorkout = "";
  let workoutBreakdown = {};
}
