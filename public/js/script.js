// @TODO updated readme.md and push project to github
// @TODO create credit screen that spans $url == wellDone
// @TODO add icons to wellDone screen

$(document).ready(function loader() {

  urlGetter();
  buttons();
  answerDetect();
  //scoreSorter();
  scoreTotal();
  inputReset();
  detectStandAlone();

  titleChanger();
  hide_screens();
  show_screen('loading');

  // @TODO TEST THIS CODE
  $('input').css('display', 'none');

});

$(window).load(function() {

  // @TODO TEST THIS CODE
  $('input').css('display', 'inline');
  hide_screens();
  show_screen($url);

});

// webapp detection
// WORKING 
function detectStandAlone() {
  $standalone = window.navigator.standalone;

  //console.log($standalone);

  if ($standalone == true) {
    //$('input').css('background-color', 'black');
  }else{
    //console.log('not standalone');
  }

};


//urlGetter();
//$('#'+$url).load(function preLoader() {
//hide_screens();
//show_screen($url);
//});

function hideKeyboard() {
  document.activeElement.blur();
  $("input").blur();
};

function inputReset() {

  var el = $('input[type=text], textarea');
  el.focus(function(e) {
    if (e.target.value == e.target.defaultValue)
    e.target.value = '';
  //console.log('focused');
  });
  el.blur(function(e) {
    if (e.target.value == '')
    e.target.value = e.target.defaultValue;
  });

};

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

    case 'riddle4':
      document.title = "Riddle Route :: Riddle 4";
      break;

    case 'riddle5':
      document.title = "Riddle Route :: Riddle 5";
      break;

    default:
      document.title = "Home :: Riddle Route";
      break;
  };
};

function inputGetter(){
  // RETURNS $inputValue
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

    case 'riddle4':
      $inputValue = $('input[class="answer4"]').val();
      console.log('INPUT =', $inputValue);
      break;

    case 'riddle5':
      $inputValue = $('input[class="answer5"]').val();
      console.log('INPUT =', $inputValue);
      break;

    case 'riddle6':
      $inputValue = $('input[class="answer6"]').val();
      console.log('INPUT =', $inputValue);
      break;

    case 'riddle7':
      $inputValue = $('input[class="answer7"]').val();
      console.log('INPUT =', $inputValue);
      break;

    case 'riddle8':
      $inputValue = $('input[class="answer8"]').val();
      console.log('INPUT =', $inputValue);
      break;

    case 'riddle9':
      $inputValue = $('input[class="answer9"]').val();
      console.log('INPUT =', $inputValue);
      break;

    case 'riddle10':
      $inputValue = $('input[class="answer10"]').val();
      console.log('INPUT =', $inputValue);
      break;

    default:
      // do nothing! 
  };
};

function answerDetect(){
  switch($url) {
    case 'riddle1':
      $answer = /Window/i;
      break;

    case 'riddle2':
      $answer = /Austen/i;
      break;

    case 'riddle3':
      $answer = /Font/i;
      break;

    case 'riddle4':
      $answer = /Crypt/i;
      break;

    case 'riddle5':
      $answer = /Mortuary/i;
      break;

    case 'riddle6':
      $answer = /Swithun/i;
      break;

    case 'riddle7':
      $answer = /Walker/i;
      break;

    case 'riddle8':
      $answer = /Fisherman/i;
      break;

    case 'riddle9':
      $answer = /Bible/i;
      break;

    case 'riddle10':
      $answer = /Wykeham/i;
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

    hideKeyboard();
    scoreStore();

    return false;
  }
  else{
    hide_screens();
    show_screen('incorrect');

    hideKeyboard();
    scoreStore();

    return false;
  };
});

// do if localStorage != empty 
function scoreStore(){
  localStorage.setItem($url, $currentScreen);
};

function scoreTotal(){
  $a = Array();
  for (var key in localStorage){
    $a.push(localStorage.getItem(key));
  }
  $answerTotal = $a;
  //console.log($answerTotal);
  scoreSetter();
};

