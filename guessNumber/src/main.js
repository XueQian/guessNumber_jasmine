var flag = false;
var generateRand = new GenerateRand();
var compareNumber = new CompareNumber();
var guesses = new Guess(generateRand,compareNumber);
var game = new Game(guesses);
$(document).ready(function(){
    $('#invalidNumber').hide();
    $('#welcome').hide();
    $('#start').on('click', function () {
        start();
    });
    $('#contentInput').focus(function () {
        $(this).val('');
    });
    $('#commit').on('click', function () {
        if(flag == true) {
            printAnswer();
        }
    });
});
function start(){
    $('#invalidNumber').hide();
    flag = true;
    $('#welcome').text(game.start());
    $('#welcome').show();

}
function printAnswer() {
    $('#welcome').hide();
    var inputs = $('#contentInput').val();
    var check = game.check(inputs);
    if (!check) {
        $('#tips').hide();
        $('#invalidNumber').show();
    } else {
        $('#invalidNumber').hide();
        $('#tips').show();
        $('#tips').text(game.input(inputs));
    }
}

