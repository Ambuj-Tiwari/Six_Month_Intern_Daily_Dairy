// Import Express
const express = require("express");

// Create Express App
const app = express();

// Middleware to parse JSON data
app.use(express.json());


// ===============================
// 1. Basic Home Route
// ===============================
app.get("/", (req, res) => {
    res.send("Welcome to Node.js Request & Response Tutorial");
});


// ===============================
// 2. Understanding Request Object
// ===============================
app.get("/request-info", (req, res) => {

    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", req.headers);

    res.send("Request information logged in server console");
});


// ===============================
// 3. Sending Response Example
// ===============================
app.get("/hello", (req, res) => {
    res.send("Hello from Node.js Server");
});


// ===============================
// 4. Routing Requests
// ===============================
app.get("/about", (req, res) => {
    res.send("This is About Page");
});

app.get("/contact", (req, res) => {
    res.send("This is Contact Page");
});


// ===============================
// 5. Taking User Input (Query Parameter)
// Example: /user?name=Rahul
// ===============================
app.get("/user", (req, res) => {

    const name = req.query.name;

    if(name){
        res.send("Hello " + name);
    }else{
        res.send("Please provide name in query parameter");
    }

});


// ===============================
// 6. Taking User Input (URL Parameter)
// Example: /student/101
// ===============================
app.get("/student/:id", (req, res) => {

    const studentId = req.params.id;

    res.send("Student ID: " + studentId);

});


// ===============================
// 7. Redirecting Requests
// ===============================
app.get("/home", (req, res) => {
    res.redirect("/");
});


// ===============================
// 8. POST Request Example
// ===============================
app.post("/data", (req, res) => {

    const data = req.body;

    res.json({
        message: "Data received successfully",
        receivedData: data
    });

});


// ===============================
// Start Server
// ===============================
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
