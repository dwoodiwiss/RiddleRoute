$("#answerForm").submit(function() {
    if ($("input:first").val() == "Jane Austin") {
        $("#result").text("Correct!").show().fadeOut(1000);
        return false;
    }
    $("#result").text("Incorrect").show().fadeOut(1000);
    return false;
});
