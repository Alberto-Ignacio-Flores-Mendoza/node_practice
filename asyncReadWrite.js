//Problems if we want to preform multiple tasks
//solution is to use a promise

const {readFile, writeFile} = require('fs');


//const {readFile, writeFile} = require('fs').promises;

//We can skip these next 3 lines by adding .prmises to the above line and just call the
//funcions as readFile and writeFile, without the pormise part
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


//instead of adding the "then" we can use an async function
//we can use async await to wait till the promise is resolveda
//everytime we use async await, we should wrap everything in a try catch block

const start= async()=>{
    try{
    const first = await readFilePromise('./content/first.txt', 'utf8')
    const second = await readFilePromise('./content/second.txt', 'utf8')

    // we can add the flag: 'a' to append instead of overwriting
    await writeFilePromise('./content/result-mind-grenade.txt', `this is the result ${first} ${second}`)

    console.log(first, second)
    }
    catch(error){
    console.log(error)
    }
 }

 start();



 //first way of doing this
 /* const getText = (path)=>{
    return new Promise((resolve,reject)=>{
    readFile(path,  'utf8', (err,data)=>{
    if(err){
        reject(err)
    }
    else{
        resolve(data)
    }
})
    })
} */


//getText('./content/first.txt').then(result=>console.log(result)).catch((err)=>console.log(err))
//getText('./content/second.txt').then(result=>console.log(result)).catch((err)=>console.log(err))
