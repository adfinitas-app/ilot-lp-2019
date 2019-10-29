function checkHeight() {
    var heightElement = window.scrollY;
    if (heightElement <= 0) {
        document.getElementById("top-header").style.backgroundColor = "rgba(0, 0, 0, 0)";
        $(".social-header").css('display', 'none');
        $("#top-header").css("position", "initial");
    } else {
        $("#top-header").css("position", "fixed");
        document.getElementById("top-header").style.backgroundColor = "white";
        if (window.innerWidth > 767) {
            $(".social-header").css('display', 'block');
        } else {
            $(".social-header").css('display', 'none');
        }
    }
}

setInterval(function () {
    var currentImg = $("#imgHeader").attr("src");


    if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img-Header.png") {
        $("#imgHeader").fadeOut(400, function () {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img2-Header.png");
        }).fadeIn(400);
        $("#span-text-header").html("Contre la récidive, prenons la peine <br /><span class='uppercase'>d'accompagner vers l'emploi</span>");
    } else if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img2-Header.png") {
        $("#imgHeader").fadeOut(400, function () {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img3-Header.png");
        }).fadeIn(400);
        $("#span-text-header").html("Contre la récidive, prenons la peine <br /><span class='uppercase'>d'héberger</span>");
    } else if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img3-Header.png") {
        $("#imgHeader").fadeOut(400, function () {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img-Header.png");
        }).fadeIn(400);
        $("#span-text-header").html("Contre la récidive, prenons la peine <br /><span class='uppercase'>d'accueillir</span>");
    }
}, 12000);

$( window ).resize(function() {
    if (window.innerWidth < 767) {
        $(".social-header").css('display', 'none');
    } else {
        $(".social-header").css('display', 'block');
    }
});



