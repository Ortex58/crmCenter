// Slick slider
$('.header__content__slider').slick({
	dots: true,
	arrows: false
});



//Burger open, close
$(".sandwich, .menu_item").click(function() {
  $(".sandwich").toggleClass("active");
});



// Form
// Close pop-up
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
// Open pop-up
$(".login").click(function() {
	$('html').css("overflow", "hidden");
	$(".form").show();
	if ($(".form").css("display", "block")) {
		$(".header__content__slider__slide__content").css("display", "none");
	} 
	$(".mobile__nav").css("display", "none");
	$(".sandwich").toggleClass("active");	
	$("#name").focus();
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

var country = document.querySelector('.phone'),
    ukr = document.querySelector('.phone1'),
    rus = document.querySelector('.phone2'),
    kaz = document.querySelector('.phone3'),
	phoneNumber = ['+'+380+'('+44+')'+591+'-'+92+'-'+81, '+'+380+'('+32+')'+450+'-'+99+'-'+45, '+'+380+'('+36+')'+222+'-'+88+'-'+35],
	phone = document.querySelector('#phone');
	phone.innerHTML += phoneNumber[0];
	
	
rus.onclick = function() {
    phone.innerHTML = '';
    phone.innerHTML += phoneNumber[1];
    country.innerHTML = 'Россия' + '<i class="fas fa-angle-down"></i>';
};
ukr.onclick = function() {
    phone.innerHTML = '';
    phone.innerHTML += phoneNumber[0];
    country.innerHTML = 'Украина' + '<i class="fas fa-angle-down"></i>';
};
kaz.onclick = function() {
    phone.innerHTML = '';
    phone.innerHTML += phoneNumber[2];
    country.innerHTML = 'Казахстан' + '<i class="fas fa-angle-down"></i>';
};