function scoreSetter(){

  count = {}
  for(var i = 0; i < $answerTotal.length; i++){
    count[$answerTotal[i]] = (count[$answerTotal[i]] || 0) + 1
  }
 
  $TOTAL = count.correct;
  console.log($TOTAL);
  
  $('#dynamicScore').text($TOTAL + '/10');

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

  if (localStorage.riddle4 == undefined) {
    // do nothing
  }
  else{
    switch(localStorage.riddle4) {
      case 'correct':
        $('#spot4').removeClass('incorrect'); 
        $('#spot4').addClass('correct');
        break;

      case 'incorrect':
        $('#spot4').removeClass('correct');
        $('#spot4').addClass('incorrect');
        break;

      default:
        $('#spot4').removeClass('correct');
        $('#spot4').removeClass('incorrect');
    }
  };

  if (localStorage.riddle5 == undefined) {
    // do nothing
  }
  else{
    switch(localStorage.riddle5) {
      case 'correct':
        $('#spot5').removeClass('incorrect'); 
        $('#spot5').addClass('correct');
        break;

      case 'incorrect':
        $('#spot5').removeClass('correct');
        $('#spot5').addClass('incorrect');
        break;

      default:
        $('#spot5').removeClass('correct');
        $('#spot5').removeClass('incorrect');
    }
  };

  if (localStorage.riddle6 == undefined) {
    // do nothing
  }
  else{
    switch(localStorage.riddle6) {
      case 'correct':
        $('#spot6').removeClass('incorrect'); 
        $('#spot6').addClass('correct');
        break;

      case 'incorrect':
        $('#spot6').removeClass('correct');
        $('#spot6').addClass('incorrect');
        break;

      default:
        $('#spot6').removeClass('correct');
        $('#spot6').removeClass('incorrect');
    }
  };

  if (localStorage.riddle7 == undefined) {
    // do nothing
  }
  else{
    switch(localStorage.riddle7) {
      case 'correct':
        $('#spot7').removeClass('incorrect'); 
        $('#spot7').addClass('correct');
        break;

      case 'incorrect':
        $('#spot7').removeClass('correct');
        $('#spot7').addClass('incorrect');
        break;

      default:
        $('#spot7').removeClass('correct');
        $('#spot7').removeClass('incorrect');
    }
  };

  if (localStorage.riddle8 == undefined) {
    // do nothing
  }
  else{
    switch(localStorage.riddle8) {
      case 'correct':
        $('#spot8').removeClass('incorrect'); 
        $('#spot8').addClass('correct');
        break;

      case 'incorrect':
        $('#spot8').removeClass('correct');
        $('#spot8').addClass('incorrect');
        break;

      default:
        $('#spot8').removeClass('correct');
        $('#spot8').removeClass('incorrect');
    }
  };

  if (localStorage.riddle9 == undefined) {
    // do nothing
  }
  else{
    switch(localStorage.riddle9) {
      case 'correct':
        $('#spot9').removeClass('incorrect'); 
        $('#spot9').addClass('correct');
        break;

      case 'incorrect':
        $('#spot9').removeClass('correct');
        $('#spot9').addClass('incorrect');
        break;

      default:
        $('#spot9').removeClass('correct');
        $('#spot9').removeClass('incorrect');
    }
  };

  if (localStorage.riddle10 == undefined) {
    // do nothing
  }
  else{
    switch(localStorage.riddle10) {
      case 'correct':
        $('#spot10').removeClass('incorrect'); 
        $('#spot10').addClass('correct');
        break;

      case 'incorrect':
        $('#spot10').removeClass('correct');
        $('#spot10').addClass('incorrect');
        break;

      default:
        $('#spot10').removeClass('correct');
        $('#spot10').removeClass('incorrect');
    }
  };

};

function scoreSorter(){
  // CURRENTLY UNUSED
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

  $('#getCert').click(function(){
    hide_screens();
    show_screen('getCertificate');
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

      case 'clue4':
        hide_screens();
        show_screen('riddle4');
        break;

      case 'clue5':
        hide_screens();
        show_screen('riddle5');
        break;

      case 'clue6':
        hide_screens();
        show_screen('riddle6');
        break;

      case 'clue7':
        hide_screens();
        show_screen('riddle7');
        break;

      case 'clue8':
        hide_screens();
        show_screen('riddle8');
        break;

      case 'clue9':
        hide_screens();
        show_screen('riddle9');
        break;

      case 'clue10':
        hide_screens();
        show_screen('riddle10');
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

      case 'riddle4':
        if ($currentScreen == 'map') {
          hide_screens();
          show_screen('wellDone');
        }else{
          hide_screens();
          show_screen('clue4');
        };
        break;

      case 'riddle5':
        if ($currentScreen == 'map') {
          hide_screens();
          show_screen('wellDone');
        }else{
          hide_screens();
          show_screen('clue5');
        };
        break;

      case 'riddle6':
        if ($currentScreen == 'map') {
          hide_screens();
          show_screen('wellDone');
        }else{
          hide_screens();
          show_screen('clue6');
        };
        break;

      case 'riddle7':
        if ($currentScreen == 'map') {
          hide_screens();
          show_screen('wellDone');
        }else{
          hide_screens();
          show_screen('clue7');
        };
        break;

      case 'riddle8':
        if ($currentScreen == 'map') {
          hide_screens();
          show_screen('wellDone');
        }else{
          hide_screens();
          show_screen('clue8');
        };
        break;

      case 'riddle9':
        if ($currentScreen == 'map') {
          hide_screens();
          show_screen('wellDone');
        }else{
          hide_screens();
          show_screen('clue9');
        };
        break;

      case 'riddle10':
        if ($currentScreen == 'map') {
          hide_screens();
          show_screen('wellDone');
        }else{
          hide_screens();
          show_screen('clue10');
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
