document.addEventListener("DOMContentLoaded", () => {


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



    // 26thJan2021

    // EventListeners
    // AddEventListener

    // Syntax
    // Target.addEventListener("event", function)
    // Target.addEventListener("event", function)




    // let demo1 = document.querySelector(".demo1");

    // let count = 0

    // function toggleClassFunction() {
    //     demo1.classList.toggle('BGCheck')
    //     count++
    //     console.log(count);
    //     if (count > 9) {
    //         demo1.removeEventListener("click", toggleClassFunction)
    //     }
    // }

    // demo1.addEventListener("click", toggleClassFunction);

    // Query Selectors

    // let demo2 = document.querySelector(".demo1")

    // // console.log(demo2);

    // let allQuerySelector = document.querySelectorAll(".demo1")
    // let IDExample = document.getElementById("AELD");
    // let ClassExample = document.getElementsByClassName("BGCheck");

    // console.log(allQuerySelector);
    // console.log(IDExample);
    // console.log(ClassExample);

    // MATH

    // Math.Random
    // --> Function
    // --> Returns and floating point number b / w 0 and 1
    // console.log(Math.random());



    // Math.floor
    // --> function
    // rounds a decimal/float down to nearest whole integer
    // console.log(Math.floor(1.2));

    // Math.ceil
    // --> function
    // rounds a decimal/float up to nearest whole integer
    // console.log(Math.ceil(1.2));


    // let arr = ["Swiss", "Scotland", "Finland", "Sweden", "Nainital"];

    // const randomNumber = Math.random() * arr.length;

    // const index = Math.floor(randomNumber);

    // console.log("Today I am visiting--> " + arr[index]);



    // Date

    // const today = new Date();

    // const date = today.getDate();
    // console.log(`today's date--> ${date}`);

    // const day = today.getDay();
    // console.log(`today's day--> ${day}`);

    // const fullYear = today.getFullYear();
    // console.log(`fullYear--> ${fullYear}`);

    // const hours = today.getHours();
    // console.log(`hours--> ${hours}`);

    // const BdayShahank = new Date("Thursday, February 25, 2021 11:59:59 PM");

    // const mlstoBdayS = BdayShahank - today;

    // const minutes = mlstoBdayS / 60000

    // console.log(minutes);

    // let countdowntimer = document.querySelector("#bdayshahank");


    // countdowntimer.innerText = Math.round(minutes);

    // 28th Jan 2021
    // DOM Manipulations

    // Adding Elements To The DOM

    // 1. append
    // 2. appendChild

    // let blocklevel = document.querySelector("#domm")
    // console.log(blocklevel);

    // syntax to append/child

    // target.append("hellow world")
    // target.append("node")

    // block.append("Hello World. ")



    // create elements to add 
    // const body = document.body;
    // const div = document.createElement("div")
    // body.append(div)

    // Modifying element text 

    // const blockelement = document.querySelector("#domm")

    // console.log(blockelement.textContent);
    // console.log(blockelement.innerText);

    // Modifying HTML inside the elements / nodes

    // const body = document.body;
    // const div2 = document.createElement("div")

    // not to be used because security risk
    // div2.innerHTML = "<h1>We made this</h1>"
    // blocklevel.appendChild(div2);

    //  safe way of modifying inside element/node


    // const headingNode = document.createElement("h1");
    // headingNode.innerText = "This is the new removal candidate";

    // div2.append(headingNode);
    // body.append(div2)

    // console.log(div2);

    // Remove element from dom 

    // first way of removing
    // target.remove()
    // div2.remove();

    // second way of removing
    // target.removeChild(node)
    // body.removeChild(div2)

    // Modifying attributes of an element

    // accessing attribute
    // target.getAttribute("attributeName");

    // console.log(blocklevel.getAttribute("title"));

    // blocklevel.setAttribute("title", "We made this from the JS"); changes the attribute if present
    // blocklevel.setAttribute("random", "does it show"); creates the attribute if absent
    // blocklevel.removeAttribute("title") removes the attribute

    // console.log((blocklevel.dataset));
    // const Manish = {
    //     firstName: "Manish"
    // }

    // Manish.lastName = "Kamti"

    // console.log(Manish);

    // blocklevel.dataset.lastName = "Kamti"

    // console.log((blocklevel.dataset));

    // MANIPULATE STYLES 

    // target.style.cssProperty = "value"

    // blocklevel.style.color = "red"
    // blocklevel.style.fontSize = "24px"


    // MANIPULATE CLASSES

    // add classes

    // syntax
    // target.classList.add("class name")
    // console.log(blocklevel.classList);

    // blocklevel.classList.add("changingBG");
    // blocklevel.classList.remove("changingBG");

    // blocklevel.classList.toggle("changingBG");
    // blocklevel.classList.toggle("BGRED");

    // Classes do NOT exist in JS before ECMA2015. 
    // As per the ECMA2015 or ES6 standards, class keyword is a syntactical sugar

    // class ghost {
    //     constructor(ghostName, ghostColor, ghostStartingPosition) {
    //         this.name = ghostName;
    //         this.color = ghostColor;
    //         this.position = ghostStartingPosition
    //     }
    // }

    // let first = new ghost("Joker", "black", 1);
    // let second = new ghost("Captain Marvel", "Green", 3);
    // let third = new ghost("Vamp", "red", "TEN");

    // console.log(first);
    // console.log(second);
    // console.log(third);


    // Timer functions

    // --> setTimeout
    // --> setInterval

    // syntax
    // timingfunction(handlerfunction, timeInMilliseconds);


    // setTimeout(() => console.log("Adiya and Manish's joint effort to write this function"), 5000)

    // var count = 0

    // var thisPings = () => {
    //     console.log("Pushpinder's function");
    //     // count++
    //     // if (count >= 7) {
    //     //     clearInterval(timerID)
    //     // }
    // };

    // var timerID = setInterval(thisPings, 1000 * 0.5);
    // setTimeout(() => clearInterval(timerID), 7000);

    // console.log(checkHoist);
    // console.log(willThisHoist);
    // howAboutThis();


    // Hoisting

    // var checkHoist = "No, this isn't hoisted yet. --> 1st attempt"

    // var willThisHoist = function () {
    //     console.log("I'm not sure, let's check --> 2nd attempt");
    // }

    // function howAboutThis() {
    //     console.log("Checking the status --> 3rd attempt")
    // }


    // Closures

    // --> a function that can access variable outside it's scope 

    // var firstName = "Aditya"

    // function sayMyName() {
    //     var lastName = "Jain"
    //     console.log("Hello, my name is " + firstName + " " + lastName);
    // }

    // console.dir(sayMyName)


    // var check1 = 10;

    // var addFunc = function () {
    //     var innerVal = 25;
    //     return check1 + innerVal;
    // }

    // console.dir(addFunc)





    // function foo() {
    //     var b = 1;
    //     function inner() {
    //         return b;
    //     }
    //     return inner;
    // }
    // var get_func_inner = foo();

    // console.log(get_func_inner());

    // console.dir(get_func_inner)



    // --> it serves as a runtime memory
    // --> it is used as cache (memoization)

    // var vals = [];
    // for (let i = 0; i < 3; i++) {

    //     vals[i] = function () {
    //         console.log("check this out --> " + i);
    //     }

    // }

    // first loop
    //  VAR 
    // i = 0


    // second loop
    // i = 1


    // third loop
    // i = 2

    // var i = 3


    // for (var j = 0; j < 5; j++) {
    //     vals[j]()
    // }


    // var vals = [];
    // for (let batchConfusion = 0; batchConfusion < 3; batchConfusion++) {

    //     vals[batchConfusion] = function () {
    //         console.log("check this out --> " + batchConfusion);
    //     }

    // }

    // console.clear()

    // console.log(`this is what we are checking for-->  ${batchConfusion}`);



    // vals[0]();
    // console.dir(vals[0]);
    // vals[1]();
    // console.dir(vals[1]);
    // vals[2]();
    // console.dir(vals[2]);






    // 

    // let str = '';

    // for (let i = 0; i < 9; i++) {
    //     str = str + i;
    // }

    // console.log(str);

    // console.clear();

    // var batch = ["Manish", "Honnaraju", "Pushpinder", "Rajat", "Sahil"];
    // var students = [];
    // for (var i = 0; i < batch.length; i++) {
    //     // console.log(batch[i]);
    //     // var studentName = batch[i]
    //     students[i] = i;

    // }

    // console.log(students);


    // var test1 = function (x) {
    //     console.log("I am being logged with this value--> " + x);
    // }

    // test1(2)

    // console.clear();

    // let candidate = "Rajat"
    // console.log(candidate);
    // {
    //     let candidate = "Manish"
    //     console.log(candidate);
    // }

    // console.log(candidate);

    // SWITCH CASE

    // const veggie = 'Papayas';
    // switch (veggie) {
    //     case 'Oranges':
    //         console.log('Oranges are $0.59 a pound.');
    //         break;
    //     case 'Mangoes':
    //     case 'Papayas':
    //         console.log('Mangoes and papayas are $2.79 a pound.');
    //         break;
    //     default:
    //         console.log(`Sorry, we are out of ${veggie}.`);
    // }

    // continue

    // for (let checkVar = 0; checkVar < 6; checkVar++) {
    //     if (checkVar > 3) {
    //         continue;
    //     }
    //     console.log(checkVar);
    // }

    // Keys

    //     var round = document.querySelector(".circle")

    //     console.log(round);


    //     function handlerFunction(event) {
    //         if (event.key === "ArrowLeft") {
    //             console.log("You Pressed Left");
    //         }
    //         else if (event.key === "ArrowRight") {
    //             console.log("You Pressed Right");
    //         }
    //         else if (event.key === "ArrowUp") {
    //             console.log("You Pressed Up");
    //         }
    //         else if (event.key === "ArrowDown") {
    //             console.log("You Pressed Down");
    //         }
    //     }


    //     round.addEventListener('keydown', handlerFunction);

    // Promises

    function myDisplayer(some) {
        document.getElementById("demo").innerHTML = some;
    }


    let myPromise = new Promise(function callBack1(resolve, reject) {
        let x = 0;

        if (x == 0) {
            resolve("OK");
        } else {
            reject("Error");
        }
    });

    myPromise.then(
        function (value) { myDisplayer(value); },
        function (error) { myDisplayer(error); }
    );


    // Promise.then((err, result) => {
    //     if (err) {
    //         console.log(err);
    //         1. get reference to error logger
    //         2. error logger display - inline
    //         3. get reference to sign in span
    //         4. when span is clicked, call a function 
    //         5. In that function, call the sign in API

    //     }
    //     // route to homepage
    // })


    // CallBack Functions


    // Concept
    // // Outer Function
    // const OuterFunction = function (callBackFunc) {
    //     callBackFunc()
    // }


    // // Callback Function
    // const callBackFunc = function () {
    //     console.log("CallBack");
    // }



    // OuterFunction(callBackFunc);


    // practical usecase

    // const login = function (resolveLogin) {
    //     // call api
    //     // api returns a result


    //     resolveLogin(result)
    // }


    // // Callback Function
    // const resolveLogin = function (result) {
    //     if (result == ok) {
    //         // send user to homepage
    //     }
    //     // show error to user
    // }



    // outerFunction(callback1(){
    //     
    //     callBack1( callback2, callback3 ){
    //         
    //         if(true){
    //             callback2(){

    //             }
    //         } 
    //         callback3(){

    //         }
    //     }
    // })



    // let outerFunction = function () {
    //     /**Function statements */
    //     callback1();
    // }

    // outerFunction()
    //     .then(callback1)
    //     .then(callback2)
    //     .then(callback3)


    // const URL = "https://jsonplaceholder.typicode.com/posts";


    // console.log(fetch(URL));

    // fetch(URL) /**returns a promise */
    //     .then(function (response) {
    //         return response.json() /**returns a promise */
    //     }).then(function (result) {
    //         console.log(result);
    //         console.log(result[4].title);
    //     })










    // async/await

    // try {
    //     await function () {
    //         let return1 = async outerFunction();
    //         let return2 = async callback1();
    //     }
    // } catch (error) {
    //     console.log(error);
    // }




})