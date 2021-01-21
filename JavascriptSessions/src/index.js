// document.addEventListener("DOMContentLoaded", () => {


//     console.log("Best way to put Javascript");


// })

console.log("second best and the most accepted way ");

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