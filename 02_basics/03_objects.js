// singleton object
// Object.creates

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Anas",
    "full name": "Mohammad Anas",
    [mySym]: "mykey1",
    age: 20,
    location: "Lucknow",
    email: "Anas@gmail.com",
    isLoggedIn: false,
    lastLoginindDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Anas@chatgpt.com"
// Object.freeze(JsUser) // freeze the object so that it cannot be modified
JsUser.email = "anas@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
    
}

console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());



 