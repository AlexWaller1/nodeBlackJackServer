// fs Demo
const fs = require("fs");
const path = require("path");

// cdn

// Create Folder
//

// Create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   err => {
//     if (err) throw err;
//     console.log("File written to...");
//     // File written to...

//     // File Append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "I love Node.js",
//       err => {
//         if (err) throw err;
//         console.log("File written to...");
//       }
//     );
//   }
// );

// writeFile will overwrite whatever content is already
// in file

// read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   // Hello World!I love Node.js
// });

// Rename file
fs.rename(
  path.join(__dirname, "/test", "/hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  err => {
    if (err) throw err;
    console.log("File renamed...");
    // File renamed...
  }
);

console.log("hello");
