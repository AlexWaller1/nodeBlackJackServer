console.log("Hello From Node.JS");

const aceOfClubs = require("./aceOfClubs");

console.log(aceOfClubs.name);

console.log(aceOfClubs.suit);

console.log(aceOfClubs.points);

//.............................................

const Clone = require("./clone");

const clone1 = new Clone("Roland", "Oryx");

clone1.greeting();

/* 

Module Wrapper Function
(function (exports, require, module, __filename, __dirname){
    
})


*/

console.log(__filename, __dirname);

//........................................
//........................................

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", data => console.log("Called Listener", data));

logger.log("Hello World");
/* 

Called Listener { id: '0060a188-2d69-47cd-8bc7-e0d03a07bc77', 
msg: 'Hello World' }

*/
