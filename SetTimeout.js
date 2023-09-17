//started operating system process
console.log('first');

setTimeout(()=>{
console.log('second')
}, 0)
//settimeout is asynchronous 
//even though there is a 0 sec wait time, all asynchronous code gets offloaded
// it will only be run after all of our imidate code
console.log('third')

//completed and exited operating system process