//document.ready
$(ready);

//ready function
function ready() {
    $(document).on('load', getResults);
    //clear inputs
    $('#clear').on('click', clearInputs);
    //grab input
    $('#submit').on('click', grabInputs);
    //add operator
    $('.operator').on('click', addOperator);
}

let operator;
// adding operator
function addOperator() {
    //grab button's text
    operator = $(this).text();
    //return operator so we get its value
    return operator;
}

function grabInputs() {
    //currentCalc object
    let currentObj = {
        num1: Number($('#num1').val()),
        operator: operator,
        num2: Number($('#num2').val()),
    };

    // POST => sending currentObj to server.js
    $.ajax({
        url: '/home',
        method: 'POST',
        data: currentObj,
    })
        .then(function (response) {
            console.log(response);
            //create currentCalc object
            getResults();

            //display to DOM
            render(response);

            //clear input fields
            clearInputs();
        })
        .catch(function (error) {
            console.log(`ERROR in /POST request`);
        });
}

//clear inputs
function clearInputs() {
    $('input').val('');
}

//GET request to server
function getResults() {
    // GET => retrieve newObj
    $.ajax({
        url: '/home',
        method: 'GET',
    }) //if sucessful, then...
        .then(function (array) {
            // display to DOM
            render(array);
        })
        .catch(function (err) {
            //404, 500, etc
            console.log(err);
            alert('ERROR IN GET /home');
        });
}

//display to DOM
function render(response) {
    //empty DOM
    $('ul').empty();

    //loop and append to DOM
    for (let i of response) {
        let li = `<li>${i.num1} ${i.operator} ${i.num2} = ${i.answer}</li>`;
        // include the i.answer
        // don't use 'main' for targeting the append element => returns undefined
        $('ul').append(li);
    }
}
