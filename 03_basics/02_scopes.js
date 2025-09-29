// var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    

}
// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "Anas"

    function two(){
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website);

    // two()
    
}
// one()

if (true){
    const username = "Anas"
    if (username === "Anas"){
        const website = " youtube"
        // console.log(username) + youtube;
    }  
    // console.log(website);
     
}

// console.log(username);


// ++++++++++++++++++++ interesting +++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}

// addone(5)

addTwo(5)
const addTwo = function(num){
    return num + 2
}

// addTwo(5)