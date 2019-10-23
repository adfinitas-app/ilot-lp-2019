function checkHeight() {
    var heightElement = window.scrollY;
    if (heightElement <= 0) {
        document.getElementById("top-header").style.backgroundColor = "rgba(0, 0, 0, 0)";
        $(".social-header").css('display', 'none');
    } else {
        document.getElementById("top-header").style.backgroundColor = "white";
        if (window.innerWidth > 767) {
            $(".social-header").css('display', 'block');
        }
    }
}

setInterval(function () {
    var currentImg = $("#imgHeader").attr("src");

    console.log("currentImg: " + currentImg);

    if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img-Header.png") {
        console.log("hdszkdhsb");
        $("#imgHeader").fadeOut(400, function () {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img2-Header.png");
        }).fadeIn(400);
    } else if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img2-Header.png") {
        $("#imgHeader").fadeOut(400, function () {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img3-Header.png");
        }).fadeIn(400);
    } else if (currentImg === "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img3-Header.png") {
        $("#imgHeader").fadeOut(400, function () {
            $("#imgHeader").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Img-Header.png");
        }).fadeIn(400);
    }
}, 4000);





