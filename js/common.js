$(function() {

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	if(isMobile.any()) {
		$('aside').addClass('aside-mobile');
		$('.page-wrapper').addClass('page-mobile');
		$('#resize').hide();
		$('.about-img').show();
	};

	$(document).pjax('a', '#pjax-container', {fragment: '#pjax-container'});

	$('#pjax-container').on('pjax:success', function() {
		$.pjax({
			url: window.location.href,
			container: 'aside',
			fragment: 'aside'
		})
	});

	$('#resize').on('click', function() {

		if( $('aside').hasClass('animated') ) {
			$('aside').toggleClass('animated').animate({width:'33vw'}, 500);
			$('.page-wrapper').toggleClass('animated').animate({marginLeft:'35vw'}, 500);
		} else {
			$('aside').toggleClass('animated').animate({width:'50px'}, 500);
			$('.page-wrapper').toggleClass('animated').animate({marginLeft:'65px'}, 500);
		}

	});

});
