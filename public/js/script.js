$(document).ready(function loader() {
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
};

function inputGetter(){
    $inputValue = $('input:first').val();
    console.log('INPUT =', $inputValue);
};

// Take Input and validate
$("#answerForm").submit(function() {
    inputGetter();
    
    $answer1 = /Swithun/i
    $answer2 = /Whykenham/i

    // perhaps try an if else again and see how it goes.

    switch($inputValue) {
        // Riddle1 = Saint Swithun
        case $answer1:
            hide_screens();
            show_screen('correct');
           
            //console.log('THIS', $url);
            localStorage.setItem('complete', $url);
            console.log('LocalStorage=', localStorage.complete);
            console.log('LocalStorage Total =', localStorage);
             
            return false;
            break;
            
        default:
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
            show_screen($url);
        };
    });

    $('.clue').click(function(){
        
        //console.log(localStorage);
        localStorage.clear();
        console.log('localStorage has been cleared');
    });
    
};
