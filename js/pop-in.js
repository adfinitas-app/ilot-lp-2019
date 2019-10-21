(function () {
    var description_pop_in = "#description_pop_in_";
    var intervalPopIn;

    for (var i = 1; i <= 3; i++) {
        $(description_pop_in + String(i)).click(function() {
            $("#pop_in").css("display", "block");
        });
    }

    $("#close_pop_in").click(function() {
        intervalPopIn = setInterval(changeOpacityPopIn, 50);
    });

    function changeOpacityPopIn() {
        var opacity = Number($("#pop_in").css("opacity"));

        if (opacity == 0) {
            clearInterval(intervalPopIn);
            $("#pop_in").css("display", "none");
            $("#pop_in").css("opacity", "1");
        } else {
            opacity -= 0.05;
            $("#pop_in").css("opacity", opacity);
        }
    }
})();