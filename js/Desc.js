var augmentOpacity1200 = 0;
var augmentOpacity53 = 0;
var augmentOpacity11Mois = 0;
var augmentOpacity42 = 0;
var augmentOpacitynbTopDesc = 0;
var heightActivate = 250;
var heightActivateDesc = -350;

if(window.innerWidth <= 767) {
    heightActivate = 350;
    heightActivateDesc = -100;
}

if(window.innerWidth <= 620) {
    heightActivate = 350;
    heightActivateDesc = 20;
}

$( window ).resize(function () {
    if(window.innerWidth <= 767) {
        heightActivate = 350;
        heightActivateDesc = -100;
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

    console.log("height 2: " + heightElementnbTopDesc + " < " + heightActivateDesc);
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

    console.log("height: " + heightElement1200);
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

document.onscroll = function () {
    checkHeight();
    checkOpacityChange();
};