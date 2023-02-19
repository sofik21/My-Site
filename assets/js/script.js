jQuery(document).ready(function( $ ){
    
    $("body").fitVids();

    const lightbox = GLightbox({
        selector: '.play-button'
    });

});


$(".menu-items > ul > li").children("ul").parent('li').addClass("has-children").prepend('<svg class="trigger-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 180a3.9 3.9 0 0 1-2.8-1.2l-80-80a4 4 0 0 1 5.6-5.6l77.2 77.1l77.2-77.1a4 4 0 1 1 5.6 5.6l-80 80a3.9 3.9 0 0 1-2.8 1.2Z"/></svg>');



$(".menu-items").clone().prependTo(".mobile-menu");
$(".menu-trigger").on('click', function(){
    $(this).toggleClass("active");
    $(".mobile-menu").slideToggle();
   
})
$(".trigger-icon").on('click',function(){
    $(this).siblings('ul').slideToggle();
});


$(".trigger-icon").on('click',function(){
    $(this).toggleClass("active");
})


$(window).scroll(function(){
    if($(window).scrollTop() > 100){
      $('.header-menu-sec').addClass('scrolled')
    }
    else{
      $('.header-menu-sec').removeClass('scrolled')
    }
  })


$('.top').click(function(){
    $("body, html").animate({scrollTop: 0});
});



