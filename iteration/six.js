// const coding =  [ " js" , "rb ", "py", "java" , " cpp "]


//  const values = coding .forEach((item)=>{
// console.log(item)


// })



// console.log(values)


const  mynums = [ 1,2,3,4,5,6,7,8,9,10,]

//  const newnums = mynums.filter((num)=> {
//     return num>4
//  })


// const newnums = []

// mynums.forEach( (num ) => {


//             if ( num > 4 ){
//                 newnums.push(num)

//             }
// })


// console.log(newnums)


// 10 add in every element 


const mynumber  = [ 1,2,3,4,5,6,7,8]



//const newnumber = mynumber.map(( num)=> num + 10)

const newnumber = mynumber
                        .map(( num)=> num * 10)
                        .map(( num)=> num + 1)
                        .filter((num)=> num >= 40)



//console.log( newnumber)

//----------------------------------------------------

const my_nums = [1,2,3]

// const mytotal = my_nums.reduce( function ( acc , currval){
//     console.log(` acc ${acc} and currval ${currval}`)

//     return acc + currval
// },0)


const mytotal = my_nums.reduce((acc, curr)=> acc + curr ,0)


// console.log(mytotal)



const shopingcart = [
    {
        itemname : " data science course ", 
        price : 12999
    },
    {
        itemname : " python  ", 
        price : 5222
    }, 
    {
        itemname : " mobile dev course  ", 
        price : 3499
    },
    {
        itemname : " data analytics  ", 
        price : 6995
    }
]

const addcart =  shopingcart.reduce( (acc , item) => acc + item.price  ,0)


console.log(addcart)


















