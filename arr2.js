const  marvelhero =[ " thor " , " ironman ", "spiderman"]
const dchero = [ " superman ", " flash", " spiderman "]


marvelhero.push(dchero)// agar ma humm array ma array push karenga to ek array ke ander ek or array hoga 

console.log( marvelhero)

console.log( marvelhero[3][1])//asa hum array ka nader sa arry wali vlue ko niklata haa


 let allhero  = marvelhero.concat(dchero)// concate return new array 
console.log( allhero)


// coder use spread operator 

const allnewhero =  [... marvelhero,... dchero]
// console.log(allnewhero)


const anotherarr = [ 1 ,2,3, [4,2,5,3,2],2,7,3,12,[2,3,[3,7]]]


const myrealanotherarr = anotherarr.flat(Infinity)// it convert subarry to one array and return a new array 


console.log(myrealanotherarr)


console.log(Array.isArray(dchero))// it return ture because dchero is array 
console.log(Array.isArray("Hitesh")) // it return false  bcoz  hitesh is a string 
console.log(Array.from("Hitesh"))// from() this is used for converting string into array each chracter become array 
console.log(Array.from({ name : " vish "}))// intresting case 
 // we have to declare that how to make a array  by key or value 


let score1 = 100

let score2  = 300

let score3 = 400

console.log(Array.of(score1,score2,score3))// we can use , of, instead of , from  ,



 
 