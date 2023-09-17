const {readFile} = require('fs');

console.log('started the first task')

//readfile is asynchronous so it gets offloaded
//then it goes on to the next task
//once the result is ready then we execute the callback

readFile('./content/first.txt', 'utf8', (err,result)=>{ 

    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed the first task')
})

console.log('starting the next task')