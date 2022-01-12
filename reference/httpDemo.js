// httpDemo.js

const http = require("http");

// Create Server Object
http
  .createServer((req, res) => {
    // Write Response
    res.write("Hello World");
    res.end();
  })
  .listen(3000, () => console.log("Server running"));
// control - C to get the server to stop running
