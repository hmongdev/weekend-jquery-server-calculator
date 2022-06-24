//document.ready
$(ready);

//ready function
function ready() {
    console.log(`I'm ready!`);
    //clear inputs
    $('#clear').on('click', clearInputs);
}

//clear inputs
function clearInputs() {
    $('input').val('');
}
