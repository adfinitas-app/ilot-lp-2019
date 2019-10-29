(function () {
    var intervalPopIn;

    $("#mentions_click").click(function () {
        $("#mentions").css("display", "block");
        document.documentElement.style.overflow = 'hidden';
    });

    $("#close_mentions").click(function () {
        intervalPopIn = setInterval(changeOpacityPopIn, 50);
    });

    function changeOpacityPopIn() {
        var opacity = Number($("#mentions").css("opacity"));

        if (opacity == 0) {
            clearInterval(intervalPopIn);
            $("#mentions").css("display", "none");
            $("#mentions").css("opacity", "1");
            document.documentElement.style.overflow = 'visible';
        } else {
            opacity -= 0.05;
            $("#mentions").css("opacity", opacity);
        }
    }
    $("#mentions_div").scroll(function(){
        $("#close_mentions").css({"top": ($("#mentions_div").scrollTop()) + 15 + "px"});
      });
})();