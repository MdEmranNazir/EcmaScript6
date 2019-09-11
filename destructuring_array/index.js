//Destructuring Assignment in ES6- Arrays

//..ES5 code

// var introduction = ["Hello", "I" , "am", "Sarah"];
//     var greeting = introduction[0];
//     var name = introduction[3];

//     console.log(greeting);//"Hello"
//     console.log(name);//"Sarah"

//     //ES6...code

//     const introduction = ["Hello", "I" , "am", "Sarah"];
//     const [greeting, pronoun] = introduction;

//     console.log(greeting);//"Hello"
//     console.log(pronoun);//"I"

// //AND..
// var [greeting, pronoun] = ["Hello", "I" , "am", "Sarah"];

// console.log(greeting);//"Hello"
// console.log(pronoun);//"I"

//AND...
// var greeting, pronoun;
// [greeting,pronoun] = ["Hello", "I" , "am", "Sarah"];

// console.log(greeting);//"Hello"
// console.log(pronoun);//"I"
// //AND...
// var [greeting,,,name] = ["Hello", "I" , "am", "Sarah"];

//     console.log(greeting);//"Hello"
//     console.log(name);//"Sarah"

//AND...
// var [,pronoun,,name] = ["Hello", "I" , "am", "Sarah"];

// console.log(pronoun);//"I"
// console.log(name);//"Sarah

// //AND

// var [,,,,] = ["Hello", "I" , "am", "Sarah"];

//Assigning the rest of an array
// var [greeting,...intro] = ["Hello", "I" , "am", "Sarah"];

// console.log(greeting);//"Hello"
// console.log(intro);//["I", "am", "Sarah"]

//Destructuring Assignment with Functions

function getArray() {
  return ["Hello", "I" , "am", "Sarah"];
} 
var[greeting,,pronoun] = getArray();

console.log(greeting);//"Hello"
console.log(pronoun);//"I"

//Using Default Values

var[greeting = "hi",name = "Sarah"] = ["hello","hi"];

console.log(greeting);//"Hello"
console.log(name);//"Sarah"

//Swapping Values using Destructuring Assignment

var a = 3;
var b = 6;

[{a,b}] = [{b,a}];

console.log(a);//6
console.log(b);//3

//xam..

var a = 3;
var b = 6;

[a,b] = [b,a];

console.log(a);//6
console.log(b);//3