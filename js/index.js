$('.header__content__slider').slick({
	dots: true,
	arrows: false
});

//Burger open, close
$(".sandwich, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});

//show menu click
		$(".header__menu__btn").click(function(){
		    $(".mobile__nav").slideToggle(1500);
		    $(".header__content__slider__slide__content").slideToggle(1500);
		   
		});