$('.header__content__slider').slick({
	dots: true,
	arrows: false
});

//Burger open, close
$(".sandwich, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});