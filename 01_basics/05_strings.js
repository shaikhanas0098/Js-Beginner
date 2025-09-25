const name = "Mohammad Anas"
const repoCount = 20

// console.log(name + repoCount); it is not recommended because it is very old way.

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); // It is recommended.


const gameName = new String ('Anas-rc-hc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(0,4)
console.log(anotherString);


const newStringOne = "     Anas    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://Anas.com/Mohammad%20Anas"
console.log(url.replace('%20', '-'));
console.log(url.includes('Anas'));


console.log(gameName.split('-'));












