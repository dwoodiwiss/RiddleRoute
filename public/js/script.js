$(document).ready(function loader() {
    //console.log("this is from the loader function"); 
    hider();
    //tester();
    answerMatch();
});

function hider() {
    //console.log("this is from the hider function");
    $('#loading').addClass('hidden');
    $('#screen1').removeClass('hidden');
};

function tester() {
    var $answer = $(this).get(['answer.input']);
    $answer = $('#answerForm input').attr('value'); 
    console.log($answer);
    
    $('#result').text($answer);
    
    //$answer = $('#answer').val(name); 
}

function answerMatch(){
    // temporary static var
    $answer = "Jane Austin";

    // riddle 1
    $answer1 = RegExp(/Jane Austin/gi); 
    // riddle 2
    $answer2 = RegExp(/data2/gi); 
    // riddle 3
    $answer3 = "data3";
    // riddle 4
    $answer4 = "data4";
    // riddle 5
    $answer5 = "data5";

    if ($answer == $answer2) {
        // send to correct answer page
        console.log('Riddle 1 is correct!');
    }
    else {
        // send to incorrect answer page
    }
};
