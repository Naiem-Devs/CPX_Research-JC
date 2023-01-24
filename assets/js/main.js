(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel

  var owl = $('.feedback_slider');

 owl.owlCarousel({
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


  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
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
