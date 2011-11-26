$(document).ready(function loader() {
    urlGetter();
    buttons();
    answerDetect();
      
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
    $url = window.location.search.replace(/\?page=/, '');
    console.log('URL =', $url);
};

function inputGetter(){

    switch($url) {
        case 'riddle1':
            $inputValue = $('input[class="answer1"]').val();
            console.log('INPUT =', $inputValue);
            break;
        
        case 'riddle2':
            $inputValue = $('input[class="answer2"]').val();
            console.log('INPUT =', $inputValue);
            break;

        default:
            // do nothing! 
    };
    

};

function answerDetect(){
    switch($url) {
        case 'riddle1':
            $answer = /Swithun/i;
            //console.log($answer);
            break;
            
        case 'riddle2':
            $answer = /Wykeham/i;
            //console.log($answer);
            break;

        default:
            $answer = 'NULL';
            break;
    };
};

// Take Input and validate
$(".answerForm").submit(function() {
    inputGetter();

    if ($inputValue.match($answer)) {
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

    if (localStorage.riddle1 == undefined) {
        // do nothing
    }
    else{
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

    if (localStorage.riddle2 == undefined) {
        // do nothing
    }
    else{
        switch(localStorage.riddle2) {
            case 'correct':
                $('#spot2').removeClass('incorrect'); 
                $('#spot2').addClass('correct');
                break;
                
            case 'incorrect':
                $('#spot2').removeClass('correct');
                $('#spot2').addClass('incorrect');
                break;

            default:
                $('#spot2').removeClass('correct');
                $('#spot2').removeClass('incorrect');
        }
    };

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
            //console.log(localStorage);
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

        localStorage.clear();
        console.log('localStorage has been cleared');
        // console.log($answer);

    });

};
