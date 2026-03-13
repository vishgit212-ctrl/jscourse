const user = {

username :"vish" ,
price  : 232211,

   welcomeMessage : function (){
        console.log(` ${this.username}  ,welcome to website `)
        console.log(this) // this function pura object ko refer karta ha 

   }



}

// user.welcomeMessage()
// user.username = "srishti"
// user.welcomeMessage()

//console.log(this)// node ma this ek empty object ko refer karta ha 
//console.log(this)// agar hum this ko browser par run krenga to return
//  window hoga pahle js browser par hi chlti thi jissa hum window ko control kar sakte ha 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// arrow function 

// function chai (){
//     let username = "vishnu "
//     console.log(this.username)// this object ma use hota function ma nahi 


// }

// chai()


// ya arow function 
 const  chai =  ()=>{
    console.log(this) // return empty object 


}



//chai()


// this is basic arrow function 
// const addtwo=( num1 ,num2)=>{
//     return num1 + num2

// }

// implecit return 
//const addtwo=( num1 ,num2)=> num1 + num2
//const addtwo=( num1 ,num2)=> (num1 + num2)

// object asa return hota ha ek line ma 
const addtwo=( num1 ,num2)=> ({ username : "vishnu "})




console.log(addtwo(324,43))



