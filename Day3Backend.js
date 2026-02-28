# Day 3 – Express.js Fundamentals

## Objective
To understand Express.js concepts clearly through self-learning.

## Topics Covered
- Why Express.js is needed
- Express vs Node.js
- Express server creation
- Routing concept
- HTTP methods
- API basics
- Middleware concept

## Learning Outcome
I can now understand and explain how Express.js simplifies backend development.

## Next Step
Learning Express routing in depth and CRUD APIs
  .

 ##  First Express server 

// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
