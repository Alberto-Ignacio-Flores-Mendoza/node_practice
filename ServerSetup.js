const http = require('http')

//everytime a request comes in we give a response, we invoke a callback
const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('Hello World i changed')
})

server.listen(5000, ()=>{
    console.log('Server Listening to port 5000...')
})

//listen is asynchronous and the moment we set it up 
//the event loop is just waiting for the requests to come in/ listening for them to come in
// everytime the request come in we invoke a callback
