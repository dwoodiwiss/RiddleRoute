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
    localStorage.setItem($currentScreen, $url);
    console.log('LocalStorage=', localStorage.url);
    console.log('LocalStorage Total =', localStorage);
};

function buttons(){

    $('.map').click(function(){

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

        if ($currentScreen == 'correct') {
            hide_screens();
            show_screen('map');
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

        //console.log(localStorage);
        localStorage.clear();
        console.log('localStorage has been cleared');
        console.log(localStorage);

    });

};
