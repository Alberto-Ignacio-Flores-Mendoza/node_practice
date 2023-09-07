 const http = require('http');

 const server = http.createServer((req,res)=>{ // parameters are incoming request and response
    res.write('Hello World');
    res.end()

 })

 //check your localhost 5000
 //it doesnt exit out because were still listening
 server.listen(5000)