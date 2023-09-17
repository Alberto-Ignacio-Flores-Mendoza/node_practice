const http = require('http')

//server extends the event emitter class
//event though were not setting it up, its already built in
const server = http.createServer()


//request is a specific name
//its what node uses behind the scenes
server.on('request', (req,res)=>{
    res.end('Welcome')
})

server.listen(5000)
