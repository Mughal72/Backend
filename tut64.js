// // built in modules in Node.js

// // first step- include the module
// //fs = filesystem
// // const fs  = require("fs");
// // const text = fs.readFileSync("backend.txt", "utf-8");  //sync read the netire contnet of the file
// // console.log("The content of the file is ");
// // console.log(text); //file content will display in the output

// // you can also create new file and replace the content of file 
// const fs = require("fs");
// let text = fs.readFileSync("backend.txt ","utf-8") ;
// text = text.replace("Browser", "NodeJs");

// console.log("The content of the file is");
// console.log(text);

// // write this content in new file 
// console.log("Creating a new file......");
// fs.writeFileSync("node.txt", text); //new file create

 


// We can also make a new file and replace the content of the original file. Suppose we have to replace “browser” with “Rohan” To do so, we have to write
// const fs = require("fs");
// let text = fs.readFileSync("backend.txt", "utf-8");
// text = text.replace("browser", "Anber");

// // Now we have to make a new file in which we will write the above text. Let us assume the name of the file is rohan.txt. So the code for it goes as follows-
// console.log("Creating a new file...")
// fs.writeFileSync("anber.txt", text);

//third party modules - NPM

// another example
var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/htm'});
    res.end('Hello World!');
}).listen(8080);

// Create Your Own Modules
// Create a module that return curent dtae and time:
exports.myDateTime = function(){
    return Date(); 
    // Use the exports keyword to make properties and methods available outside the module file.
}

