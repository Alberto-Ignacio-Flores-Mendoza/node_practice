 const http = require('http');

 const server = http.createServer((req,res)=>{ // parameters are incoming request and response
    console.log(req) //gives a giant ass object with usefull information
    if(req.url ==='/')
    {
        res.end('welcome to our home page')
    }
    else if(req.url ==='/about'){
        res.end('About page')
    }
    else{
    res.end(`
    <h1>Opps</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `)
    }
 })

 //check your localhost 5000
 //it doesnt exit out because were still listening
 server.listen(5000)