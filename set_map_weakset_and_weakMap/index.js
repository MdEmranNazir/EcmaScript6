///set,map,weakset,and weakmap
/*
let myArr = [4,5,7,8,9,2,10];
let mySet = new Set(myArr);

mySet.add('400');
mySet.add({a:2,b:36});
mySet.delete('4');
//mySet.clear();
mySet.add('500');
mySet.add('600');

//console.log(mySet);
//console.log(mySet.size);

mySet.forEach((val) => {
    console.log(val);
    
})

*/

/*
let myMap = new Map([['a1','helo'],['b2','Goodboy']]);
myMap.set('c3','foo');
myMap.delete('a1')
console.log(myMap);
console.log(myMap.size);
*/

// let carWeakSet = new WeakSet();

// let car1 = {
//     make:'Honda',
//     model: 'Cvic'
// }
// carWeakSet.add(car1);
// console.log(carWeakSet);

// var ws = new WeakSet();
// var foo = {A:10,B:50};
// var bar = {c:30,d:60};

// ws.add(foo);
// ws.add(bar);

// console.log(ws);

let myweakMap = new WeakMap();
let key1 = {
    id:1
} 
let car1 = {
    make: 'honda',
    model: 'Civic'
}
let key2 = {
    id:2
} 
let car2 = {
    make: 'honda',
    model: 'Civic'
}

myweakMap.set(key1,car1);
myweakMap.set(key2,car2);
myweakMap.delete(key1);
console.log(myweakMap);
