$(window).scroll(function() {
  if ($(window).width() > 992) {
    if($(window).scrollTop() > 0 ) {
      $('.navigation').css({
        backgroundColor: 'white'
      })
      $('.socials').show()
      $('.socials').animate({
        opacity: 1
      }, 250)
    } else {
      $('.navigation').css({
        backgroundColor: 'rgba(255, 255, 255, 0)'
      })
      $('.socials').animate({
        opacity: 0
      }, 250)
      $('.socials').hide()
    }
  }
});

$(document).ready(function() {
  $("a[href*='#']:not([href='#'])").click(function() {
      if (
          location.hostname == this.hostname &&
          this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
      ) {
          var anchor = $(this.hash);
          anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
          if (anchor.length) {
              console.log(anchor);
              console.log(anchor.offset().top);
              $("html, body").animate({
                  scrollTop: anchor.offset().top - $('.navigation').innerHeight()
              }, 1500);
          }
      }
  });
});