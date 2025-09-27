function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("S");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)

// }

function addTwoNumbers(number1, number2){
    
    let result = number1 + number2
    return result
    
}

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

function loginUserMessage(username = "Zayn"){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Anas"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Anas",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Zayn",
    price: 299
})

const myNewArray = [200, 400, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
