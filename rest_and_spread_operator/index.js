Rest Operator

let sum = (...num) => {
  console.log(num);
   return num.reduce((a,b) => a+b);  
}

 let xam = sum(1,457,96,54,4,3,4);
 //sum(1,457,96,54,4,3,4);
console.log(xam);


//Spread Operator

let arr = [4,3,7,9,1,50];
console.log(arr);

console.log(...arr);
// let arr1 = [...arr];
// console.log(arr1);


const obj = {
  name: 'Emran Nazir',
  email: 'emarannazir@gmail.com'
}
const obj1 = {
  ...obj,
  name: 'Hamed',
  age: 29
}
console.log(obj1);


 