const os = require('os') //dont add ./ so node knows were working wit the built in module
// if we want a specific property we can destructure

//info about current user
const user= os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);