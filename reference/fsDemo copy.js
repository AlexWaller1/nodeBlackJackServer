// fs Demo
const fs = require("fs");
const path = require("path");

fs.appendFile("hello.txt", `${process.argv[2]}\n`, err =>
  // \n means new line
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log("Commit logged!")
);

console.log(process.argv);
console.log(process.argv[3]);
