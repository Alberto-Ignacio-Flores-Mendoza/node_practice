
//async is a call back function 
//We run it everytime were done with some functionality
//same as an eventListener
//Runs everytime that function is runned


//Were gonna check if it exists

//remember to add the uft8 value or were gonna get a buffering


//async - ofloads the first aask and goes on with the next task right away
//parallel
//kinda dirty here but we could use promises
//remember async works at different time

const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => { //looking for first.txt
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => { //looking for second.txt
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')