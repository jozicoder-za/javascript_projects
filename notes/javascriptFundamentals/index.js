// Slice
let message = "Hello Javascript";
//console.log(message.slice(2));
//console.log(message.slice(0, 5));

// Slice - negative number
let sentence = "Learning Javascript is fun";
//console.log(sentence.slice(9, -4));

// Trim
// both sides
let msg = "    Hello   ";
//console.log(msg.trim());

// Type Coercion
//console.log("10" + "number");
//console.log("10" + 7);
//console.log("10" - 7);
//console.log("abc" - 7);
//console.log("abc" * 7);

// Increment and decrement
let x = 2;
//console.log(++x);
let y = 3;
//console.log(y++);

// Compound Assignment
let num = 7;
//console.log((num += 2));

// Unary Operator
let str = "42";
//console.log(typeof +str);
//console.log(typeof -str);

// Falsy values
//console.log(Boolean(""));
//console.log(Boolean(0));
//console.log(Boolean(false));
//console.log(Boolean(null));
//console.log(Boolean(undefined));
//console.log(Boolean(NaN));

// Conditionals with falsy values
if (null) {
  console.log("wont run");
} else {
  //console.log("null: this will run");
}

if (false) {
  console.log("Won't run");
} else {
  //console.log("False: This will run");
}

if (NaN) {
  console.log("Won't operate");
} else {
  //console.log("NaN: This will run");
}

// Ternary Operator
let temp = 23;
const weather = temp > 25 ? "sunny" : "cold";
//console.log(`The weather is ${weather}`);

// logical OR
let userInput;

if (userInput || "Guest") {
  //console.log("A user is present");
} else {
  console.log("No user detected");
}

// Nullish Coalescing Operator
//console.log(null ?? "default value");
//console.log(undefined ?? "start value");

const userSetting = {
  theme: null,
  volume: 0,
  notification: false,
};

const theme = userSetting.theme ?? "light";
//console.log(theme);

//Not a Number (NaN);
//console.log(NaN === NaN);

// isNan()
//console.log(isNaN(NaN));
//console.log(isNaN(undefined));
//console.log(isNaN(null));
//console.log(isNaN({}));
//console.log(isNaN(34));
//console.log(isNaN("sifiso"));
//console.log(isNaN("37"));
//console.log(Number.isNaN("37"));

// check number in function

function division(a, b) {
  let result = a / b;
  if (Number.isNaN(result)) {
    return `Error: ${result} not a number`;
  }
  return result;
}

//console.log(division(10, 2));

// parseFloat
//console.log(parseFloat("3.14"));
//console.log(parseFloat("3.14 abc"));
//console.log(parseFloat("3.14.5"));
//console.log(parseFloat("abc 3.14"));

// parseInt()
//console.log(parseInt("42"));
//console.log(parseInt("42.2"));
//console.log(parseInt("42px"));
//console.log(parseInt("abc123"));

// toFixed()
let nuM = 3.14159;
//console.log(nuM.toFixed(1));
//console.log(nuM.toFixed(3));
//console.log((5.4123).toFixed());

// Financial Calculation
let price = 19.99;
let taxRate = 0.08;
let total = price + price * taxRate;
//console.log(`Total: $${total.toFixed(2)}`);

//Null Behaviour
//console.log(null == 0);
//console.log(null == "");
//console.log(undefined == 0);
//console.log((undefined = ""));

//console.log(null > 0);
//console.log(null === 0);
//console.log(null >= 0);

// undefined behaviour
//console.log(undefined > 0);
//console.log(undefined < 0);
//console.log(undefined == 0);

//Functions
function greet() {
  //console.log("Hello World");
}

//greet();

// Function Parameters
function greets(name) {
  //console.log(`Hello ${name}`);
}

//greet("Dhlamini");

function calculateSum(num1, num2) {
  return num1 + num2;
}

let result = calculateSum(10, 10);
//console.log(result);

// default parameters
function greetings(name = "Guest") {
  return `Hello ${"Bethuel"}`;
}

let defaultName = greetings();
//console.log(defaultName);

// Arrow Functions
const calculateArea = (width, height) => width * height;
//console.log(calculateArea(5, 3));

// Global Variable

let globalVar = "Global Variable";

function printGlobal() {
  console.log(globalVar);
}

//printGlobal();
function printLocal() {
  let localVar = "Local Variable";
  // console.log(localVar);
}

printLocal();
//console.log(localVar);

if (true) {
  var blockAv = "Block Variable";
  //console.log(blockAv);
}

//console.log(blockAv);

// Arrays
let fruits = ["apple", "banana", "orange"];

