# Day 2 – Node.js Core Concepts

## Topics Covered
- Node.js Architecture
- Event Loop
- Blocking vs Non-Blocking Code
- Core Modules (fs, http, path, os)
- File Handling
- Server Creation

## Technologies Used
- JavaScript
- Node.js

## Learning Outcome
Understood how Node.js works internally and implemented core modules.

## Next Day Plan
Learning Express.js framework.

  id="blck1"
const fs = require("fs");
const data = fs.readFileSync("file.txt");
console.log(data.toString());
console.log("This runs after file read");

# Non blocking 
id="nblck1"
const fs = require("fs");
fs.readFile("file.txt", (err, data) => {
  console.log(data.toString());
});
console.log("This runs immediately");

# fs module 
id="fs01"
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file");
    return;
  }
  console.log(data);
});

##http module 

id="http01"
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Day 2 Node.js Server Running");
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});

# path module 

id="path01"
const path = require("path");

console.log(path.basename(__filename));
console.log(path.extname(__filename));

## Os module 

id="os01"
const os = require("os");

console.log("OS:", os.platform());
console.log("Free Memory:", os.freemem());
