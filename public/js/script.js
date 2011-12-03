// @TODO refactor vars to make more sense, riddle1, riddle2
// @TODO create score screen
// @TODO check 3g loading, .ready?
// @TODO bind #loading to .ready, bind the rest to .load($url)?
// 16th december - all workable

$(document).ready(function loader() {
   
    urlGetter();
    buttons();
    answerDetect();
    scoreSorter();
    scoreTotal();

    titleChanger();
    hide_screens();
    show_screen($url);
});

//urlGetter();
//$('#'+$url).load(function preLoader() {
    //hide_screens();
    //show_screen($url);
//});

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

function titleChanger(){
        
    inputGetter();
    switch($url) {
        case 'riddle1':
            document.title = "Riddle Route :: Riddle 1";
            break;
        
        case 'riddle2':
            document.title = "Riddle Route :: Riddle 2";
            break;

        case 'riddle3':
            document.title = "Riddle Route :: Riddle 3";
            break;

        default:
            document.title = "Home :: Riddle Route";
            break;
    };
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

        case 'riddle3':
            $inputValue = $('input[class="answer3"]').val();
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

        case 'riddle3':
            $answer = /Austen/i;
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

    if (localStorage.riddle3 == undefined) {
        // do nothing
    }
    else{
        switch(localStorage.riddle3) {
            case 'correct':
                $('#spot3').removeClass('incorrect'); 
                $('#spot3').addClass('correct');
                break;
                
            case 'incorrect':
                $('#spot3').removeClass('correct');
                $('#spot3').addClass('incorrect');
                break;

            default:
                $('#spot3').removeClass('correct');
                $('#spot3').removeClass('incorrect');
        }
    };
};

function scoreSorter(){
        
        // window.localStorage?
        $scoreData = window.localStorage;

        $score1 = $scoreData['riddle1'];
        $score2 = $scoreData['riddle2'];
        $score3 = $scoreData['riddle3'];
        
        switch($score1) {
            case 'correct':
                $('#score1').addClass('correct');
                break;
            
            case 'incorrect':
                $('#score1').addClass('incorrect');
                break;

            default:
                // do nothing?
        };

        switch($score2) {
            case 'correct':
                $('#score2').addClass('correct');
                break;
            
            case 'incorrect':
                $('#score2').addClass('incorrect');
                break;

            default:
                // do nothing
        };

        switch($score3) {
            case 'correct':
                $('#score3').addClass('correct');
                break;
            
            case 'incorrect':
                $('#score3').addClass('incorrect');
                break;

            default:
                // do nothing
        };
};

function scoreTotal(){

    $result = '';
    for (var i = 1; i < localStorage.length +1; i++) {
        
        $result = localStorage.getItem('riddle'+(i));

        console.log($result);
    };

    for (var i = 0; i < $result.length; i++) {
        if ($result == 'correct') {
            $scoreValue = 0;
            
            $scoreValue = $scoreValue ++;

        }else{
            $scoreValue = '0/10';
        };
        //console.log($scoreValue);
    };
};

function buttons(){

    $('.reset').click(function(){
        localStorage.clear(); 
        console.log('localStorage has be cleared');
        hide_screens();
        show_screen('map2');
    });
    
    $('.score').click(function(){
        hide_screens();
        show_screen('score');
    });

    $('.howToPlay').click(function(){
        hide_screens();
        show_screen('howToPlay');
    });

    $('.map').click(function(){

        mapIcons();
       
        if ($url == 'wellDone') {
            hide_screens();
            show_screen('score');
        };

        switch($currentScreen) {
            case 'map':
                hide_screens();
                show_screen($url);
                break;
            
            case 'clue1':
                hide_screens();
                show_screen('riddle1');
                break;

            case 'clue2':
                hide_screens();
                show_screen('riddle2');
                break;

            case 'clue3':
                hide_screens();
                show_screen('riddle3');
                break;

            default:
                hide_screens();
                show_screen('map');
        }
    });

    $('.riddle').click(function(){
        
        switch($url) {
            case 'howToPlay':
                $map = 'map2';
                break;
            
            case 'wellDone':
                $map = 'map2';
                break;

            default:
                $map = 'map';
        } 

        if ($currentScreen == 'correct') {
            hide_screens();
            mapIcons();
            show_screen($map);
        }
        else if ($currentScreen == 'howToPlay') {
            hide_screens();
            show_screen($map);
        }
        else{
            // only affecting incorrect screen?
            hide_screens();
            show_screen($url);
        };
    });

    $('.clue').click(function(){
        
        $clue = $url;

        switch($url) {
            case 'riddle1':
                
                if ($currentScreen == 'map') {
                    hide_screens();
                    show_screen('wellDone');
                }else{
                    hide_screens();
                    show_screen('clue1');
                };
                break;

            case 'riddle2':
                if ($currentScreen == 'map') {
                    hide_screens();
                    show_screen('wellDone');
                }else{
                    hide_screens();
                    show_screen('clue2');
                };
                break;

            case 'riddle3':
                if ($currentScreen == 'map') {
                    hide_screens();
                    show_screen('wellDone');
                }else{
                    hide_screens();
                    show_screen('clue3');
                };
                break;

            default:
                hide_screens();
                show_screen('map');
                break;
        }
    


        //localStorage.clear();
        //console.log('localStorage has been cleared');
        // console.log($answer);

    });

};
