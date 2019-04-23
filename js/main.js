'use strict';

(function($){
	$(document).ready(function() {
		var openWindowBtn = document.querySelector('.services__price-range');
		openWindowBtn.onclick = showWindow;



		window.onscroll =  stickyHeader;
		window.onload =  stickyHeader;
		var header = document.getElementById('header-menu');
		var sticky = header.offsetTop;

		

		function stickyHeader() {
			if (window.pageYOffset > sticky) {
				header.classList.add("header__wrap--fixed");
			} else {
				header.classList.remove("header__wrap--fixed");
			}
		}

		function showWindow() {
			var windowOverlay = document.createElement('div'),
			infoWindow = document.querySelector('.window'),
			header = document.getElementById('header-menu');
			$('.header__wrap').animate({top: '-100px'}, 200, function() {
				header.classList.add('hidden');	
			});
			
			windowOverlay.className = 'window__overlay';
			infoWindow.classList.remove('hidden');
			document.body.append(windowOverlay, infoWindow);
			$('.window__overlay').animate({opacity: '1'},400);
			$('.window').animate({opacity: '1'},100);


			var closeBtn = document.querySelector('.window__close-btn');
			
			closeBtn.onclick = function() {
			
				$('.window').addClass('animate');
				$('.window').animate({opacity: '0'}, 400);
				$('.window__overlay').animate({opacity: '0'}, 400);
				header.classList.remove('hidden');	
				$('.header__wrap').animate({top: '0px'}, 200);
				$('.window').animate({opacity: '0'}, 400);
				setTimeout(function() {
					$('.window').removeClass('animate');
					windowOverlay.remove();
					$('.header__wrap').removeAttr('style');
					infoWindow.classList.add('hidden');
				},400); 
			};
			
		};

		var phoneInput =document.getElementById('phonenumber');
			phoneInput.addEventListener('focus', function() {
			this.setAttribute('placeholder', '+380XXXXXXXXX');

		});
			phoneInput.addEventListener('blur', function() {
			this.setAttribute('placeholder', 'Номер телефона *');
		});


	});
})(jQuery);



