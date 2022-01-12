// osDemo.js

const os = require("os");

// Platform
console.log(os.platform());
// darwin

// CPU Arch
console.log(os.arch());
// x64

// CPU Core Info
console.log(os.cpus());
// displays object showing info about computer

// Free memory
console.log(os.freemem());
// 3459145728

// Total memory
console.log(os.totalmem());
// 17179869184

// Home dir
console.log(os.homedir());
// /Users/alexwaller

// Up time
console.log(os.uptime());
// 3127474
