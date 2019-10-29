(function () {
    var intervalPopIn;

    $("#credits_click").click(function () {
        $("#credits").css("display", "block");
        document.documentElement.style.overflow = 'hidden';
    });

    $("#close_credits").click(function () {
        intervalPopIn = setInterval(changeOpacityPopIn, 50);
    });

    function changeOpacityPopIn() {
        var opacity = Number($("#credits").css("opacity"));

        if (opacity == 0) {
            clearInterval(intervalPopIn);
            $("#credits").css("display", "none");
            $("#credits").css("opacity", "1");
            document.documentElement.style.overflow = 'visible';
        } else {
            opacity -= 0.05;
            $("#credits").css("opacity", opacity);
        }
    }
    $("#credits_div").scroll(function(){
        $("#close_credits").css({"top": ($("#credits_div").scrollTop()) + 15 + "px"});
      });
})();