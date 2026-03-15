// for of 

// [ '','',]
// [{},{}]



const arr = ['1', '2', '3']

for ( const num of arr ){

    //console.log( num)

}


const greetings = "hello world"

for ( const greet of greetings ){

        //console.log( ` each char is ${greet}`)

}



// maps 
// map is not  iteratable 

const maps = new Map()
maps.set('IN',"india ")
maps.set('USA',"united ")
maps.set('fr',"france ")


//console.log(maps)


const myobject = {

    'game1': "nfs",
    'game2': " spiderman"

}

// for ( const [ key , value ]  of myobject){

//     console.log(key ,`:-`, value)
// }



const myobject2 = {

    js : "javascript",
    cpp : " c++",
    rb : " ruby",
    swift : "swift  by apple "
}

 // for in lop for object iteration 

for ( const key in myobject2 ){


    //console.log(key)
    //console.log(myobject2[key])
    //console.log(` ${key} shortcut is for ${myobject2[key]}`)
}


const programing = [ " js" , "rb ", "py", "java" , " cpp "]



for ( const key in programing ){
    
        //console.log(programing[key])
}


const coding =  [ " js" , "rb ", "py", "java" , " cpp "]
 
coding.forEach( function  (item) {

    //console.log(item)
 })


// function printme (item){
//     console.log(item)
// }


// coding.forEach(printme)


coding.forEach(() => {

})

const mycoding  = [

    {

         languagenam : " javascript ",
         languagefilename : " js"

    },
    {

         languagenam : " cPP ",
         languagefilename : " c++"

    },
    {

         languagenam : " py ",
         languagefilename : " pyhton   "

    }

]
mycoding.forEach( (item) => { 

    console.log( item.languagenam);
})