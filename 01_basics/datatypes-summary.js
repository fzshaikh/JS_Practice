// Primitive

// 7 types : string, Number, Boolean, null, undefined, Sysbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 333453441245454512145545n;

// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["Shaktiman", "Superman", "Spiderman"];
let myObj = {
  name: "faizi",
  age: 25,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof myFunction);

// link for Reference typeof operators: https://262.ecma-international.org/5.1/#sec-11.4.3

// typeof Operator Results

// Type of val	         Result
// Undefined	=>       "undefined"
// Null	        =>       "object"
// Boolean	    =>       "boolean"
// Number	    =>       "number"
// String	    =>       "string"
// Object       =>       (native and does not implement [[Call]])	"object"
// Object       =>       (native or host and does implement [[Call]])	"function"
// Object       =>       (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".
