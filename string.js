// String :-


let name = "Shazan"

let city = "Porbandar"

console.log(typeof(name),name)
console.log(typeof(city),city)

// Accessing character based on idex

console.log(name[3])

// immutable

name[0]="s"
console.log(name)

// finding th length of the string

console.log(name.length)

let f_name ="Shazan"
let l_name =" Suria"

let full_name =f_name.concat(l_name)
console.log(full_name)

console.log(f_name + l_name)

// convrt to uppercase

console.log(full_name.toUpperCase())

// character at any index

console.log(full_name.charAt(3))

//Slicing

console.log(full_name)
console.log(full_name.slice(2))
console.log(full_name.slice(2,5))
console.log(full_name.slice(-5))
console.log(full_name.slice(-5,-1))

// index of

console.log(f_name.indexOf('a'))

// trim
let n = "   ABc   "
console.log(n)
console.log(n.trim())

// split

console.log(full_name.split(" "))