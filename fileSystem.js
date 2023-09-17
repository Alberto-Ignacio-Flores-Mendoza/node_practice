const {readFileSync, writeFileSync} = require('fs');
// same as const fs= require('fs');
//fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first)
console.log(second)

//writes to file, if it doesnt exist it will be created
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)


// will append whatever weadd
writeFileSync('./content/result-sync.txt', `This was appended`, {flag: 'a'})