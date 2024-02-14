const num = [1,2,3]

const [a,b,c] = [1,2,3]

console.log(a)
console.log(b)
console.log(c)

const [p,q,r] = [1,2,[3,4,5]]

console.log(p)
console.log(q)
console.log(r)

console.log("\n\n\n\n\nDestructuring in objects\n\n")

const pre = {
    age : 19,
    name : "Shazan",
    city : "Porbandar",
    course : {
        mentor : "Vishwa sir",
        batch : "Backend Developer"
    }
}

const{name,age,course : {mentor,batch}} = pre

console.log(name)
console.log(age)
console.log(mentor)

