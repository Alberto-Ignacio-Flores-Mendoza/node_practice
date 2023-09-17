setInterval(()=>{

    console.log('Hello World')
},2000)
console.log(`I will run first`)

//process stays alive unless you kill it
//unexpected error
//setInterval is asynchronous 
//every 2 seconds the callback will be invoked
// setInterval will be offloaded
//