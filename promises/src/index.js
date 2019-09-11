// let myFristPromise = new Promise((resolve,reject) => {

//     let name = 'EmranNazir';
//     //resolve(name);
//     setTimeout(() => resolve(name),3000)

// })
// // console.log(myFristPromise);
// myFristPromise.then((name) => {
//     console.log(`we are ${name}`);
    
// })

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())  
    .then((body) => {
       // console.log(body);
       //body.map(data => console.log(data.email))
       const lis = body.map((data) => {
           let li = document.createElement('li');
           let text = `Name: ${data.name}, Email: ${data.email}`;
           let textNode = document.createTextNode(text);
           li.appendChild(textNode);

           return li;
       });

       //console.log(lis);
       lis.forEach((value) => {
           document.getElementById('mylist').appendChild(value);
           
       });
        
    })
    .catch((err) => console.log(err))

