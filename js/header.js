function checkHeight() {
  var heightElement = window.scrollY;
  if (heightElement <= 0) {
      if (window.innerWidth > 767) {
          $("#logo-lilot-header").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Logo-lilotBlanc.png");
          document.getElementById("top-header").style.backgroundColor = "rgba(0, 0, 0, 0)";
      } else {
          document.getElementById("top-header").style.backgroundColor = "white";
          $("#logo-lilot-header").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Logo-lilot.png");
      }
      $(".social-header").css('display', 'none');
      $("#top-header").css("position", "absolute");
  } else {
      $("#top-header").css("position", "fixed");
      document.getElementById("top-header").style.backgroundColor = "white";
      $("#logo-lilot-header").attr("src", "https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/Logo-lilot.png");
      if (window.innerWidth > 767) {
          $(".social-header").css('display', 'block');
      } else {
          $(".social-header").css('display', 'none');
      }
  }
}

setInterval(function () {
  var HeaderImg = $("#col-imgHeader1");
  var headerFade = $("#headerFade");
  var currentImg = HeaderImg.css("background-image");
  var titleHeader = $("#title-header");

  if (window.innerWidth > 767) {
      if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img1-Header.png")') {
          headerFade.fadeOut(400, function () {
              console.log("hello");
              HeaderImg.css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img3-Header.jpg")');
              console.log("here");
              titleHeader.html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'héberger</span>");
              console.log("dhjbchbqd");
          }).fadeIn(500);
      } else if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img3-Header.jpg")') {
          headerFade.fadeOut(400, function () {
              HeaderImg.css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img2-Header.jpg")');
              titleHeader.html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'accompagner vers l'emploi</span>");
          }).fadeIn(500);
      } else if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img2-Header.jpg")') {
          headerFade.fadeOut(400, function () {
              HeaderImg.css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img1-Header.png")');
              titleHeader.html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'accueillir</span>");
          }).fadeIn(500);
      }
  } else {
      if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img1-Header.png")') {
          headerFade.fadeOut(400, function () {
              HeaderImg.css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img2-Header.jpg")');
          });
         titleHeader.html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'accompagner vers l'emploi</span>");
          headerFade.fadeIn(500);
      } else if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img2-Header.jpg")') {
          headerFade.fadeOut(400, function () {
              HeaderImg.css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img3-Header.jpg")');
          });
         titleHeader.html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'héberger</span>");
          headerFade.fadeIn(500);
      } else if (currentImg === 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img3-Header.jpg")') {
          headerFade.fadeOut(400, function () {
              HeaderImg.css("background-image", 'url("https://adfinitas-statics-cdn.s3.eu-west-3.amazonaws.com/lilot/Lilot-LP-2019/img1-Header.png")');
          });
         titleHeader.html("<br>Contre la récidive, prenons la peine <br /><span class='uppercase'>d'accueillir</span>");
          headerFade.fadeIn(500);
      }
  }

}, 5000);

$( window ).resize(function() {
  checkHeight();
  if (window.innerWidth < 767) {
      $(".social-header").css('display', 'none');
  } else {
      var heightElement = window.scrollY;

      if (heightElement <= 0) {
          $(".social-header").css('display', 'none');
      } else {
          $(".social-header").css('display', 'block');
      }
  }
});



