// no args no return

var hello = () => console.log("Hello arrow functions")

hello()

// with args and return

var sum = (a,b) => a+b;

console.log(sum(4,5))

// function with parameters, multiple lines of function body

var pro = (a,b) =>{
    console.log("sum :-")
    return a+b
} 

// there is no argument feature

console.log(pro(6,7))

// IIFE :- Immediately Invoked Function Expression

// it work only when there is no other function is define it runs while declaring

// (function(){
//     console.log("Hello IIFE")
// })
