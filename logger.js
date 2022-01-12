// logger.js

const EventEmitter = require("events");

const uuid = require("uuid");

console.log(uuid.v4());
// 2c590478-628b-4b68-b88f-d62703ee541c

class Logger extends EventEmitter {
  log(msg) {
    // Call Event
    this.emit("message", { id: uuid.v4(), msg });
  }
}

module.exports = Logger;
