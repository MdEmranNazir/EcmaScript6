// // ES5-compatible code
// let prop1 = 'hello';
// let prop2 = 'word';
// var myObject = {
//   prop1: prop1,
//   prop2: prop2,
//   output: function() {
//     console.log(this.prop1 + ' ' + this.prop2);
//   }
// };

// myObject.output();

// ES6-compatible code

// let prop1 = 'hello';
// let prop2 = 'word';
// var myObject = {
//    prop1,
//    prop2,
//   output(){
//     console.log(this.prop1 + ' ' + this.prop2);
//   }
// };

// myObject.output();

// ES5 code
// var
//   a = 1, b = 2, c = 3;
//   obj = {
//     a: a,
//     b: b,
//     c: c
//   };
//   console.log(`A: ${obj.a +obj.b *obj.c}, B: ${obj.b},C: ${obj.c}`);
  

// const a = 1,b = 2,c = 3;
// obj = {
//   a,b,c
// }
// console.log(`A: ${obj.a +obj.b *obj.c}, B: ${obj.b},C: ${obj.c}`);


////Object Method Definition Shorthand

// ES5 code
// var lib = {
//   sum:  function(a, b) { return a + b; },
//   mult: function(a, b) { return a * b; }
// };

// console.log( lib.sum(2, 3) );  // 5
// console.log( lib.mult(2, 3) ); // 6

//es6 code
// let lib = {
//   sum(a,b){return a + b;},
//   mul(a,b){return a * b;},
// };
// console.log(lib.sum(2,9));
// console.log(lib.mul(2,9));

// ES6 code   

let value = {
  sum:(a,b) => (a+b),
  mul:(a,b) => (a*b),
}
console.log(value.sum(52,23));
console.log(value.mul(52,23));

