  
    
$(window).load(function (){ 
       $(".before-after").twentytwenty({
        before_label: 'Без скинали', // Set a custom before label
        after_label: 'Со скинали' // Set a custom after label
        
      });
      });

      $(".before-slider").slick({
        draggable: false,
        
        swipe:false,
        dots: true,
        dotsClass: 'before-slider__dots',
        responsive:[
          {
            breakpoint: 768,
            settings:{
              arrows: false,
              
            }
          }
        ]
       
      });
  
 $(".reviews-slider").slick({
        
        dotsClass: 'reviews-slider__dots',
        dots: true,
        responsive:[
          {
            breakpoint: 768,
            settings:{
              arrows: false,
              
            }
          }
        ]
      });

      $('.menu-button').on('click', function () {
        $('.menu').toggleClass('menu_active');
      });
      $('.select').on('click', function () {
        $('.select__dropdown').toggleClass('select__dropdown_open');
      });
      $('.select_option').on('click', function () {
       var value = $(this).attr('data-value');
       console.log(value);
        });
    