//
// const tind = {} // this is non singleton object 

// const tinderuser = new Object() // this is single ton object 

const tinderuser ={}

 tinderuser.id= "231abc"
 tinderuser.name = "dsfdsf"
 tinderuser.userislogin =false
 
// console.log(tinderuser)

// nested object 

const regularuser = {

    email : " sfhsdbjh@gmail.com",
    fullname : { 

        userfullname : {

            firstname : "vishh",
            lastname: " dubey "

        }
      }
}


// console.log(regularuser.fullname.userfullname.firstname)


// combine object
const obj1 = { 1: "a", 2:"b" , 3:"d"}
const obj2 = { 10: "a", 12:"b" , 63:"d"}

//const obj3 = { obj1 ,obj2} // asa karne sa object ka ander object ajata ha 
//const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1,...obj2}// always use spread operator 


// console.log(obj3)

//  array ka object 

const user = [
     {
    id : 1 ,
    email : " shsfshsf@gmail.com"
},

 {
    id : 1 ,
    email : " shsfshsf@gmail.com"
},

 {
    id : 1 ,
    email : " shsfshsf@gmail.com"
},

 {
    id : 1 ,
    email : " shsfshsf@gmail.com"
}
]

// console.log(Object.keys(tinderuser))// use  key function to find the key of a object and it return in a array
// console.log(Object.values(tinderuser))// use values fun to find the value 
// console.log(Object.entries(tinderuser))// this function create every key value player in  arrya 

// console.log(tinderuser.hasOwnProperty("name"))// this function check the property is exist or not and return boolean value

// de-structure arrya ki bhi hoti ha or object ki bhi


const course  = {
    coursename  : " js in hindi ", 
    price : " 9999", 
    courseinstructor : " hitesh"

}

const {courseinstructor } = course // this is called de-structure of object and we can use this variable in our code

console.log(courseinstructor)









