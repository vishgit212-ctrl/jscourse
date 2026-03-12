// 

 function  Sayname(){

    console.log("hi")
    console.log("hi")
    console.log("hi")
    console.log("hi")
    console.log("hi")
    console.log("hi")


}

// Sayname()

// function addtwonumbers(number1 , number2){
//      console.log(number1 + number2)
// }

function addtwonumbers(number1 , number2){

// let result = number1 + number2 
//      return result 

     return number1 + number2 

}

const result = addtwonumbers(12,32)
// console.log(result)// now this time result give undefined because  function does not return anything 

function loginuser(username = "sam"){
          if(username === undefined ){
               console.log("please enter user name ")
               return
          }
          return ` ${username} just logged in `

}

const  name1 = loginuser("vishnu")
//console.log(name1) //
//console.log(loginuser())// if user does not pass somthing it return undefined 
//console.log(loginuser())

function calculatecart (... num ){ // ... is a rest operator 
          // spread operator return a  array 
     return num

}



// console.log(calculatecart(232,323,333,))


// function calculatecartprice( ...num1){ // spread operator 
//      // ... this take multiple value in sigle time and  operator return in a  array 
//      return num1


// }

function calculatecartprice(val1, val2,  ...num1){ // spread operator 
     // val1 or val2 ka ander first 2 value pass hogi and the rest num1 rest operator array ma creat kar dega 

     return num1


} 

// console.log(calculatecartprice(34 , 400 ,892 ,324234,234234,234234,2423 ))
 


 const user ={ // object in function ma type safety check karni padti ha 


     username : "vishsh",
     price:2322
 
 }



 function handelobject(anyobject){
     console.log(` username is ${anyobject.username} and price is ${ anyobject.price} `)

 }


 //handelobject(user)
// handelobject({ // we can pass like this also 
//  username:"dsfsdfsd",
//  price: 64646

// })
const newarry=[ 34234,234234,234234,234234,4554]

function returnsecvalue (getarray){

     return getarray[3]


}


// console.log(returnsecvalue(newarry))

console.log(returnsecvalue([344,2323,2,2,5332,222]))







