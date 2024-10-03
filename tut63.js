// console.log('Hello World');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>creating a Navigation Bar</title>
      <style>
          .navbar{
              background-color: rgb(156, 129, 153);
              /* background color is liy show nh kr rha qk jb bhi hm float krty hn kisi ko tu ye parent mn sy overflow hojata ha so we'll target .navbar ul overflow:auto; */
              border-radius: 30px;
          }
          .navbar ul{
              overflow: auto;
  
          }
          .navbar li{
              float:left;
              list-style: none;
              /* for removing bullets we are using list-style:none; */
              margin: 13px 20px;
              padding: top;
          }
          .navbar li a {
              padding: 3px 3px;
              text-decoration: none;
              color: white;
          }
          .navbar li a:hover{
              background-color: red;
              color:gray;
          }
          .search{
              float:right;
              color: rgb(92, 34, 34);
              padding: 12px 5px;
          }
          .navbar input{
              border: 2px solid rgb(52, 119, 116);
              border-radius: 4px;
              padding: 13px 14px;
              width: 120px;
          } 
         
  
      </style>
  </head>
  
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact us</a></li>
                  <!-- div search -->
                  <div class="search">
                      <!-- this is search box -->
                      <!-- input:text -->
                      <input type="text" name="search" id="search" placeholder="search this website">
                  </div>
              </ul>
  
          </nav>
      </header>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
