//Serving html file using Nodejs
// Backend is all about serving the files. The primary task in the backend is to serve the files according to the requests of the user. 

const http = require('http');
// create server here we want to read file
const fs = require('fs');
const fileContent = fs.readFileSync('Calender.html') //just read file and put it into filecontent variabla
//server 
const server = http.createServer((req, res)=>{ //req = requuest, res = response
    res.writeHead(200, {'Content-type': 'text/html' }); //200 is response 
    // text/html likhne ka mtlb browser ko pta hoga k ye html file ha or isi hisb se handle kryga  
// server the content
res.end(fileContent)

})
// Till now we have made the server and now we will make this server listen on its port.
server.listen(80, '127.0.0.1',()=>{
    console.log("Listening on port 80 ");
    //  The reason for listening to the server at port 80 was, we do not have to explicitly write anything else in the URL. For example, if we have taken 8000, then we have to explicitly write it on the URL to get the request back.
})