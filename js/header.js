function checkHeight() {
    var heightElement = window.scrollY;
    console.log("height of Element: " + heightElement);
    if (heightElement <= 0) {
        document.getElementById("top-header").style.backgroundColor = "rgba(0, 0, 0, 0)";
        $(".social-header").css('display', 'none');
    } else {
        document.getElementById("top-header").style.backgroundColor = "white";
        $(".social-header").css('display', 'block');
    }
}

document.onscroll = function () {
    checkHeight()
};