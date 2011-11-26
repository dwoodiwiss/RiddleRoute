$(document).ready(function loader() {
    urlGetter();
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

function urlGetter(){
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
     
    $answer1 = /Swithun/i;
    $answer2 = /Wykeham/i;

    if ($inputValue.match($answer1)) {
        hide_screens();
        show_screen('correct');

        scoreStore();

        return false;
    }
    else{
        hide_screens();
        show_screen('incorrect');

        scoreStore();

        return false;
    };
});

function scoreStore(){
    localStorage.setItem($url, $currentScreen);
    //console.log('LocalStorage=', localStorage.incorrect);
    //console.log('LocalStorage Total =', localStorage);
};

function mapIcons(){
    switch(localStorage.riddle1) {
        case 'correct':
            $('#spot1').removeClass('incorrect'); 
            $('#spot1').addClass('correct');
            break;
            
        case 'incorrect':
            $('#spot1').removeClass('correct');
            $('#spot1').addClass('incorrect');
            break;

        default:
            $('#spot1').removeClass('correct');
            $('#spot1').removeClass('incorrect');
    }
};


function buttons(){

    $('.map').click(function(){

        mapIcons();

        if ($currentScreen == 'map') {
            hide_screens();
            show_screen('howToPlay');
        }
        else{
            hide_screens();
            show_screen('map');
        };

    });

    $('.riddle').click(function(){

        mapIcons();

        if ($currentScreen == 'correct') {
            hide_screens();
            show_screen('map');
            console.log(localStorage);
        }
        else if ($currentScreen == 'howToPlay') {
            hide_screens();
            show_screen('map');
        }
        else{
            hide_screens();
            show_screen($url);
        };
    });

    $('.clue').click(function(){

        //localStorage.clear();
        //console.log('localStorage has been cleared');
        console.log(localStorage.riddle1);

    });

};
