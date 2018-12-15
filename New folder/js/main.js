/*
Copyright (c) 2016 Kamleshyadav
------------------------------------------------------------------
[Master Javascript]
-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var rockon = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- rockon Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.Main_banner();
			
		},
		
		/*-------------- projectname Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function () {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");	
			}		
		},
		Preloader: function () {
			$("#status").fadeOut();
			$("#preloader").delay(350).fadeOut("slow");	
		},
		Main_banner: function(){
			var banner_h = window.innerHeight;
			$('.rock_main_banner').css('height', banner_h);
		},
		Rockon_demo: function(){
			var slider_h = $('.rock_main_banner').innerHeight();
			var scrolled = 0;
			$('.rock_mouse_scroll').on('click', function(){
				scrolled = scrolled + slider_h;
				$('body').animate({
					scrollTop:  scrolled
				});
				scrolled=0;
			});
		},
		
		
		
	};

	rockon.init();

	// Load Event
	$(window).on('load', function() {
		rockon.Preloader();
		rockon.Rockon_demo();
		setTimeout(function(){
			$('body').addClass('rock_loaded');
		},600);
		
	});

	// Scroll Event
	$(window).on('scroll', function () {
	
	});
	
	// ready function
	$(document).ready(function() {
		//wow animation
		var wow = new WOW({
			boxClass:     'rockon_animtion',      // default
			animateClass: 'animated', // default
			offset:       200,          // default
			mobile:       true,       // default
			live:         true        // default
		})
		wow.init();
		
		
		
	});
	

})(jQuery);