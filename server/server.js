// Require express - gives us a function
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

//require middlware
app.use(bodyParser.urlencoded({ extended: true }));

//calculations array
const calcArray = [];

// GET request
app.get('/home', function (req, res) {
    console.log('IN /HOME');
    res.send(calcArray);
});

// POST response
app.post('/home', (req, res) => {
    console.log('POST /home', req.body);
    calcArray.push(req.body);
    //check to make sure object is inside
    console.log(calcArray);
    // CREATED
    res.sendStatus(201);
});

//handle all the operations
function handleOperations(calcArray) {
    //loop through calcArray
    for (let i = 0; i < calcArray.length; i++) {
        //grab the last numbers
        console.log(calcArray[i]);
    }

    // //do shit with it
    // if ($(this).data('id') === 'add') {
    //     add(num1, num2);
    // }
    // if ($(this).data('id') === 'subtract') {
    //     subtract(num1, num2);
    // }
    // if ($(this).data('id') === 'multiply') {
    //     multiply(num1, num2);
    // }
    // if ($(this).data('id') === 'divide') {
    //     divide(num1, num2);
    // }
}

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

// Start up our server
app.listen(port, () => {
    console.log('listening on port', port);
});
