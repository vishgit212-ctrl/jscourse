// immedately invoked function expresion  iife

(function chai (){
    // isko named iife 
    console.log(`db connected `)

})();

// iife use  karo to usko end karna jaruri ha agar nahi kiya tho error dega 


( (name)=>{
    // unnamed iife 
    console.log( ` db connected2 ${name}`)
})("vishnu");

 