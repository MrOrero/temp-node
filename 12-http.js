const http = require('http')

//request and response
const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.end('Welcome to our home page')
        //res.write('This is our home page')
    }
    if (req.url === '/about'){
        res.end('About Us')
    }
    // res.end(`
    //     <p>This page doesn't exist</p>
    //     <a href ="/"> back to homepage </a> 
    // `)
})
server.listen(5000)