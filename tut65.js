// blocking vs Non-blocking execution 
// nodejs is wrok on non-blcoking io model
// synchronous or blocking (line by line execution)  ,  Asynchronous or non-blocking 
// The code which runs via line by line execution is known as synchronous or blocking code. It means the line of code written first, will be executed first. On the other hand, a block of code where line by line execution is not guaranteed is known as asynchronous or non-blocking code. These types of codes accept a call-back function.
// we made a file to read the contents with the help of fs.readSync() function. The Sync here stands for synchronous execution

const fs= require("fs");
fs.readFile("abc.txt", "utf-8", (err,data) =>{ //callback function
    // console.log(a,b); //a will be null, b will how content of your file 
    console.log(err, data); //error null show kry ga 
    //if you give wrong name of the file then error will display 

    /* The callback is passed two arguments (err, data), where data is the contents of the file.

If no encoding is specified, then the raw buffer is returned.

If options is a string, then it specifies the encoding.*/

});
console.log("This is a message "); 
// inavlid code error will show when you only execute this code let text = fs.readFile("backend.txt", "utf-8"); becuasee the readFile function expect a callbackfunction 
//program continue execute hota rhy ga chahy synch jb bhi chly islie this is a message pehly showho rha hai , when file is read then function will perform thne callback wil fire 






