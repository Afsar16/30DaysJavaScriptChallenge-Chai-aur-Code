// Activity 1
// var num = 16;
// console.log(num);

// let name = "Afsar"
// console.log(name);

//Activity 2
// const flag = true;
// console.log(flag)

//Activity 3
// let int = 1; //number
// let float = 2.3; //number
// let char = 'c' //string
// let string = "my string" //string
// let bool = false; //boolean
// let obj = { //object
//     name: "Afsar", 
//     age: "22",
//     gender: "male"
// }

// let arr = [1,2,3,4,5,6]; // object

// console.log(typeof(int))
// console.log(typeof(float))
// console.log(typeof(char))
// console.log(typeof(string))
// console.log(typeof(bool))
// console.log(typeof(obj))
// console.log(typeof(arr))

// console.log(Array.isArray(obj)); // false
// console.log(Array.isArray(arr)); // true

//Activity 4
// let value = 123;
// let value = 321;// cannot do this bcoz its let , in var it is possible
// console.log(value)
// value = 321;
// console.log(value)


//Activity 5
// const constValue = 1234;
// console.log(constValue)
// constValue = 4321; // can not change const values
// console.log(constValue)// TypeError: Assignment to constant variable.


//feature request 
// Declaring variables of different data types
let str = "Hello, World!";      // String
let num = 42;                   // Number
let bool = true;                // Boolean
let obj = {name: "Afsar"};      // Object
let arr = [1, 2, 3, 4, 5];      // Array
let undef;                      // Undefined
let n = null;                   // Null
let sym = Symbol('symbol');     // Symbol
let bigInt = BigInt(9007199254740991); // BigInt

// Logging value and type of each variable
console.log(`str: ${str}, type: ${typeof str}`);
console.log(`num: ${num}, type: ${typeof num}`);
console.log(`bool: ${bool}, type: ${typeof bool}`);
console.log(`obj: ${JSON.stringify(obj)}, type: ${typeof obj}`);
console.log(`arr: ${arr}, type: ${typeof arr}`);
console.log(`undef: ${undef}, type: ${typeof undef}`);
console.log(`n: ${n}, type: ${typeof n}`);
console.log(`sym: ${sym.toString()}, type: ${typeof sym}`);
console.log(`bigInt: ${bigInt}, type: ${typeof bigInt}`);

// Reassignment Demo 
// Demonstrating let
let a = 10;
console.log(`Initial value of a: ${a}`); // 10
a = 20;
console.log(`Reassigned value of a: ${a}`); // 20

// Demonstrating const
const b = 30;
console.log(`Initial value of b: ${b}`); // 30
try {
    b = 40; // This will cause an error
} catch (error) {
    console.log(`Error when trying to reassign b: ${error.message}`);
}

// Demonstrating const with objects
const obj1 = {name: "Afsar"};
console.log(`Initial object: ${JSON.stringify(obj1)}`);
obj1.name = "Updated Afsar"; // Allowed, since the reference is not changed
console.log(`Updated object: ${JSON.stringify(obj1)}`);

try {
    obj1 = {name: "New Object"}; // This will cause an error
} catch (error) {
    console.log(`Error when trying to reassign obj: ${error.message}`);
}
