// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();  // for two IIFE 

((name) => { // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('Anas')
