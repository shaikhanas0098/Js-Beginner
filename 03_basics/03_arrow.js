const user = {
    username: "Anas",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`)
        // console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function Anas(){
//     let username = "Sam"
//     console.log(this.username);
// }

// Anas()

// const Anas = function () {
//     let username = "Sam"
//     console.log(this.username);
// }

const Anas = () => {
    let username = "Anas"
    console.log(this);
    
}

// Anas()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Anas"})


console.log(addTwo(4,5))


