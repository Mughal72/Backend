
const express = require("express");
const path = require("path");
const fs = require("fs")
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
// To extract the data from the website to the app.js file, we have to write-
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get("/", (req, res) => {
    const con = 'This is the best content on the internet so far so use it wisely '
    const params = {'title': 'Pug is the best', 'content': con}
    res.status(200).render('index.pug', params)
});

// To make it a post request, we have to write as method= “post” in the HTML part. Then we will make the post request in the app.js file as follows-
app.post('/', (req,res)=>{
   name = req.body.name
   age = req.body.age
   gender = req.body.gender
   address = req.body.address
   more = req.body.more
   let outputToWrite = `the name of the client is ${name}, ${age} years old, gender of the clinet is:  ${gender}, residing at ${address}, more about him/her:  ${more}` 
//    Now we will make a unique file name. Then we have to write the contents of the file as follows-
  fs.writeFileSync('output.txt',  outputToWrite)
    const params = {'mesage': 'Your form has been submitted successfuly'}
    res.status(200).render('index.pug', params)
})
// This was the small example, where we have learned how to make a post request while submitting a form and storing the data.
//START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});










// // express is a web application framework for nodejs, Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
// // It provides mechanisms to: Write handlers for requests with different HTTP verbs at different URL paths (routes)
// // Template engine: A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 80;

// // EXPRESS SPECIFIC STUFF
// app.use('/static', express.static('static')) // For serving static files

// // PUG SPECIFIC STUFF
// app.set('view engine', 'pug') // Set the template engine as pug
// app.set('views', path.join(__dirname, 'views'))// Set the views directory
 
// // Our pug demo endpoint
// /*app.get("/demo", (req, res)=>{ 
//     res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
// });

// app.get("/", (req, res)=>{ 
//     res.status(200).send("This is homepage of my first express app with Harry");
// });

// app.get("/about", (req, res)=>{
//     res.send("This is about page of my first express app with Harry");
// });

// app.post("/about", (req, res)=>{
//     res.send("This is a post request about page of my first express app with Harry");
// });
// app.get("/this", (req, res)=>{
//     res.status(404).send("This page is not found on my website cwh");
// });*/

// // ENDPOINTS
// app.get("/",(req, res)=>{
//     const con = 'This is the best content on the internet so far so use it wisely '
//     const params = {'title':'Pug is the best', content: con}
//          res.status(200).render('index.pug', params)
// })

// //START THE SERVER
// app.listen(port, ()=>{
//     console.log(`The application started successfully on port ${port}`);
// });
// //Now we have to start the app by writing node app.js 
// // We can also test the app in the Postman app by sending a get request on the local server. The benefit of using port 80 is, the server works on the local server.

