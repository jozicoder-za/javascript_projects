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
let x = 10;

if (true) {
  let x = 20;
}

console.log(x);
