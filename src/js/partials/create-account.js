$(document).ready(function() {
	
	if(! /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var formBoxHeight = $('.if-canvas-getApp').innerHeight();
		$('.if-canvas-form').css('height', formBoxHeight);
		$(window).resize(function(event) {
			var formBoxHeight = $('.if-canvas-getApp').innerHeight();
	        $('.if-canvas-form').css('height', formBoxHeight);
	    });
		$(window).on('orientationchange', function(event) {
			var formBoxHeight = $('.if-canvas-getApp').innerHeight();
	        $('.if-canvas-form').css('height', formBoxHeight);
	    });
	}
});