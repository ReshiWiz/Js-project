//----------------------------Task-1------------------------------------------------------------/
// 1 => Display message as 'Welcome to JavaScript' using alert(),console.log,and document.write()

alert("Welcome to JavaScript");
console.log("Welcome to JavaScript");
document.write("Welcome to JavaScript");
//-------------------------------Task-2------------------------------------------------------------//

//2 => Show alert as 'This os from external file JS file.
alert("This is external JavaScript");

//-------------------------------Task-3------------------------------------------------------------//

// 3=> declare tje following variables
let variables = {
  // Adding the variable
  userId: "C2S0411RY",
  firstName: "Jeeva",
  lastName: "wiz",
  password: 11111111,
  email: "wiz@74.yahoo.com",
  gender: "Male",
  age: 22,
};
// Assigning the variables
const accountCreated = variables;
//Displaying the variables in console,window,alert

// outPut =>
// const accountCreated = Object.entries(variables);
console.log(accountCreated);
alert(variables);
document.write(accountCreated);

//-------------------------------Task-4------------------------------------------------------------//
//  4=> create the variables for storing the product details with appropriate variable names and display the result in DOM

// declaring the variables
const Product_variables = {
  five_Star: "thirty",
  dairy_Milk: 60,
  milky_Bar: 30,
  dark_fantasy: 60,
  park: 20,
};
// console the values

console.log(Product_variables);
document.write(Product_variables);
document.getElementById("span").innerText = Object.keys(Product_variables);
let shopping = Object.keys(Product_variables);
document.getElementById("span").innerText = shopping;

// JSON method is used to call all the product variables

let myString = JSON.stringify(Product_variables);
document.getElementById("span").innerText = myString;

const user = () => {};

document.body.myData = {
  names: "jeeva",
  class: "A",
};
document.write(document.body.myData.names);

//-------------------------------Task-5------------------------------------------------------------//
//  5 => create a function named user() with properties userId.firstName,lastName,password,
//email,gender,accountCreated.Call the function user() by passing the value for userID,

// function to user info
function user_1() {
  user_1.usedId = "IOD72C0";
  user_1.firstName = "jeeva";
  user_1.lastName = "wiz";
  user_1.password = 123456;
  user_1.email = "jeeva@123.gami.com";
  user_1.gender = "M";
  user_1.age = 22;
}
// log all the user_1 Info in console
user_1();
console.log(user_1.usedId);
console.log(user_1.firstName);
console.log(user_1.lastName);
console.log(user_1.password);
console.log(user_1.email);
console.log(user_1.gender);
console.log(user_1.age);

// Calling all keys values in one function to console

function display() {
  let keys = Object.entries(user);
  console.log(keys);
}
display();

//-------------------------------Task-6------------------------------------------------------------//

// function expression  used to user info
let accountInfo_1 = function (user) {
  user.DusedId = "IOD72C0";
  user.firstName = "jeeva";
  user.lastName = "wiz";
  user.password = 123456;
  user.email = "jeeva@123.gami.com";
  user.gender = "M";
  user.age = 22;
};
console.log(accountInfo_1);
let store = accountInfo_1;
console.log(store);
// accountInfo_1(user)
// console.log(accountInfo_1(user));

//-------------------------------Task-7------------------------------------------------------------//

// arrow function for account info
let accountInfo_2 = () => {
  return {
    DusedId: "IOD72C0",
    firstName: "jeeva",
    lastName: "wiz",
    password: 123456,
    email: "jeeva@123.gami.com",
    gender: "M",
    age: 22,
  };
};
// console.log(accountInfo_2();

console.log(accountInfo_2());
