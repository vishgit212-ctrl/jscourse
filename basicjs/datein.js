 // dates


 let mydate = new Date()


//   console.log(mydate.toString())
//    console.log(mydate.toDateString())
//       console.log(mydate.toLocaleString())
//       console.log(typeof mydate)



//let mycreatedate = new Date() // javascript ma month zero sa start hota haa 
// console.log(mycreatedate.toDateString())


 let mycreatedate = new Date("2025-03-4")
//let mycreatedate = new Date("03-04-2026")
//console.log(mycreatedate.toLocaleString())

let mytimestamp = Date.now()
// console.log(mytimestamp)

//console.log(mycreatedate.getTime())

// console.log(Math.floor(Date.now()/1000)) // 

let newdate = new Date()
// console.log(newdate)// it  give you date 
// console.log(newdate.getMonth()+1)

// console.log(newdate.getDay()+1)


///////////////////////
// very important

newdate.toLocaleString('default',{
   weekday:"long",


})
