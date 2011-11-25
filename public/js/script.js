$(document).ready(function loader() {
    //console.log("this is from the loader function"); 
    hider();
    //tester();
    //answerMatch();
    buttons();
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

// Take Input and validate
$("#answerForm").submit(function() {
    
    if ($("input:first").val().match(/jane austin/i)) {
        //$("#result").text("Correct").show().fadeOut(1000);

        $("#correct").removeClass('hidden');
        $("#screen1").addClass('hidden');
        return false;
    }
    //$("#result").text("Incorrect").show().fadeOut(1000);
        
    $("#incorrect").removeClass('hidden');
    $("#screen1").addClass('hidden');
    return false;
});

function buttons(){

    $('.map').click(function(){
       
        //$('.back').css('background-color', 'green');

        $('#screen1').addClass('hidden');
        $('#correct').addClass('hidden');
        $('#incorrect').addClass('hidden');
        $('#map').removeClass('hidden');

    });

    $('.riddle').click(function($item){
        $item = localStorage.getItem('score');
        //console.log($answer);
        //console.log(window.location.search);
        $('.riddle').css('background-color', 'red');
        $('#answer').val($item);
    });
    
    // New function
    // Get #incorrect, IF hasClass="hidden"
    // {
    //  do nothing
    // }
    // else
    // {
    //  var riddleLocation(needs to be created globally) = 
    //  ?this? or var currentLocation {global}
    // 
    //  parse to page switcher func as arg?
    // }

};

function answerMatch(){

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
        $('#incorrect').removeClass('hidden');
    }
};

$('#button1').click(function(){
    localStorage.setItem('score', 'one');
    console.log('button1 was pressed');
});

$('#button2').click(function(){
   
    localStorage.setItem('score', 'two');
    console.log('button2 was pressed');

});

$('#button3').click(function(){
   
    localStorage.setItem('score', 'three');
    console.log('button3 was pressed');

});

$('#button4').click(function(){

    localStorage.setItem('score', 'four');
    console.log('button4 was pressed');

});

$('#button5').click(function(){
   
    localStorage.clear();
    console.log('localStorage was cleared');

});
