// Require express - gives us a function
const express = require('express');

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

//middlware
// app.use(bodyParser.urlencoded({ extended: true }));

// Start up our server
app.listen(port, () => {
    console.log('listening on port', port);
});

//handle all the operations
function handleOperations() {}

//add
function add(num1, num2) {
    return num1 + num2;
}

//subtract
function subtract(num1, num2) {
    return (num1 -= num2);
}

//multiply
function multiply(num1, num2) {
    return num1 * num2;
}

//divide
function divide(num1, num2) {
    return num1 / num2;
}