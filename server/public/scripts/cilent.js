//document.ready
$(ready);

//ready function
function ready() {
    console.log(`I'm ready!`);
    //clear inputs
    $('#clear').on('click', clearInputs);
    $('#equal').on('click', grabInputs);
}

function grabInputs() {
    //declare num1 and num2 variables
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    // put into object
    const operands = {
        num1: Number(num1),
        num2: Number(num2),
    };
    console.log(operands);
    // POST request to server
    $.ajax({
        url: '/home',
        method: 'POST',
        data: operands,
    })
        .then(function (response) {
            console.log(response);
            getResults();
        })
        .catch(function (error) {
            console.log(`ERROR in /POST request: ${error.message}`);
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
        .then(function (response) {
            console.log(response);
            // render to DOM
            render(response);
        })
        .catch(function (error) {
            //404, 500, etc
            console.log(error);
            alert('ERROR IN GET /home');
        });
}

//display to DOM
function render(array) {
    //empty and redraw
    $('ul').empty();
    //append it to the DOM
    for (let obj of array) {
        $('ul').append(`<li>${obj.num1} ${obj.symbol} ${obj.num2} </li>`);
    }
}