fruits[1] = "pineapple";
fruits[fruits.length] = "kiwi";
const lastItem = fruits.pop();
//console.log(lastItem);

// add beginning
fruits.unshift("mango");

// two-dimensional array
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//console.log(grid[0][1])

// Destructuring
let fruit = ["berries", "kiwi", "pear"];
let [first, second] = fruit;
//console.log(first, second);

// Destructuring with default values
let nub = [1, 2];
let [num1, num2, num3 = 4] = nub;
//console.log(num1, num2, num3);

// rest operator
const uniqueNum = [1, 2, 3, 4, 5, 6, 7, 8];
const [n1, n2, ...restNum] = uniqueNum;
//console.log(n1, n2, restNum);

let strN = "hello";

// indexOf()
let frut = ["apple", "banana", "orange", "banana"];
//console.log(frut.indexOf("banana"));

// specific index number
let colour = ["red", "green", "blue", "yellow", "green"];
//console.log(colour.indexOf("green", "3"));

// splice method
let fuit = ["apple", "banana", "orange", "mango", "kiwi"];
//console.log(`Original array: ${fuit}`);
let removedFuit = fuit.splice(2, 2);
//console.log(`Original modified Array: ${fuit}`);
//console.log(`removed array: ${removedFuit}`);

// adding items with splice
let colours = ["red", "green", "blue"];
//colours.splice(1, 0, "yellow", "purple");
//console.log(colours);

// Adding and removing items with splice
let inamba = [1, 2, 3, 4, 5];
inamba.splice(1, 2, 6, 7, 8);
//console.log(inamba);

// Remove an item when you know the index
let fruts = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruts.indexOf("orange");

if (indexToRemove !== -1) {
  fruts.splice(indexToRemove, 1);
}
//console.log(fruts);

// Clearing the array
let noMb = [1, 2, 3, 4, 5];
noMb.splice(0);
//console.log(noMb);

// includes() method
let thelo = ["apple", "banana", "orange", "mango"];
//console.log(thelo.includes("banana"));

// includes method specifying the starting index
let nombolo = [10, 20, 30, 40, 50, 30, 40];
//console.log(nombolo.includes(30, 3));

// Creating shallow array with concat
let originalArray = [1, 2, 3];
let copyArray = [].concat(originalArray);
//console.log(copyArray);
//console.log(originalArray === copyArray);

// Creating shallow array with slice
let oriArr = [1, 2, 3];
let copyOri = oriArr.slice();
//console.log(copyOri);
//console.log(oriArr === copyOri);

// Creating shallow array with spread operator
let orgArr = [1, 2, 3, 4];
let copyOrg = [...orgArr];
//console.log(copyOrg);
//console.log(orgArr === copyOrg);

// Dynamically access objects properties

const person = {
  name: "Alice",
  age: 23,
  city: "Joburg",
  job: "Engineer",
};

let propertyName = "city";
//console.log(person[propertyName]);

// Remove Properties
delete person.job;
//console.log(person);

// Destructuring
person.job = "Web Developer";
const { job, city, ...remainingProperties } = person;
//console.log(job);
//console.log(city);
//console.log(remainingProperties);

// Check if object has a property
//console.log(person.hasOwnProperty("job"));
//console.log(person.hasOwnProperty("salary"));

// Check object property with in
//console.log("age" in person);

// check object property with undefined
//console.log(person.job === undefined);
//console.log(person.gender === undefined);

const personD = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice#example.com",
    phone: {
      home: "123-4567-890",
      work: "098-765-4325",
    },
  },
};

//console.log(personD.contact.phone.work);

// Non-primitive data - dealing with reference
// change the original, also changes the copy
const orgArray = { name: "John", age: 30 };
const copiedOrg = orgArray;
orgArray.name = "Dhlamini";
//console.log(orgArray);
//console.log(copiedOrg);

// function vs object methods
// function
function greEtings(name) {
  return `Hello ${name}`;
}
//console.log(greEtings("sifiso"));

// object methods
const pername = {
  name: "Bob",
  age: 30,
  sayHello: function () {
    return `Hello ${this.name}`;
  },
};

//console.log(pername.sayHello());

// Object() constructor
const lokoObj = new Object();
//console.log(lokoObj);

const lokiObj = Object();
//console.log(lokiObj);

// Object constructor with undefined
const newObj = new Object(undefined);
//console.log(newObj);

// checking if value is an object
function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }
  if (typeof value === "object") {
    return value;
  }
  return Object(value);
}
//console.log(toObject(null));
//console.log(toObject(true));
//console.log(toObject([1, 2, 3]));

