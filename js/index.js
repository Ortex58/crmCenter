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
$(".close").click(function(e) {
	e.preventDefault();
  $(".form").hide();
  $(".header__content__slider__slide__content").css("display", "block");
  $('html').css("overflow", "visible");
});
// Open pop-up
$(".login").click(function(e) {
	e.preventDefault();
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
$(".f-phone").hover(function(e) {
	e.preventDefault();
	$(".f-phone").addClass('animated wobble').one('webkitAnimationEnd mozAnimationEnd msAnimationEnd oanimationend animationend',
		function() {
			$(this).removeClass('animated wobble');
		});
});
$(".f-mail").hover(function(e) {
	e.preventDefault();
	$(".f-mail").addClass('animated wobble').one('webkitAnimationEnd mozAnimationEnd msAnimationEnd oanimationend animationend',
		function() {
			$(this).removeClass('animated wobble');
		});
});

// Country phone logic
var country = document.querySelector('.phone'),
    ukr = document.querySelector('.phone1'),
    rus = document.querySelector('.phone2'),
    kaz = document.querySelector('.phone3'),
	phoneNumber = ['+'+380+'('+44+')'+591+'-'+92+'-'+81, '+'+380+'('+32+')'+450+'-'+99+'-'+45, '+'+380+'('+36+')'+222+'-'+88+'-'+35],
	phone = document.querySelector('#phone');
	ukr_tel = 'tel:"+380(44)591-92-81"';
	phone.href = ukr_tel;
phone.innerHTML += phoneNumber[0];
	
ukr.onclick = function(e) {
	e.preventDefault();
	ukr_tel = 'tel:"+380(44)591-92-81"';
	phone.href = ukr_tel;
    phone.innerHTML = phoneNumber[0];
    country.innerHTML = 'Украина' + '<i class="fas fa-angle-down"></i>';
};
rus.onclick = function(e) {
	rus_tel = 'tel:"+380(32)450-99-45"';
	phone.href = rus_tel;
	e.preventDefault();
    phone.innerHTML = phoneNumber[1];
    country.innerHTML = 'Россия' + '<i class="fas fa-angle-down"></i>';
};
kaz.onclick = function(e) {
	e.preventDefault();
	kaz_tel = 'tel:"+380(36)222-88-35"';
	phone.href = kaz_tel;
    phone.innerHTML = phoneNumber[2];
    country.innerHTML = 'Казахстан' + '<i class="fas fa-angle-down"></i>';
};

/*----------------------------*/
// Country-phone logic mobile
var m_phone = document.querySelector('#m_phone'),
	m_ukr = document.querySelector('.m_phone1'),
    m_rus = document.querySelector('.m_phone2'),
    m_kaz = document.querySelector('.m_phone3');
m_phone.innerHTML = 'UKR' + ' ' + phoneNumber[0] + ' ' + '<i class="fas fa-angle-down"></i>';

m_ukr.onclick = function(e) {
	e.preventDefault();
    m_phone.innerHTML = 'UKR' + ' ' + phoneNumber[0] + ' ' + '<i class="fas fa-angle-down"></i>';
};

m_rus.onclick = function(e) {
	e.preventDefault();
    m_phone.innerHTML = 'RUS' + ' ' + phoneNumber[1] + ' ' + '<i class="fas fa-angle-down"></i>';
};

m_kaz.onclick = function(e) {
	e.preventDefault();
    m_phone.innerHTML = 'KAZ' + ' ' + phoneNumber[2] + ' ' + '<i class="fas fa-angle-down"></i>';
};
// Show-Hide mobile country-phone
$('#m_phone').click(function(e) {
	e.preventDefault();
	$('.lang-phone-drop ul').slideToggle(1500);
});

$('.m-products-drop').click(function(e) {
	e.preventDefault();
	$('.m-products-drop ul').slideToggle(1500);
});


	


