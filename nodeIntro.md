# What is Node.JS?

- JavaScript Runtime (NOT a language or a framework)

- Built on the V8 JavaScript engine (Same as Google Chrome)

- Written in C++

- Essentially allows us to run JavaScript code on the server

# Why Use Node?

- Fast, efficient, and highly scalable

- Event driven, non-blocking I/O model

- Popular in the industry

- Same language on the front end and back end (JS)

# Non-Blocking I/O

- Works in a single thread using non-blocking I/O calls

- Supports tens of thousands concurrent connections

- Optimizes throughput & scalability in apps with many
  I/O operatons

  - All of this makes Node.js apps very efficient and fast

  # Node's Event Loop

  - Single threaded

  - Supports concurrency via events & callbacks

  - EventEmitter class is used to bind events and listeners

  # Best Types of Projects for Node

  - REST API & Microservices

  - Real Time Services (Chat, Live Updates)

  - CRUD Apps - Blogs, Shopping Carts, Social Networks

  - Tools and Utilities

  - Short Answer: Anything that is not CPU intensive

  - Node.JS and Mongo DB make a good team

  # NPM - Node Package Manager

  - Install 3rd party packages (frameworks, libraries, tools, etc.)

  - Packages get stored in the "node_modules" folder

  - All dependencies are listed in a "package.json" file

  - NPM scripts can be created to run certain tasks such
    as run a server

  - npm init - Generates a package.json file

  - npm install express - Installs a package locally

  - npm install -g nodemon - Installs a package globally

  # Node Modules

  - Node Core Modules (path, fs, http, etc.)

  - 3rd party modules/packages installed via NPM

  - Custom modules (files)

  - const path = require('path');

  - const myFile = require = require('./myFile');
