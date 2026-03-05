// array is object

// in javascript arry is resizable 
//JavaScript arrays are resizable and can contain a mix of different data types.
// javascript follow the shallow copy it give same refrence of the memory 

const myarray = [1, 2, 3, 4, 5 ] ;
// const myheros= [" shaktiman", "naagraj"]
 
// console.log(myArray[4])// we print the value like this 


// console.log(typeof(myheros))


// array methods

  myarray.push(6)// it add the value 
 myarray.push(8)
  myarray.pop()




myarray.unshift(0)
myarray.unshift(9)

// console.log(myarray)

// console.log(myarray.includes(9))// include check karta ha ki array ma 9 ha ki nahi agar hua to true otherwise no 
// console.log(myarray.indexOf(9))// it return place value where 9 is return

const newarr = myarray.join()

console.log(myarray)
console.log(newarr)

console.log(typeof newarr)// join karne sa array string ma convert ho jata ha 






