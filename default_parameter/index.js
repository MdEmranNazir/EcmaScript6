// let add = (a,b) => a+b;
// console.log(sqr(10));

// let sqr = (a,b=a) => a*b;
// console.log(sqr(10));
// console.log(sqr(10,5));
// console.log(sqr(4,9));

// function createA() {
//   return 5;
// }

//  function add(a = createA(), b = a*2, c = b+3) {
//   return a + b + c; 
// }

// console.log(add());

let A = () => {
  return 5;
}

let add = (a = A(), b = a*2, c = b+3) =>{
  return a + b + c; 
}
console.log(add());