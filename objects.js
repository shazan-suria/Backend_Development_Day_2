const user ={
    name : "Shazan",
    age : 19,
    city : "Porbandar"
}


// Assessing the data

console.log(user.name);
console.log(user['name']);

// Add a new data

// first method :- user.country ="India"

user["Country"] = "India"

console.log(user)

// deleteing object key and itself
// delete user.Country
delete user["Country"]
console.log(user)

person = {
    name : "Shazan",
    age : 19,
    course : {
        course_name : "Backend Development Course",
        Mentor : "Vishwa" 
    }
}

for(let key in person){
    console.log(key ," : ",person[key])
}

// arrray of keys 
console.log(Object.keys(person))

// array of values
console.log(Object.values(person))

// value of both key and values

console.log(Object.entries(person))

// cloning an object using assign

const new_person = Object.assign({},person)

console.log(new_person)

const new_person_1 = Object.assign({},person,{role : "Developer"})

console.log(new_person_1)