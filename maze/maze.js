$(document).ready(function() {

    var touch = false;
    var inMaze = false;
    var passedStart = false;

    $(".boundary").hover(
        function () {
            if(passedStart === true) {
                $(".boundary").addClass("youlose");
                touch = true;
            }
        });

    $("#end").hover(
        function () {
            if (passedStart !== true) {

            }
            else if (touch === false && inMaze === true && passedStart === true) {
                $("#status").text("You win!");
                passedStart = false
            } else {
                $(".boundary").addClass("youlose");
                $("#status").text("Sorry, you lost!");
                touch = true;
            }
        });

    $("#start").click(
        function () {
            //alert('start');
            $(".boundary").removeClass("youlose");
            touch = false;
            $("#status").text("Now playing");
            passedStart = true;

        });

    $("#maze").hover(
        function () {
            inMaze = true;
        },
        function () {
            inMaze = false;
        });

}) ();