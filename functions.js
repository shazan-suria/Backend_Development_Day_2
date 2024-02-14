// defining a functon

function hello(){
    console.log("Hello functions!")
}

hello()

function sum(a,b){
    return a+b;
}

console.log(sum(4,5))

// default argument

// function sum(a,b = 5){
//     return a+b;
// }


// arguments  :-
function func(){
    console.log(arguments)
}

func(1,2,3,4,3,2,'hello')