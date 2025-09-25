// Primitive

// 7 Types : string, Number, Boolean, Null, Undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const Id = Symbol ('123')
const anotherId = Symbol ('123')
console.log(Id === anotherId);




// Reference (Non Primitive)

// Array, Objects, Functions

const heroes = ["Spiderman", "Iron man", "Thor"];

let myobj = {
    name : "Anas",
    age : 20
}

const myFunction = function () {
    console.log("Hello World");
    
}



console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof heroes);
console.log(typeof anotherId);



