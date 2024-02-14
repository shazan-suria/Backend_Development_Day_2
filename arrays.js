// arr = [1,2,3]

// console.log(typeof(arr))

// arr1 = new Array()

// console.log(typeof arr1)

// arr =[1,2,3,4,5,6,7,8,9,87,64,57]

// console.log(arr[0])

// console.log(arr[87])

// console.log(arr[-1])

// arrays are mutable

// arr[1] =200
// console.log(arr)

arr =[1,2,3,4,5,6,7,8,9,87,64,57]

arr.push(76)

console.log(arr)

arr.push(87,98,42)

console.log(arr)


// unshift method

arr.unshift(999)

console.log(arr)

arr.unshift(99,65,33)

console.log(arr)

// pop method

console.log(arr.pop())
console.log(arr)

// shift

console.log(arr.shift())
console.log(arr)

// concat

let a1 = [1,2,3]
let a2 = [5,6]

let r = a1.concat(a2)
console.log(r)

// size of the array

console.log(arr.length)

// convert arr to string

char_arr = ['S','h','a','z','a','n',' ','S','u','r','i','a']

// join

console.log(char_arr.join())
console.log(char_arr.join(""))

console.log(typeof char_arr.toString())


// Slicing of array

arr1 = [1,2,3,4,5,6,7,8,9,10]

// console.log(arr1.slice(2))
// console.log(arr1.slice(2,7))
// console.log(arr1.slice(5,-1))
// console.log(arr1.slice(-9,-2))
// console.log(arr1.slice(2,-1))

// splicing , which change the given array

// let numb = [1,2,3,4,5]

// let removed= numb.splice(2,2)

// console.log(removed)

// console.log(numb)

// let removed= numb.splice(2,2,6,57,8)

// console.log(removed)

// console.log(numb)

// Reverse a given array

{
    let nums= [1,2,3,3,4,5]
    nums.reverse()
    console.log(nums)
}

{
    let arr = [1,2,3,43,2,19]
    console.log(arr.indexOf(19))
}

{
    let arr = [4,6,3,2,4,53]
    // arr.sort((a,b) =>a-b) for sortad array
    arr.sort((a,b) =>b-a) // for sorting in reverse sorted order
    console.log(arr)
}