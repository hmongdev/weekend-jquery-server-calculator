//document.ready
$(ready);

//ready function
function ready() {
    console.log(`I'm ready!`);
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
    operator = $(this).text();
    return operator;
}

function grabInputs() {
    //currentCalc object
    let currentObj = {
        num1: Number($('#num1').val()),
        operator: operator,
        num2: Number($('#num2').val()),
    };
    console.log(currentObj);
    // POST request to server
    $.ajax({
        url: '/home',
        method: 'POST',
        data: currentObj,
    })
        .then(function (response) {
            console.log(response);
            getResults();
            renderResults(response);
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
    // AJAX
    $.ajax({
        url: '/home',
        method: 'GET',
    })
        .then(function (array) {
            console.log(array);
            // displayNumbers to DOM
            renderResults(array);
        })
        .catch(function (err) {
            //404, 500, etc
            console.log(err);
            alert('ERROR IN GET /home');
        });
}

//display to DOM
function renderResults(array) {
    //empty DOM
    $('ul').empty();

    //declare last array element
    let lastItem = array.length - 1

    //append result
    $('#answer').text(`${array[lastItem].answer}`);

    //loop and append
    for (let i of array) {
        // include the i.answer
        $('ul').append(
            `<li>${i.num1} ${i.operator} ${i.num2} = ${i.answer}</li>`
        );
    }
}
