function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        let result = a / b;
        console.log("Result:", result);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Test
divideNumbers(10, 2);
divideNumbers(10, 0);


function parseJSONData(jsonString) {
    try {
        let data = JSON.parse(jsonString);
        console.log("Parsed Data:", data);
    } catch (error) {
        console.log("Invalid JSON Format");
    }
}

// Test
parseJSONData('{"name":"Ambuj","age":22}');
parseJSONData('{name:Ambuj}');


function checkAge(age) {
    try {
        if (isNaN(age)) {
            throw new Error("Age must be a number");
        }
        if (age < 18) {
            throw new Error("User must be 18 or older");
        }
        console.log("Access Granted");
    } catch (error) {
        console.log("Error:", error.message);
    }
}

// Test
checkAge(20);
checkAge(15);
checkAge("abc");


try {
    console.log(userName);
} catch (error) {
    console.log("Error:", error.message);
}


function riskyOperation() {
    try {
        let result = 10 / 0;
        console.log(result);
    } catch (error) {
        console.log("Error occurred");
    } finally {
        console.log("Program execution completed");
    }
}

// Test
riskyOperation();
