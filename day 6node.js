Day-05-Event-Loop
│
├── eventLoop.js
├── sample.txt
└── README.md

// ==========================================
// Day 5 - Node.js Event Loop & Async Concepts
// ==========================================


// ==========================================
// 1. Event Driven Programming Example
// ==========================================

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", () => {
    console.log("Hello User! Welcome to Node.js Event Driven Programming");
});

eventEmitter.emit("greet");



// ==========================================
// 2. Single Thread Example
// ==========================================

console.log("\nSingle Thread Example:");

function task1() {
    console.log("Task 1 Completed");
}

function task2() {
    console.log("Task 2 Completed");
}

task1();
task2();



// ==========================================
// 3. Event Loop Example
// ==========================================

console.log("\nEvent Loop Example:");

console.log("Start");

setTimeout(() => {
    console.log("Timeout Finished");
}, 2000);

console.log("End");



// ==========================================
// 4. Asynchronous Code Example
// ==========================================

const fs = require("fs");

console.log("\nAsync File Read Example:");

fs.readFile("sample.txt", "utf8", (err, data) => {

    if(err){
        console.log("Error reading file");
        return;
    }

    console.log("File Content:");
    console.log(data);
});

console.log("Reading file asynchronously...");



// ==========================================
// 5. Blocking Code Example
// ==========================================

console.log("\nBlocking File Read Example:");

try{

    const data = fs.readFileSync("sample.txt");

    console.log("File Content:");
    console.log(data.toString());

}catch(err){

    console.log("Error reading file");

}

console.log("File read completed using blocking code");



// ==========================================
// 6. Async Example Using setImmediate
// ==========================================

console.log("\nsetImmediate Example:");

setImmediate(() => {
    console.log("Executed inside setImmediate");
});

console.log("This runs before setImmediate");



// ==========================================
// 7. Async Example Using setTimeout
// ==========================================

console.log("\nsetTimeout Example:");

setTimeout(() => {
    console.log("Executed after 1 second");
}, 1000);

console.log("Timer started...");
