(function ($) {

    var answerDetect, buttons, detectStandAlone, hideKeyboard, hide_screens, inputGetter, inputReset, loader, mapIcons, scoreSetter, scoreSorter, scoreStore, scoreTotal, show_screen, titleChanger, urlGetter;
    detectStandAlone = function() {
        var $standalone;
        $standalone = window.navigator.standalone;
        if ($standalone === true) {} else {

        }
    };
    hideKeyboard = function() {
        document.activeElement.blur();
        return $("input").blur();
    };
    inputReset = function() {
        var el;
        el = $("input[type=text], textarea");
        el.focus(function(e) {
            if (e.target.value === e.target.defaultValue) {
                return e.target.value = "";
            }
        });
        return el.blur(function(e) {
            if (e.target.value === "") {
                return e.target.value = e.target.defaultValue;
            }
        });
    };
    hide_screens = function() {
        return $(".screen").hide();
    };
    show_screen = function(id) {
        var $currentScreen;
        $("#" + id).show();
        $currentScreen = id;
        return console.log("screen =", $currentScreen);
    };
    urlGetter = function() {
        var $url;
        $url = window.location.search.replace(/\?page=/, "");
        return console.log("URL =", $url);
    };
    titleChanger = function() {
        inputGetter();
        switch ($url) {
            case "riddle1":
                return document.title = "Riddle Route :: Riddle 1";
            case "riddle2":
                return document.title = "Riddle Route :: Riddle 2";
            case "riddle3":
                return document.title = "Riddle Route :: Riddle 3";
            case "riddle4":
                return document.title = "Riddle Route :: Riddle 4";
            case "riddle5":
                return document.title = "Riddle Route :: Riddle 5";
            default:
                return document.title = "Home :: Riddle Route";
        }
    };
    inputGetter = function() {
        var $inputValue;
        switch ($url) {
            case "riddle1":
                $inputValue = $("input[class=\"answer1\"]").val();
                return console.log("INPUT =", $inputValue);
            case "riddle2":
                $inputValue = $("input[class=\"answer2\"]").val();
                return console.log("INPUT =", $inputValue);
            case "riddle3":
                $inputValue = $("input[class=\"answer3\"]").val();
                return console.log("INPUT =", $inputValue);
            case "riddle4":
                $inputValue = $("input[class=\"answer4\"]").val();
                return console.log("INPUT =", $inputValue);
            case "riddle5":
                $inputValue = $("input[class=\"answer5\"]").val();
                return console.log("INPUT =", $inputValue);
            case "riddle6":
                $inputValue = $("input[class=\"answer6\"]").val();
                return console.log("INPUT =", $inputValue);
            case "riddle7":
                $inputValue = $("input[class=\"answer7\"]").val();
                return console.log("INPUT =", $inputValue);
            case "riddle8":
                $inputValue = $("input[class=\"answer8\"]").val();
                return console.log("INPUT =", $inputValue);
            case "riddle9":
                $inputValue = $("input[class=\"answer9\"]").val();
                return console.log("INPUT =", $inputValue);
            case "riddle10":
                $inputValue = $("input[class=\"answer10\"]").val();
                return console.log("INPUT =", $inputValue);
        }
    };
    answerDetect = function() {
        var $answer;
        switch ($url) {
            case "riddle1":
                return $answer = /Window/i;
            case "riddle2":
                return $answer = /Austen/i;
            case "riddle3":
                return $answer = /Font/i;
            case "riddle4":
                return $answer = /Crypt/i;
            case "riddle5":
                return $answer = /Mortuary/i;
            case "riddle6":
                return $answer = /Swithun/i;
            case "riddle7":
                return $answer = /Walker/i;
            case "riddle8":
                return $answer = /Fisherman/i;
            case "riddle9":
                return $answer = /Bible/i;
            case "riddle10":
                return $answer = /Wykeham/i;
            default:
                return $answer = "NULL";
        }
    };
    scoreStore = function() {
        return localStorage.setItem($url, $currentScreen);
    };
    scoreTotal = function() {
        var $a, $answerTotal, key;
        $a = Array();
        for (key in localStorage) {
            $a.push(localStorage.getItem(key));
        }
        $answerTotal = $a;
        return scoreSetter();
    };
    scoreSetter = function() {
        var $TOTAL, count, i;
        count = {};
        i = 0;
        while (i < $answerTotal.length) {
            count[$answerTotal[i]] = (count[$answerTotal[i]] || 0) + 1;
            i++;
        }
        $TOTAL = count.correct;
        if (typeof $TOTAL === "undefined") {
            $TOTAL = "0";
        }
        console.log($TOTAL);
        return $("#dynamicScore").text($TOTAL + "/10");
    };
    mapIcons = function() {
        if (localStorage.riddle1 !== undefined) {
            switch (localStorage.riddle1) {
                case "correct":
                    $("#spot1").removeClass("incorrect");
                    $("#spot1").addClass("correct");
                    break;
                case "incorrect":
                    $("#spot1").removeClass("correct");
                    $("#spot1").addClass("incorrect");
                    break;
                default:
                    $("#spot1").removeClass("correct");
                    $("#spot1").removeClass("incorrect");
            }
        }
        if (localStorage.riddle2 !== undefined) {
            switch (localStorage.riddle2) {
                case "correct":
                    $("#spot2").removeClass("incorrect");
                    $("#spot2").addClass("correct");
                    break;
                case "incorrect":
                    $("#spot2").removeClass("correct");
                    $("#spot2").addClass("incorrect");
                    break;
                default:
                    $("#spot2").removeClass("correct");
                    $("#spot2").removeClass("incorrect");
            }
        }
        if (localStorage.riddle3 !== undefined) {
            switch (localStorage.riddle3) {
                case "correct":
                    $("#spot3").removeClass("incorrect");
                    $("#spot3").addClass("correct");
                    break;
                case "incorrect":
                    $("#spot3").removeClass("correct");
                    $("#spot3").addClass("incorrect");
                    break;
                default:
                    $("#spot3").removeClass("correct");
                    $("#spot3").removeClass("incorrect");
            }
        }
        if (localStorage.riddle4 !== undefined) {
            switch (localStorage.riddle4) {
                case "correct":
                    $("#spot4").removeClass("incorrect");
                    $("#spot4").addClass("correct");
                    break;
                case "incorrect":
                    $("#spot4").removeClass("correct");
                    $("#spot4").addClass("incorrect");
                    break;
                default:
                    $("#spot4").removeClass("correct");
                    $("#spot4").removeClass("incorrect");
            }
        }
        if (localStorage.riddle5 !== undefined) {
            switch (localStorage.riddle5) {
                case "correct":
                    $("#spot5").removeClass("incorrect");
                    $("#spot5").addClass("correct");
                    break;
                case "incorrect":
                    $("#spot5").removeClass("correct");
                    $("#spot5").addClass("incorrect");
                    break;
                default:
                    $("#spot5").removeClass("correct");
                    $("#spot5").removeClass("incorrect");
            }
        }
        if (localStorage.riddle6 !== undefined) {
            switch (localStorage.riddle6) {
                case "correct":
                    $("#spot6").removeClass("incorrect");
                    $("#spot6").addClass("correct");
                    break;
                case "incorrect":
                    $("#spot6").removeClass("correct");
                    $("#spot6").addClass("incorrect");
                    break;
                default:
                    $("#spot6").removeClass("correct");
                    $("#spot6").removeClass("incorrect");
            }
        }
        if (localStorage.riddle7 !== undefined) {
            switch (localStorage.riddle7) {
                case "correct":
                    $("#spot7").removeClass("incorrect");
                    $("#spot7").addClass("correct");
                    break;
                case "incorrect":
                    $("#spot7").removeClass("correct");
                    $("#spot7").addClass("incorrect");
                    break;
                default:
                    $("#spot7").removeClass("correct");
                    $("#spot7").removeClass("incorrect");
            }
        }
        if (localStorage.riddle8 !== undefined) {
            switch (localStorage.riddle8) {
                case "correct":
                    $("#spot8").removeClass("incorrect");
                    $("#spot8").addClass("correct");
                    break;
                case "incorrect":
                    $("#spot8").removeClass("correct");
                    $("#spot8").addClass("incorrect");
                    break;
                default:
                    $("#spot8").removeClass("correct");
                    $("#spot8").removeClass("incorrect");
            }
        }
        if (localStorage.riddle9 !== undefined) {
            switch (localStorage.riddle9) {
                case "correct":
                    $("#spot9").removeClass("incorrect");
                    $("#spot9").addClass("correct");
                    break;
                case "incorrect":
                    $("#spot9").removeClass("correct");
                    $("#spot9").addClass("incorrect");
                    break;
                default:
                    $("#spot9").removeClass("correct");
                    $("#spot9").removeClass("incorrect");
            }
        }
        if (localStorage.riddle10 !== undefined) {
            switch (localStorage.riddle10) {
                case "correct":
                    $("#spot10").removeClass("incorrect");
                    return $("#spot10").addClass("correct");
                case "incorrect":
                    $("#spot10").removeClass("correct");
                    return $("#spot10").addClass("incorrect");
                default:
                    $("#spot10").removeClass("correct");
                    return $("#spot10").removeClass("incorrect");
            }
        }
    };
    scoreSorter = function() {
        var $score1, $score10, $score2, $score3, $score4, $score5, $score6, $score7, $score8, $score9, $scoreData;
        $scoreData = window.localStorage;
        $score1 = $scoreData["riddle1"];
        $score2 = $scoreData["riddle2"];
        $score3 = $scoreData["riddle3"];
        $score4 = $scoreData["riddle4"];
        $score5 = $scoreData["riddle5"];
        $score6 = $scoreData["riddle6"];
        $score7 = $scoreData["riddle7"];
        $score8 = $scoreData["riddle8"];
        $score9 = $scoreData["riddle9"];
        $score10 = $scoreData["riddle10"];
        switch ($score1) {
            case "correct":
                $("#score1").addClass("correct");
                break;
            case "incorrect":
                $("#score1").addClass("incorrect");
                break;
        }
        switch ($score2) {
            case "correct":
                $("#score2").addClass("correct");
                break;
            case "incorrect":
                $("#score2").addClass("incorrect");
                break;
        }
        switch ($score3) {
            case "correct":
                $("#score3").addClass("correct");
                break;
            case "incorrect":
                $("#score3").addClass("incorrect");
                break;
        }
        switch ($score4) {
            case "correct":
                $("#score4").addClass("correct");
                break;
            case "incorrect":
                $("#score4").addClass("incorrect");
                break;
        }
        switch ($score5) {
            case "correct":
                $("#score5").addClass("correct");
                break;
            case "incorrect":
                $("#score5").addClass("incorrect");
                break;
        }
        switch ($score6) {
            case "correct":
                $("#score6").addClass("correct");
                break;
            case "incorrect":
                $("#score6").addClass("incorrect");
                break;
        }
        switch ($score7) {
            case "correct":
                $("#score7").addClass("correct");
                break;
            case "incorrect":
                $("#score7").addClass("incorrect");
                break;
        }
        switch ($score8) {
            case "correct":
                $("#score8").addClass("correct");
                break;
            case "incorrect":
                $("#score8").addClass("incorrect");
                break;
        }
        switch ($score9) {
            case "correct":
                $("#score9").addClass("correct");
                break;
            case "incorrect":
                $("#score9").addClass("incorrect");
                break;
        }
        switch ($score10) {
            case "correct":
                return $("#score10").addClass("correct");
            case "incorrect":
                return $("#score10").addClass("incorrect");
        }
    };
    buttons = function() {
        $(".reset").click(function() {
            localStorage.clear();
            console.log("localStorage has be cleared");
            hide_screens();
            return show_screen("map2");
        });
        $(".score").click(function() {
            hide_screens();
            return show_screen("score");
        });
        $(".howToPlay").click(function() {
            hide_screens();
            return show_screen("howToPlay");
        });
        $("#getCert").click(function() {
            hide_screens();
            return show_screen("getCertificate");
        });
        $(".getCredits").click(function() {
            hide_screens();
            return show_screen("credits");
        });
        $(".map").click(function() {
            mapIcons();
            switch ($currentScreen) {
                case "credits":
                    hide_screens();
                    return show_screen("score");
                case "map":
                    hide_screens();
                    return show_screen($url);
                case "clue1":
                    hide_screens();
                    return show_screen("riddle1");
                case "clue2":
                    hide_screens();
                    return show_screen("riddle2");
                case "clue3":
                    hide_screens();
                    return show_screen("riddle3");
                case "clue4":
                    hide_screens();
                    return show_screen("riddle4");
                case "clue5":
                    hide_screens();
                    return show_screen("riddle5");
                case "clue6":
                    hide_screens();
                    return show_screen("riddle6");
                case "clue7":
                    hide_screens();
                    return show_screen("riddle7");
                case "clue8":
                    hide_screens();
                    return show_screen("riddle8");
                case "clue9":
                    hide_screens();
                    return show_screen("riddle9");
                case "clue10":
                    hide_screens();
                    return show_screen("riddle10");
                default:
                    hide_screens();
                    return show_screen("map");
            }
        });
        $(".riddle").click(function() {
            var $map;
            switch ($url) {
                case "howToPlay":
                    $map = "map2";
                    break;
                case "wellDone":
                    $map = "map2";
                    break;
                default:
                    $map = "map";
            }
            if ($currentScreen === "correct") {
                hide_screens();
                mapIcons();
                return show_screen($map);
            } else if ($currentScreen === "howToPlay") {
                hide_screens();
                return show_screen($map);
            } else {
                hide_screens();
                return show_screen($url);
            }
        });
        return $(".clue").click(function() {
            var $clue;
            $clue = $url;
            switch ($url) {
                case "riddle1":
                    if ($currentScreen === "map") {
                        hide_screens();
                        return show_screen("wellDone");
                    } else {
                        hide_screens();
                        return show_screen("clue1");
                    }
                    break;
                case "riddle2":
                    if ($currentScreen === "map") {
                        hide_screens();
                        return show_screen("wellDone");
                    } else {
                        hide_screens();
                        return show_screen("clue2");
                    }
                    break;
                case "riddle3":
                    if ($currentScreen === "map") {
                        hide_screens();
                        return show_screen("wellDone");
                    } else {
                        hide_screens();
                        return show_screen("clue3");
                    }
                    break;
                case "riddle4":
                    if ($currentScreen === "map") {
                        hide_screens();
                        return show_screen("wellDone");
                    } else {
                        hide_screens();
                        return show_screen("clue4");
                    }
                    break;
                case "riddle5":
                    if ($currentScreen === "map") {
                        hide_screens();
                        return show_screen("wellDone");
                    } else {
                        hide_screens();
                        return show_screen("clue5");
                    }
                    break;
                case "riddle6":
                    if ($currentScreen === "map") {
                        hide_screens();
                        return show_screen("wellDone");
                    } else {
                        hide_screens();
                        return show_screen("clue6");
                    }
                    break;
                case "riddle7":
                    if ($currentScreen === "map") {
                        hide_screens();
                        return show_screen("wellDone");
                    } else {
                        hide_screens();
                        return show_screen("clue7");
                    }
                    break;
                case "riddle8":
                    if ($currentScreen === "map") {
                        hide_screens();
                        return show_screen("wellDone");
                    } else {
                        hide_screens();
                        return show_screen("clue8");
                    }
                    break;
                case "riddle9":
                    if ($currentScreen === "map") {
                        hide_screens();
                        return show_screen("wellDone");
                    } else {
                        hide_screens();
                        return show_screen("clue9");
                    }
                    break;
                case "riddle10":
                    if ($currentScreen === "map") {
                        hide_screens();
                        return show_screen("wellDone");
                    } else {
                        hide_screens();
                        return show_screen("clue10");
                    }
                    break;
                default:
                    hide_screens();
                    return show_screen("map");
            }
        });
    };
    $(document).ready(loader = function() {
        urlGetter();
        buttons();
        answerDetect();
        scoreSorter();
        scoreTotal();
        inputReset();
        detectStandAlone();
        titleChanger();
        hide_screens();
        show_screen("loading");
        return $("input").css("display", "none");
    });
    $(window).load(function() {
        $("input").css("display", "inline");
        hide_screens();
        return show_screen($url);
    });
    $(".answerForm").submit(function() {
        inputGetter();
        if ($inputValue.match($answer)) {
            hide_screens();
            show_screen("correct");
            hideKeyboard();
            scoreStore();
            return false;
        } else {
            hide_screens();
            show_screen("incorrect");
            hideKeyboard();
            scoreStore();
            return false;
        }
    });

})(jQuery);
