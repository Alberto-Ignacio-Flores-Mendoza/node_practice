const path = require('path') //built in module

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

//returns an absolute path
//globals
//useful for when you use it with different machines
const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')
console.log(absolute)