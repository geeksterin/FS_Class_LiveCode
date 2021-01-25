// document.addEventListener("DOMContentLoaded", () => {


//     console.log("Best way to put Javascript");


// })

// console.log("second best and the most accepted way ");

// var x = 1; --> number

// var x = "sarthakbatra"; --> string

// var x = true; --> boolean

// var x = function () {
//     console.log("checking the data type");
// } --> function

// var x = ["first", "second"] --> object

// var x;

// console.log(typeof x)

// var user = "Sarthak Batra"

// function getName() {
//     let user = "Manish Kamti";

//     console.log("my name is " + user)
// }

// console.dir(getName)


// getName();


// var and let both are valid in the blocks in which they are defined, however
// if the value of var is changed inside a block, it can carry it upwards to the block it is defined in
// Let does not carry the value changed outside the block

// function varAndLet() {
//     let x = 2
//     {
//         let x = 7
//         console.log("Inside the block--> " + x);
//     }
//     console.log("Value in between first scope and second scope--> " + x);
//     {
//         let x = 8
//         console.log("Second Block Value--> " + x);
//     }
//     console.log("Outside the block--> " + x);
// }

// varAndLet();


// function constDemo() {
//     const x = "Rajat"
//     const x = "Manish"
// }

// conditional expressions

// if (truthy) {
//     // first expression
// } else {
//     // falsey second expressions
// }

// Falsey resolutions in Javascript
// 0
// -0
// 0n
// ""
// null
// NaN
// undefined

// if (-0) {
//     console.log("first expression")
// } else {
//     console.log("second expression");
// }

// Show falsey for all remaining values: HW

// if ("Sarthak") {
//     console.log("This will print for truthy");
// }

// Operators

// Arithmetic
// Assignment
// Comparison
// Logical
// Ternary

// Arithmetic

// Modulus
// console.log("Modulus => divides first oeprand with second operand and returns the remainder ")
// console.log(5 % 3)

// Increment
// let checkVar = 5;

// checkVar++;

// console.log(checkVar);

// Decrement
// let checkVar = 5;

// checkVar--;

// console.log(checkVar);

// // Unary Negation
// let checkVar = 5;

// console.log(-checkVar);

// Unary Plus
// let checkVar = "5";
// console.log(checkVar);
// console.log(+checkVar);

// let checkVar = -5;

// console.log(+checkVar)
// let checkVar = "a";
// console.log(+checkVar);


// Exponential

// let checkVar = 5;

// console.log(checkVar ** 2)

// Assignment Operators

// Assignment
// let x



// console.log(x)

// Addition Operator
// x += 5

// console.log(x);

// Negative Operator
// x -= 5

// console.log(x);

// Multiplication Operator

// x *= 5;
// console.log(x)

// Division
// x /= 5
// console.log(x);


// Remainder


// x %= 5
// console.log(x);


// Exponential

// x = 6;
// x **= 5
// console.log(x);


// Comparison Operators
// Equal

// x = 20
// console.log(x == "20");

// Not Equal
// console.log(x != "20");

// Deeply Equal

// console.log(x === "20");

// Strict Not Equal

// console.log(x !== "20")

// Greater than 

// console.log(20 > 10);

// Greater than Equal to 

// console.log(20 >= 10);

// Less than 

// console.log(100 < 120);

// Less than Equal to 

// console.log(10 <= 20);

// Logical Operators


// const fruits = ["apple", "banana", "grape"]
// AND
// if (fruits.includes("apple") && fruits.includes("banana")) {
//     console.log("Both fruits exist")
// }
// OR

// if (fruits.includes("ball") || fruits.includes("banana")) {
//     console.log("at least one exists")
// }
// NOT

// if (!fruits.includes("coconut")) {
//     console.log("coconut does not exist")
// }

// Ternary Operator

// let x = false

// if (x == true) {
//     console.log("case 1");
// } else {
//     console.log("case 2");
// }

// x == true ? console.log("case 1") : console.log("case 2");

// LOOPS

// for
// for (initialization; condition; increment / decrement) {
//     // code to iterate
// }

// for (let i = 0; i < 10; i++) {
//     if (i == 0 || i == 1) {
//         console.log(i + " fruit in the basket")
//     } else {
//         console.log(i + " fruits in the basket");
//     }
// }

// Arrays

// let stringsArray = ["Prashant", "Manish", "Honnaraju", "Pushpinder", "Rajat"];

// let numberArray = [23, 4, 5, 67, 7];

// let booleanArray = [true, true, false, true];

// let mixedArray = [23, "Honnaraju", true];
// console.log(stringsArray);
// console.log(mixedArray[0]);
// console.log(mixedArray[1]);
// console.log(mixedArray[2]);
// console.log(stringsArray.length);
// console.log(typeof mixedArray)

// for (let i = 0; i < stringsArray.length; i++) {
//     console.log(stringsArray[i])
// }

// let movies = ["Chak De", "Sapiens", "The White Tiger", "Iron Man", "Sapiens", "3 idiots", "Sapiens"];

