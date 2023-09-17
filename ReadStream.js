//Streams
//used to read or write squentially 

// writable 
//readable /
//duplex - for reading and writing 
//transform used to transform data

//Streams extend event emitter
// Before when i wanted to read a file and place the info into a variable i would just use readFile
//if the file is to big, the variable wont be enough to hold that information
// A good solution to this is to use read stream


//example using a big file
/* const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
} */

const {createReadStream} =require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'})

//default 64kb
//last buffer - remainder
//highWaterMark - control size
//const stream = createReadStream('./content/big.txt', {hightWaterMark: 90000})

stream.on('data', (result)=>{
    console.log(result)
})

stream.on('error', (err)=>{
    console.log(err)

})