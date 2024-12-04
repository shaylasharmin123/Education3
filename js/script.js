


// jquery

$(function(){

  var mixer = mixitup('#mixit', {
    
    animation: {
        duration: 300
    }
});

 $('.custom').slick({

  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1
  speed: 300,
  dots:true



  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false 
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
    
  ]
});

});

