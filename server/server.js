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
    // console.log(`req.body:`, req.body);

    //access obj
    let obj = req.body;
    console.log(`obj is:`, obj);

    //declare variables
    let num1 = Number(obj.num1);
    // console.log(`num1:`, num1);
    let operator = obj.operator;
    // console.log(`operator:`, operator);
    let num2 = Number(obj.num2);
    // console.log(`num2:`, num2);

    //LOGIC for calculations
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log(`ERROR`);
    }
    //create new math object WITH answer
    let newObj = {
        //cannot use $ / jquery in server.js
        num1: Number(num1),
        operator: operator,
        num2: Number(num2),
        answer: Number(result),
    };
    //push obj to array
    calcArray.push(newObj);
    //check to make sure object is inside
    console.log(calcArray);
    // CREATED
    res.sendStatus(201);
});

// Start up our server
app.listen(port, () => {
    console.log('listening on port', port);
});
