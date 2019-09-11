const obj = {
  name: 'emran hamed',
  email: 'emrannazir@gmail.com'
}

let {name,email} = obj;
console.log(email,name);

// function print(name,email){
//   console.log(`hello ${name}; Email: ${email}`);
  
// }

// print(name,email);

function print({name,email}){
  console.log(`hello ${name}; Email: ${email}`);
  
}

print({email,name});





