$(document).ready(function loader() {
    //console.log("this is from the loader function"); 
    //tester();
    //answerMatch();
    URLRedirects();
    buttons();
    
    hide_screens();
    show_screen($url);
});

function hide_screens() {
	$('.screen').hide();
};

function show_screen(id) {
	$('#'+id).show();
   
    $currentScreen = id;
    console.log('SCREEN =', $currentScreen);
};

function URLRedirects(){

    $url = window.location.search.replace(/\?riddleInput=/, '');
    console.log('URL =', $url);
    if ($url == 'riddle1') {
        hide_screens();
        show_screen('riddle1');
    }
};

function answerMatch(){

    // riddle 1
    $answer1 = RegExp(/Swithun/gi); 
    // riddle 2
    $answer2 = RegExp(/data2/gi); 
    // riddle 3
    $answer3 = "data3";
    // riddle 4
    $answer4 = "data4";
    // riddle 5
    $answer5 = "data5";

};

// Take Input and validate
$("#answerForm").submit(function() {
    
    if ($("input:first").val().match(/Swithun/ig)) {
        //$("#result").text("Correct").show().fadeOut(1000);
        hide_screens();
        show_screen('correct');

        return false;
    }
    else
    {
        hide_screens();
        show_screen('incorrect');
        return false;
    }
});

function buttons(){

    $('.map').click(function(){
       
        hide_screens();
        show_screen('map');

    });

    $('.riddle').click(function(){

        if ($currentScreen == 'correct') {
            hide_screens();
            show_screen('map');
        }
        else
        {
            hide_screens();
            show_screen('riddle1');
        };
    });
    
};

