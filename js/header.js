function checkHeight() {
    var heightElement = window.scrollY;
    if (heightElement <= 0) {
        document.getElementById("top-header").style.backgroundColor = "rgba(0, 0, 0, 0)";
        $(".social-header").css('display', 'block');
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
    var currentImg = $("#col-imgHeader1").css("background-image");

    if (window.innerWidth > 767) {
        if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img1-Header.png")') {
            $("#col-imgHeader1").fadeOut(400, function () {
                $("#col-imgHeader1").css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img2-Header.jpg")');
                $("#title-header").html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'accompagner vers l'emploi</span>");
            }).fadeIn(500);
        } else if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img2-Header.jpg")') {
            $("#col-imgHeader1").fadeOut(400, function () {
                $("#col-imgHeader1").css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img3-Header.jpg")');
                $("#title-header").html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'héberger</span>");
            }).fadeIn(500);
        } else if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img3-Header.jpg")') {
            $("#col-imgHeader1").fadeOut(400, function () {
                $("#col-imgHeader1").css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img1-Header.png")');
                $("#title-header").html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'accueillir</span>");
            }).fadeIn(500);
        }
    } else {
        if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img1-Header.png")') {
            $("#col-imgHeader1").fadeOut(400, function () {
                $("#col-imgHeader1").css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img2-Header.jpg")');
                $("#title-header").html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'accompagner vers l'emploi</span>");
            }).fadeIn(500);
        } else if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img2-Header.jpg")') {
            $("#col-imgHeader1").fadeOut(400, function () {
                $("#col-imgHeader1").css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img3-Header.jpg")');
                $("#title-header").html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'héberger</span>");
            }).fadeIn(500);
        } else if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img3-Header.jpg")') {
            $("#col-imgHeader1").fadeOut(400, function () {
                $("#col-imgHeader1").css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img1-Header.png")');
                $("#title-header").html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'accueillir</span>");
            }).fadeIn(500);
        }
    }

}, 5000);

$( window ).resize(function() {
    if (window.innerWidth < 767) {
        $(".social-header").css('display', 'none');
    } else {
        $(".social-header").css('display', 'block');
    }
});



