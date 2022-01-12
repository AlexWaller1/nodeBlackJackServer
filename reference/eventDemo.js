// eventDemo.js

const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on("event", () => console.log("Event Fired!"));

// Init event
myEmitter.emit("event");
// Event Fired!
myEmitter.emit("event");
// Event Fired!
