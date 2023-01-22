(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".feedback_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        margin: 300,
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 1.5
      },
      1200: {
        items: 2
      }
    }
  });

  $('select').niceSelect();

  $(".accordion_tab").click(function(){
    $(".accordion_tab").each(function(){
    $(this).removeClass("active");
  });
  $(this).addClass("active");
  $(this).next().addClass("active");
});

 
})(jQuery);
