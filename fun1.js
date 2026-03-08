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
console.log(loginuser())


