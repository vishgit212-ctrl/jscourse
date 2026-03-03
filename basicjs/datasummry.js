// primitive data type  7 
// 7 type : string ,number , bolean , null , undefined , symbol  , bigint

// JavaScript (JS) is a dynamically typed language
  
const id = Symbol( "123")
const anotherid= Symbol( "123")
//console.log(id === anotherid)






//  refrence ( non primitive)

// array , object , function 

const heros = [ "shakti man " , " naagraj," , " bheeem "]
const myobj = { 
         name : " hitesh ",
        age : 22, 
        
}

const myfun= function (){
     console.log("hello world ")

}

let anu   = null
//console.log(typeof(anu) )// null return object 



//console.log(typeof(id) )
//console.log(typeof(myfun) ) // function function hi return karta ha jisko bola jata ha object function 
// null bhi

//myfun()



//  two types off memory 
//   stack ( primitive ), heap ( non primitive )

let myyoutubename  = " chai code "
let anothername = myyoutubename

 anothername = " hiteshchodri"

//console.log( myyoutubename)
 //console.log(anothername)


 let user1= { 
 
     email : "hiti@gmail.com",
     upi : " usr1"

 }


let user2= user1


user2.email= " vish@gmail.com"
console.log(user1.email)
console.log(user2.email)