// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false; 

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Mohammad",
            lastname: "Anas"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 1,
        email: "A@gmail.com"
    },
    {
        id: 1,
        email: "A@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));


