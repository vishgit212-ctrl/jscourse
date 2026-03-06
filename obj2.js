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
const obj3 = Object.assign(obj1, obj2)
console.log(obj3)


