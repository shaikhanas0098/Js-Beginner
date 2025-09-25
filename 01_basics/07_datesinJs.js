// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date (2023, 0, 23)
console.log(myCreatedDate.toDateString());
let myCreatedDate2 = new Date ("2023-01-23") 
let myCreatedDate3 = new Date ("01-14-2023")    
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
// let myTimeStamp2 = new Date().getTime()
// console.log(myTimeStamp2);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})







