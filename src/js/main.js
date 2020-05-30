$(document).ready(initPage);
function initPage(){
	ImgTobg();
	mobileMenu();
	pageScrollTop();
	anchor();
	validateFields();
	formEffect();
	validateFieldsex();
	anchor();

	/* Click button - active tabs */
	$('.btn_mobile.btn__visual').on('click', function(event) {
		var name = $(this).data('name');
		$('.post__content .nav-link, .post__content .tab-pane').removeClass('show, active');
		$('.post__content [data-link="'+name+'"], .post__content [data-content="'+name+'"]').addClass('show, active');
		console.log(name)
	});
}

function ImgTobg() {
	$('.img-to-bg').each(function() {
		if ($(this).find('img').length) {
			$(this).css('background-image', 'url(' + $(this).find('> img').attr('src') + ')');
		}
	});
}

function mobileMenu(){
	$('<span class="open-menu"><span></span><span></span><span></span><span></span></span>').appendTo('.header-page > .container');
	$('<span class="fader"/>').appendTo('.header-page > .container');
	$('html').on('click', '.open-menu', function() {
		$('body').toggleClass('menu-opened');
		return false;
	});
	$('.fader').on('click touchmove', function(event) {
		$('body').removeClass('menu-opened');
	});
}

function pageScrollTop() {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.btn-page-up').fadeIn();
		} else {
			$('.btn-page-up').fadeOut();
		}
	});
	$('.btn-page-up').click(function(e){
		var offsetTop = $('body').offset().top;
		$('html, body').stop().animate({ 
			scrollTop: offsetTop
		}, 500);
		e.preventDefault();
	});
}

function anchor(){
	$(".anchor, .btn-page-down").click(function(e){
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top ;
		// for modal popup
		$(this).closest('.modal').removeClass('modal_show');
		$('body').removeClass('menu-opened modal-open');
		
		$("html, body").stop().animate({
			scrollTop: offsetTop
		}, 1000);
		e.preventDefault();
	});
};

function anchor(){
	$(".anchor, .visual__btn-down").click(function(e){
		var href = $(this).attr("href");
		offsetTop = href === "#" ? 0 : $(href).offset().top - $('.header-page').outerHeight();
		$('body').removeClass('menu-opened');
		$("html, body").stop().animate({
			scrollTop: offsetTop
		}, 800);
		e.preventDefault();
	});
};

function validateFields(){
	if( document.querySelector('.contact-form') ){
		$(".contact-form").validate({
			highlight: function(element) {
				$(element).parent().addClass('form__box_error').removeClass('form__box_valid');
			},
			unhighlight: function(element) {
				$(element).parent().removeClass('form__box_error').addClass('form__box_valid');
			},
			rules: {
				request: {
					required: false,
					minlength: false
				},
				name: {
					required: true,
					minlength: 2
				},
				
				email: {
					required: true,
					email: true,
					myEmail: true
				}
			},
			messages: {
				request: {
					required: false,
					minlength: false
				},
				name: {
					required: false,
					minlength: false
				},
				
				email: {
					required: false,
					email: false,
					myEmail: false
				}
			}
		});

		$.validator.addMethod(
			"myEmail",
			function(value, element){
				return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
			}
		);
	}
}
function validateFieldsex(){
	if( document.querySelector('.contact-form-ex') ){
		$(".contact-form-ex").validate({
			highlight: function(element) {
				$(element).parent().addClass('form__box_error').removeClass('form__box_valid');
			},
			unhighlight: function(element) {
				$(element).parent().removeClass('form__box_error').addClass('form__box_valid');
			},
			rules: {
				request: {
					required: false,
					minlength: false
				},
				name: {
					required: true,
					minlength: 2
				},
				
				email: {
					required: true,
					email: true,
					myEmail: true
				}
			},
			messages: {
				request: {
					required: false,
					minlength: false
				},
				name: {
					required: false,
					minlength: false
				},
				
				email: {
					required: false,
					email: false,
					myEmail: false
				}
			}
		});

		$.validator.addMethod(
			"myEmail",
			function(value, element){
				return value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
			}
		);
	}
}

function formEffect(){
	$('.form .form__input').focusin(function(event) {
		$(this).parent().addClass('input--filled');
		//maskInputs();
	}).focusout(function(event) {
		if ($(this).val().length < 1) {
			$(this).parent().removeClass('input--filled');
		}
	});

	$('.form .form__input').on('keyup', function() {
		if ($(this).val().length < 1) {
			$(this).parent().find('.form__input-clear').removeClass('active');
		} else {
			$(this).parent().find('.form__input-clear').addClass('active');
		}
	});

	$('.form__input-clear').click(function(event) {
		event.preventDefault();
		if ( $(this).parent().find('.form__input').value != ' ' ){
			$(this).parent().find('.form__input').val("");
			$(this).removeClass('active');
			$(this).parent().removeClass('input--filled');
		}
	});

}



var ranges = document.getElementsByClassName('bedroom');
for (var i = 0; i<ranges.length; i++) {
	var range = ranges[i];
	range.addEventListener('click', rangePress)
};

function rangePress(e) {
	var target = e.target;
	if(target.classList.contains('is-first-selected') === false){
		target.classList.add('is-first-selected');
	} else{
		target.classList.remove('is-first-selected');
	}
	

};




	
