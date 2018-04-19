$('.header__content__slider').slick({
	dots: true,
	arrows: false
});

//Burger open, close
$(".sandwich, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});

// Form
var modal = document.querySelector('.form');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $(".header__content__slider__slide__content").css("display", "block");
    }
}
$(".close").click(function() {
  $(".form").hide();
  $(".header__content__slider__slide__content").css("display", "block");
});
$(".login").click(function() {
  $(".form").show();
  //$(".header__content__slider__slide__content").slideToggle(1500);
  if ($(".form").css("display", "block")) {
  	$(".header__content__slider__slide__content").css("display", "none");
  } 
  $(".mobile__nav").css("display", "none");
});

//show menu click
		$(".header__menu__btn").click(function(){
		    $(".mobile__nav").slideToggle(1500);
		    $(".header__content__slider__slide__content").slideToggle(1500);
		   
		});