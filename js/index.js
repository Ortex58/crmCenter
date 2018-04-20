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
        $('html').css("overflow", "visible");
    }
}
$(".close").click(function() {
  $(".form").hide();
  $(".header__content__slider__slide__content").css("display", "block");
  $('html').css("overflow", "visible");
});
$(".login").click(function() {
	$('html').css("overflow", "hidden");
	$(".form").show();
	if ($(".form").css("display", "block")) {
		$(".header__content__slider__slide__content").css("display", "none");
	} 
	$(".mobile__nav").css("display", "none");
	$(".sandwich").toggleClass("active");	
});

//show menu click
		$(".header__menu__btn").click(function(){
		    $(".mobile__nav").slideToggle(1500);
		    $(".header__content__slider__slide__content").slideToggle(1500);
		   
		});

// WOW JS

new WOW().init();

//Animate icon phone and mail
$(".f-phone").click(function() {
	$(".f-phone").addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd msAnimationEnd oanimationend animationend',
		function() {
			$(this).removeClass('animated bounce');
		});
});
$(".f-mail").click(function() {
	$(".f-mail").addClass('animated bounce').one('webkitAnimationEnd mozAnimationEnd msAnimationEnd oanimationend animationend',
		function() {
			$(this).removeClass('animated bounce');
		});
});