var augmentOpacity1200 = 0;
var augmentOpacity53 = 0;
var augmentOpacity11Mois = 0;
var augmentOpacity42 = 0;
var augmentOpacitynbTopDesc = 0;
var heightActivate = 400;
var heightActivateDesc = -250;
var headerImgHeight;
var currentImg;
var heightElement = window.scrollY;

if(window.innerWidth <= 767) {
    heightActivate = 350;
    heightActivateDesc = -100;
    headerImgHeight = window.innerHeight - 80;
    if (heightElement <= 0) {
        document.getElementById("top-header").style.backgroundColor = "white";
    }
    console.log(headerImgHeight);
    $("#TEM1").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/TEM1-Mob.png");
    $("#TEM2").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/TEM1-M.png");
    $("#TEM3").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/TEM4-Mob.png");
    $("#TEM4").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/TEM2-Mob.png");
    $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Header-Img-M.png");
    $("#imgHeader").attr("height", headerImgHeight + "px");
    $("#text-stats").html("L'Îlot est une association reconnue d'intérêt public, labellisée depuis 1996 par le Don en Confiance, un organisme à but non lucratif d'agrément et de contrôle des associations et fondations faisant appel aux dons.");
}

if(window.innerWidth <= 620) {
    heightActivate = 350;
    heightActivateDesc = 20;
}

$( window ).resize(function () {
    currentImg = $("#imgHeader").attr("src");
    var heightElement = window.scrollY;

    if(window.innerWidth <= 767) {
        if (heightElement <= 0) {
            document.getElementById("top-header").style.backgroundColor = "white";
        }
        heightActivate = 350;
        heightActivateDesc = -100;
        headerImgHeight = window.innerHeight - 80;

        $("#TEM1").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/TEM1-Mob.png");
        $("#TEM2").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/TEM1-M.png");
        $("#TEM3").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/TEM4-Mob.png");
        $("#TEM4").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/TEM2-Mob.png");

        if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img-Header-Correct.png" || currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Header-Img-M.png") {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Header-Img-M.png");
        } else if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img2-Header-Correct.png" || currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Header-Img2-M.png") {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Header-Img2-M.png");
        } else if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img3-Header-Correct.png" || currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Header-Img3-M.png") {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Header-Img3-M.png");
        }

        $("#imgHeader").attr("height", headerImgHeight + "px");
        $("#text-stats").html("<br />L'Îlot est une association reconnue d'intérêt public, labellisée depuis 1996 par le Don en Confiance, un organisme à but non lucratif d'agrément et de contrôle des associations et fondations faisant appel aux dons.");
    }

    if(window.innerWidth > 767) {
        if (heightElement <= 0) {
            document.getElementById("top-header").style.backgroundColor = "rgba(0,0,0,0)";
        }
        $("#TEM1").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/TEM1.png");
        $("#TEM2").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/TEM2-new.jpg");
        $("#TEM3").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/TEM4.png");
        $("#TEM4").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/donateur_TEM.png");

        if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img-Header-Correct.png" || currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Header-Img-M.png") {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img-Header-Correct.png");
        } else if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img2-Header-Correct.png" || currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Header-Img2-M.png") {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img2-Header-Correct.png");
        } else if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img3-Header-Correct.png" || currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Header-Img3-M.png") {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img3-Header-Correct.png");
        }

        $("#imgHeader").attr("height", "auto");
        $("#text-stats").html("<br />L'Îlot est une association reconnue d'intérêt public, labellisée<br/> depuis 1996 par le Don en Confiance, un organisme à but non<br /> lucratif d'agrément et de contrôle des associations et fondations<br /> faisant appel aux dons.");

    }

    if(window.innerWidth <= 620) {
        heightActivate = 350;
        heightActivateDesc = 20;
    }
});

function checkOpacityChange() {
    var heightElement1200 = document.getElementById("col-1200").offsetTop;
    var heightElement53 = document.getElementById("col-53").offsetTop;
    var heightElement11Mois = document.getElementById("col-11Mois").offsetTop;
    var heightElement42 = document.getElementById("col-42").offsetTop;
    var heightElementnbTopDesc = document.getElementsByClassName("number_top_description")[0].offsetTop;

    var timerOpacity;

    heightElement1200 = heightElement1200 - window.scrollY;
    heightElement53 = heightElement53 - window.scrollY;
    heightElement11Mois = heightElement11Mois - window.scrollY;
    heightElement42 = heightElement42 - window.scrollY;
    heightElementnbTopDesc = heightElementnbTopDesc - window.scrollY;

    if ( augmentOpacitynbTopDesc < 1) {
        if (heightElementnbTopDesc < heightActivateDesc) {
            timerOpacity = setInterval(function () {
                if (augmentOpacitynbTopDesc < 1) {
                    augmentOpacitynbTopDesc += 0.01;
                    document.getElementsByClassName("number_top_description")[0].style.opacity = augmentOpacitynbTopDesc;
                    document.getElementsByClassName("number_top_description")[1].style.opacity = augmentOpacitynbTopDesc;
                } else {
                    clearInterval(timerOpacity);
                }
            }, 30);
        }
    }

    if ( augmentOpacity1200 < 1) {
        if (heightElement1200 < heightActivate) {
            timerOpacity = setInterval(function () {
                if (augmentOpacity1200 < 1) {
                    augmentOpacity1200 += 0.01;
                    document.getElementById("1200").style.opacity = augmentOpacity1200;
                } else {
                    clearInterval(timerOpacity);
                }
            }, 30);
        }
    }

    if ( augmentOpacity53 < 1) {
        if (heightElement53 < heightActivate) {
            timerOpacity = setInterval(function () {
                if (augmentOpacity53 < 1) {
                    augmentOpacity53 += 0.01;
                    document.getElementById("53%").style.opacity = augmentOpacity53;
                } else {
                    clearInterval(timerOpacity);
                }
            }, 30);
        }
    }

    if ( augmentOpacity11Mois < 1) {
        if (heightElement11Mois < heightActivate) {
            timerOpacity = setInterval(function () {
                if (augmentOpacity11Mois < 1) {
                    augmentOpacity11Mois += 0.01;
                    document.getElementById("11Mois").style.opacity = augmentOpacity11Mois;
                } else {
                    clearInterval(timerOpacity);
                }
            }, 30);
        }
    }

    if ( augmentOpacity42 < 1) {
        if (heightElement42 < heightActivate) {
            timerOpacity = setInterval(function () {
                if (augmentOpacity42 < 1) {
                    augmentOpacity42 += 0.01;
                    document.getElementById("42%").style.opacity = augmentOpacity42;
                } else {
                    clearInterval(timerOpacity);
                }
            }, 30);
        }
    }
}

function msieversion()
{
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
        document.getElementById("42%").style.opacity = 1;
        document.getElementById("11Mois").style.opacity = 1;
        document.getElementById("53%").style.opacity = 1;
        document.getElementById("1200").style.opacity = 1;
        document.getElementsByClassName("number_top_description")[0].style.opacity = 1;
        document.getElementsByClassName("number_top_description")[1].style.opacity = 1;
        augmentOpacity1200 = 1;
        augmentOpacity53 = 1;
        augmentOpacity11Mois = 1;
        augmentOpacity42 = 1;
        augmentOpacitynbTopDesc = 1;
    }
}

msieversion();

document.onscroll = function () {
    checkOpacityChange();
};