// JSON
// file .json
/*
  { 
    "name": "Alice", 
    "age": 30,
    "isStudent": false,
    "list of course": ["Mathematics", "Physics", "CS"]
  }

*/
//import data from "./example.json" with {type: "jason"}
//console.log(data.age);
//console.log(data['list of course'])

// JSON.stringify() - JS object to JSON string

const user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

const jsonStr = JSON.stringify(user);
//console.log(jsonStr);

// JSON.stringify() with replacer (second argument)

const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

//console.log(JSON.stringify(developerObj, ["firstName", "country"]));

// JSON.stringify() other optional parameter - control spacing

//console.log(JSON.stringify(developerObj, null, 2));

// JSON string to JSON object
const jsonString = '{"name": "John","age": 30, "isAdmin": true}';

const userObj = JSON.parse(jsonString);
//console.log(userObj);

// List array element in separate lines

const devStudent = ["Naomi", "Tom", "Jessica"];
const teamList = devStudent.join("\n");
//console.log(teamList);

// Create a new line before and after the list
//console.log("\nList of my books\n");

const nUm = [1, 2, 3, 4, 5];
const totalN = nUm.reduce((acc, curr) => acc + curr);
//console.log(totalN);

// Optional Chaining ?.
const userN = {
  name: "John",
  profile: {
    email: "john@example.com",
    city: "Joburg",
  },
};

//console.log(userN.profile?.phone?.number);

// Object Destructuring
const perSon = {
  name: "Alice",
  age: 30,
  jobb: "web dev",
};

const { name, jobb } = perSon;
//console.log(name, jobb);

// Default destructuring - default values

let { name: personName, age: personAge } = perSon;
//console.log(personName, personAge);

// fallback values
//let {name = 'annonymous', age=0} = perSon;

// function return objects

function createPerson(name, job) {
  return { name, job };
}

//console.log(createPerson("charlie", "developer"));

// for... of loop
const nUM = [1, 2, 3, 4, 5];
for (const num of nUM) {
  //console.log(num);
}

const nameStr = "freeCodeCamp";
for (const char of nameStr) {
  //console.log(char);
}

// Array of Objects
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 40 },
];

for (let person of people) {
  //console.log(`${person.name} is ${person.age} years old`);
}

const fRUit = {
  name: "apple",
  color: "red",
  price: 0.99,
};

for (const prop in fRUit) {
  //console.log(fRUit[prop]);
}

// for... in loop
const pERson = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Cape Town",
    state: "CA",
  },
};

for (const prop in pERson) {
  //console.log(pERson[prop]);
}

// looping through nested objects
function isObject(obj) {
  return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
}

for (const prop in pERson) {
  if (isObject(pERson[prop])) {
    for (const nestedProp in pERson[prop]) {
      //console.log(pERson[prop][nestedProp]);
    }
  } else {
    //console.log(pERson[prop]);
  }
}

// loop break statement
for (let i = 0; i < 10; i++) {
  if (i === 8) {
    break;
  }
  //console.log(i);
}

// loop continue statement
for (let i = 0; i < 10; i++) {
  if (i === 6) {
    continue;
  }
  //console.log(i);
}

// break to control flow of outer and inner loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break;
    }
    //console.log(`i:${i}, j:${j}`);
  }
}

// toString() method
const nUMm = 10;
//console.log(nUMm.toString());

const aRR = [1, 2, 3];
//console.log(aRR.toString());

const pErSon = {
  name: "John",
  age: 30,
  isStudent: true,
};
//console.log(pErSon.toString());

// Number()
const myNuM = Number("100");
//console.log(typeof myNuM);
//console.log(myNuM);

// Number() output options
//console.log(Number(""));
//console.log(Number("nanans"));
//console.log(Number(true));
//console.log(Number(false));
//console.log(Number(undefined));
//console.log(Number(null));

// Number constructor with arrays
//console.log(Number([]));
//console.log(Number([7]));
//console.log(Number([7, 2, 8, 9]));
//console.log(Number(["str"]));
//console.log(Number(["str1", "str2"]));

// Number constructor with objects
//console.log(Number({}));
//console.log(Number({ name: "jane" }));
//console.log(Number({ key: true }));

// Naming Convention
// boolean
//console.log("isLoading");
//console.log("hasPermission");
//console.log("canEdit");

// functions
function getUserData() {}
function calculateTotal() {}
function validateInput() {}

// event handler function
function handleClick() {}
function onSubmit() {}
function keyPressHandle() {}

