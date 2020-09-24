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