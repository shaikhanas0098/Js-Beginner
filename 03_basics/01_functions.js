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

console.log(loginUserMessage("Anas"))