// create array with empty slots
const sparseArray = [1, , , 4];
//console.log(sparseArray.length);

// create an empty array with fixed lots
const emptyArray = new Array(5);
//console.log(emptyArray);
//console.log(emptyArray.length);

// creates an array of the specified length with all elements initialized to undefined
// Array.from()
const fixedLengthArray = Array.from({ length: 5 });
//console.log(fixedLengthArray);
//console.log(fixedLengthArray.length);

// Creates an array of specific length and specified default values
// Array.fill()
const filledArray = new Array(3).fill(0);
//console.log(filledArray);
//console.log(filledArray.length);

// closure
function outerFunction(x) {
  let y = 0;
  function innerFunction() {
    console.log(x + y);
  }
  return innerFunction;
}

let closure = outerFunction(5);
//closure();

// closure creating private functions
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();
//console.log(counter());
//console.log(counter());

// capture variables from outer function
function multiply(c) {
  return function (y) {
    return x * y;
  };
}

let double = multiply(2);
//console.log(double(5));

// closure captures variables by reference not by value
function createIncrement() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
let increment = createCounter();
increment();

// Var variable
var iNum = 10;
var iNum = 14;
//console.log(iNum);

// Var variable accessible outside the block scope
if (true) {
  var gamaLakhe = "Bethuel";
  //console.log(gamaLakhe);
}
//console.log(gamaLakhe);

// function hoisting
sayHello();

function sayHello() {
  // console.log("Hello World!");
}
//bulisa();
const bulisa = () => console.log("Heyy");

// Module export
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// export a variable
const PI = 3.14159;
export { PI };

// importing and using the modules
//import { add, subtract, PI } from "./math.js";

//console.log(add(5,3));
//console.log(subtract(10,4));
//console.log(PI);

// import all files
// import * as Math from "./math.js"

// Argument Objects
function logArgs() {
  for (const arg of arguments) {
    //console.log(arg);
  }
}

logArgs(1, 2, 3, 4);

function getArg() {
  return arguments[1];
}

//console.log(getArg(2, 4, 6)); // 4

// getting number of arguments used when calling a function
function getArgs() {
  return arguments.length;
}

//console.log(getArgs(1, 2, 3));
//console.log(getArgs(2, 3));

// Arguments object converted into array
function hasCat() {
  return [...arguments].includes("cat");
}

//console.log(hasCat("dog", "cat", "mouse"));
//console.log(hasCat("dog", "chicken", "horse"));

// Rest Parameters vs Arguments Object
function loggArgs(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

//loggArgs(1, 2, 3, 4, 5);

// rest parameter place as the last arguments
function exampleFunction(a, b, ...restOfArgs) {
  ///code
}

// using Rest parameter vs arguments object
function hasCaat(...arg) {
  return arg.includes("cat");
}

//console.log(hasCaat("dog", "chicken", "cat"));
//console.log(hasCaat("dog", "chicken", "horse"));

// Callback
// forEach

let NoMbolo = [1, 2, 3, 4, 5];
NoMbolo.forEach(function (number) {
  //console.log(number * 2);
});

// call back using arrow function
NoMbolo.forEach((number, index, array) => {
  //console.log(`Element ${number} is at index ${index} in array [${array}]`);
});

// Higher Order Function
function operateOnArray(arr, operation) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }
  return result;
}
function doubled(x) {
  return x * 2;
}

let doubleNumber = operateOnArray(NoMbolo, doubled);
//console.log(doubleNumber);

// factories
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

let doublee = multiply(2);
let triple = multiply(3);
//console.log(doublee(5));
//console.log(triple(4));

// Map

const nUmB = [4, 8, 12, 16, 20];
const doubling = nUmB.map((num) => num * 2);
//console.log(doubling);

// Map callback function arguments (3 arguments)
// first argument - current element

const nUmbErs = nUmB.map((element) => {
  //console.log("Element", element);
  return element * 3;
});

//console.log(nUmbErs);

//Second Argument - index of current element
const nUMbErs = nUmB.map((element, index) => {
  //console.log(`Element: ${element}`);
  //console.log(`Index: ${index}`);
  return element * 4;
});

//console.log(nUMbErs);

const nUMBers = nUmB.map((element, index, array) => {
  //console.log(`Element: ${element}`);
  //console.log(`Index: ${index}`);
  //console.log(`Array: ${array}`);
  return element * 2;
});

//console.log(nUMbErs);

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nuMero = numero.filter((num) => num % 2 === 0);
//console.log(nuMero);

// Reduce Method
const nummb = [1, 2, 3, 4, 5];
const nummSum = nummb.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(nummSum);
