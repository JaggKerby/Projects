$(function(){
    $(".slider").slick({
        nextArrow:'<button class="slick-arrow slick-prev"><img src="img/prev.svg" alt="prev arrow"></button>',
        prevArrow:'<button class="slick-arrow slick-next"><img src="img/next.svg" alt="next arrow"></button>',
        responsive: [
            {
              breakpoint: 441,
              settings: {
                  arrows: false  
              }
            }
        ]
    }); 
});