// global scope

var name = "Shazan"

console.log(name)

function func(){
    console.log(name)
}

func()

// local scope

// function f(){
//     var a =10  
//     console.log(a)
// }

// f()
// console.log(a)

//block scop

{
    let x =10
    console.log(x)
}

console.log(x)