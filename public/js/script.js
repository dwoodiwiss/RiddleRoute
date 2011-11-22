$(document).ready(function loader() {
    //console.log("this is from the loader function"); 
    hider();
    tester();
    answerMatch();
});

function hider() {
    //console.log("this is from the hider function");
    $('#screen1').removeClass('hidden');
};

function tester() {
    //var $answer = $(this).get(['answer.input']);
    //$answer = $('#answerForm input').attr('value'); 
    //console.log($answer);
    
    //$('#result').text($answer);
    
    //$answer = $('#answer').val(name); 
}

function answerMatch(){
    // temporary var
    $answer = "temp";

    // riddle 1
    $answer1 = /Jane\ Austin/i;
    // riddle 2
    $answer2 = "data2";
    // riddle 3
    $answer3 = "data3";
    // riddle 4
    $answer4 = "data4";
    // riddle 5
    $answer5 = "data5";

    if ($answer == $answer1 ) {
        // send to correct answer page
        console.log('Riddle 1 is correct!');
    }
    else {
        // send to incorrect answer page
    }
};
