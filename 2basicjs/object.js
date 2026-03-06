// oobject literals 
//object.create// isko bola jata ha constructor method ki through  isko hi bolta ha singleton



// sumbol diclear 
const mysym = Symbol("key1")


const jsuser ={ // how to acces object 

    name : " vish",
    age  : 21, 
    [ mysym] : " key1",// agr hum ko bahar ki symbol value ko ander acces karna ho to [] ma hota ha 
    "fullname" :  " vish dubey ", 
    location : "delhi" , 
    email :"vish@gmail.com" ,
    islockedin : false,
    lastloginday :   [ "monday " , " tuesday "]


}


// console.log( jsuser.email)
console.log( jsuser["email"])// when ever we we access object with [] we have too pass in string 

console.log( typeof jsuser["fullname"])
console.log(jsuser[mysym])


jsuser.email= "jsdbjv@gmail.com"// is trah humm value ko chnage kar sakte haa 
console.log(jsuser["email"])
Object.freeze(jsuser)// we use freeze function bcoz in past no one can modifiy object 


jsuser.email= "12344@gmail.com"
 
console.log(jsuser["email"])

jsuser.greeting = function(){
console.log(" hello js user ")

}

jsuser.greeting2 = function(){
console.log(` hello js user,   ${this.name}` )

}
 
//console.log(jsuser.greeting)// isko jab bhi run karenga too function return back ay ga 
console.log(jsuser.greeting())
console.log(jsuser.greeting2())




