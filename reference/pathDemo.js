const path = require("path");

// Base file name
console.log(path.basename(__filename));
// pathDemo.js

// Directory name
console.log(path.dirname(__filename));
// /Users/alexwaller/codeMentorPractice/nodeBlackJackServer/reference

// File extension
console.log(path.extname(__filename));
// .js

// Create Path Object
console.log(path.parse(__filename));
/* 

{
  root: '/',
  dir: '/Users/alexwaller/codeMentorPractice/nodeBlackJackServer/reference',
  base: 'pathDemo.js',
  ext: '.js',
  name: 'pathDemo'
}

*/

// can access any value of an object by calling key
// just like any object in JavaScript
console.log(path.parse(__filename).name);
// pathDemo

// Concatenate paths
console.log(__dirname, "test", "hello.html");
// /Users/alexwaller/codeMentorPractice/nodeBlackJackServer/reference test hello.html
