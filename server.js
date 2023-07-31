const fs = require("fs");
const http = require("http");



const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set the response header 
  res.setHeader("Content-Type", "text/html");

  //create the routes  
  let path = "";  
  switch (req.url) {    
    case "/":      
      path += "index.html";      
      res.statusCode = 200;      
      break;    
 
    case "/contact":      
      path += "contact.html";      
      res.statusCode = 200;      
      break;    
    default:      
      path += "404.html";      
      res.statusCode = 404;      
      break;  
    }
  //create the content 
  //sending an HTML document to the client  
    fs.readFile(path, (error, data) => {   
    if (error) {      
      console.log(error);      
      res.end();    
    } else {      
      res.end(data);    
    }  
  });
    
  });

server.listen(3001, "localhost", () => {
  console.log('Server started on port 3001');
});