// let count = 0;
// for (let i = 0; i < movies.length; i++) {
//     if (movies[i] == "Sapiens") {
//         count++;
//     }
//     console.log(count);
//     console.log(movies[i])
// }

// Objects

// key value pair
// const batch = [
//     {
//         name: "Prashant",
//         lastName: "Kumar",
//         favMovie: "Chak De! India",
//         bollywood: true
//     },
//     {
//         name: "Manish",
//         lastName: "Kamti",
//         favMovie: "The White Tiger",
//         bollywood: false
//     },
//     {
//         name: "Honnaraju",
//         lastName: "R",
//         favMovie: "Iron Man",
//         bollywood: false
//     }]

// console.log(batch);

// for (let i = 0; i < batch.length; i++) {
//     if (batch[i].bollywood == false) {
//         console.log("This is not a bollywood movie")
//     }
// }

// functions

// function functionName(args, params) {
//     write the instructions
// }
// 
// let square = number => console.log(number ** 2);

// Arrow Functions

// const Honnaraju = document.querySelector("button");

// console.log(Honnaraju);

// function interact() {
//     console.log("Interact with me, class");
// }

// const interact = function () {
//     console.log("Another type of writing a function");
// }

// let interact = () => console.log("And yet another type of function");


// Honnaraju.addEventListener("click", interact);

// While Loop

// --> Runs a piece of code untill the condition inside the while block is 

// let i = 0;

// while (i < 10) {
//     if (i == 0 || i == 1) {
//         console.log(i + " fruit in the basket");
//     } else {
//         console.log(i + " fruits in the basket");
//     }
//     i++;
// }

// Javascript Object Functions
// Length

// let str = "hello"

// console.log(str.length);

// let arr = ["one", "two", "three", "four"];

// console.log(arr.length);

// let arrOfObjs = [
//     {
//         name: "Sonam",
//     },
//     {
//         name: "Prashant",
//     },
//     {
//         name: "Dixita",
//     },
//     {
//         name: "Pushpinder",
//     },
//     {
//         name: "Manish",
//     },
// ]
// console.log(arrOfObjs.length);


// CONCAT

// -->Joins one array/string with another and returns new array/string`
// --> Non destructive (does not mutate the initial arrays/strings)
// --> returns and new array / string which can be captured and manipulated in a variable

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

// str1 = "Hello, my name is "
// str2 = "John Doe"

// console.log(str1.concat(str2));

// JOIN
// --> Join puts all the elements of an array and returns it as a string
// --> Non destructive (does not mutate the initial arrays)
// --> returns and new array which can be captured and manipulated in a variable
// --> The seperator can be passed as the constructor in the join funtion. It accepts a string seperator. In the absence of a seperator, it defaults to a comma.

// let arrStr = ["alpha", "bravo", "charlie", "delta"]

// let singleString = arrStr.join(" ")

// console.log(singleString);

// SHIFT
// --> removes the first element of an array
// --> DESTRUCTIVE. 
// --> Changes the initial array

// let checkArray = ["Dravid", 12, "Dhoni", 7, "Virat Kohli", 9]
// console.log(checkArray.length);
// console.log(checkArray.shift());
// console.log(checkArray.length);

// POP
// --> removes the last element of an array
// --> DESTRUCTIVE
// --> Changes the initial array

// let checkArray = ["Dravid", 12, "Dhoni", 7, "Virat", 9, "This should be popped"]

// console.log(checkArray.length);
// console.log(checkArray.pop());
// console.log(checkArray.length);

// UNSHIFT
// --> adds element(s) at the beginning an array
// --> DESTRUCTIVE
// --> Changes the initial array
// --> The element(s) that you wish to add at the beginning of the array must be passed as comma seperated values inside the unshift function constructor


// const array1 = [1, 2, 3];
// console.log(array1.unshift(4));
// console.log(array1);

// PUSH 
// --> Adds element(s) at the end of an array
// --> DESTRUCTIVE
// --> Changes the initial array
// --> The element(s) that you wish to add at the end of the array must be passed as comma seperated values inside the unshift function constructor

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count);

// console.log(animals);

// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);


// SLICE
// NOT DESTRUCTIVE
// --> The element(s) that you wish to add at the end of the array must be passed as comma seperated values inside the unshift function constructor
// Slice creates and returns a new array with start and end index that you pass in the constructor of the slice function.// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));



// arr.splice("INDEX WHERE WE HAVE TO DO OPERATION","NO OF ELEMENTS TO BE REMOVED","ELEMENTS VALUE TO BE ADDED {OPTIONAL}")//DESTRUCTIVE
//return the deleted element in an array const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months)


// FOREACH
// --> runs a function for each element of the array function
// --> returns undefined
// NON DESTRUCTIVE

// let arr = ["something", "five", "delhi", "kolkata", "mumbai"]

// console.log(arr.length);
// arr.forEach(
//     elementOfTheArray => console.log(elementOfTheArray)
// )

// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i].length)
// }


// SPLIT