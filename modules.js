// CommonJS, every file in node is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./names') //always start with ./ we're giving a path
console.log(names)  // this is an object

const sayHi = require('./utils')
const data = require('./alternateFlavors')
console.log(data) 

require('./mindGrenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
