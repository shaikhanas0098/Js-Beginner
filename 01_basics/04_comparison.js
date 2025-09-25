// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // The reason is that an equality check == and comparisons > < >= <= work differently. Comparison convert null to a number treating it as 0. That's why (3) null >= and (1) null >= 0 is false. 


console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

// We should avoid both of the above type conversion as a good coder, because it is very confusing.


// ===

console.log("2" === 2);
