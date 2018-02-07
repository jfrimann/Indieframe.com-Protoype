$(document).ready(function() {
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip();
	})

	if(! /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		desktopLayout();
		$(window).resize(function() {
			desktopLayout();
		})
	}else {

	}
	$('#LargePreview').on('shown.bs.modal', function (e) {
	  	if($('.modal-image').outerHeight() < $('.modal-content').outerHeight()) {
			$('.modal-image').addClass('wide');
		}
	})
	$('#LargePreview').on('hide.bs.modal', function (e) {
	  $('.modal-image').removeClass('wide');
	})
})

function desktopLayout() {
	var imgHeight = $('.item-preview-box').outerHeight();
	var infoHeight = $('.item-info-wrap-lg > .item-info-box').outerHeight();
	var priceHeight = $('.item-pricing-box').outerHeight();

	if(imgHeight > infoHeight) {
		if(imgHeight > priceHeight) {
			console.log('imgHeight is the tallest');
			$('.item-info-wrap-lg > .item-info-box').css('height', imgHeight);
			$('.item-pricing-box').css('height', imgHeight);
		}else {
			console.log('priceHeight is the tallest');
			$('.item-info-wrap-lg > .item-info-box').css('height', priceHeight);
			$('.item-preview-box').css('height', priceHeight);
		}
	}else if(infoHeight > priceHeight) {
		console.log('infoHeight is the tallest');
		$('.item-pricing-box').css('height', infoHeight);
		$('.item-preview-box').css('height', infoHeight);
	}else {
		console.log('priceHeight is the tallest');
		$('.item-info-wrap-lg > .item-info-box').css('height', priceHeight);
		$('.item-preview-box').css('height', priceHeight);
	}
}

function likeItem() {
	var liked = false;
	var h = $('.item-thumb').innerHeight();
	var myH = $('.like-feedback').innerHeight();
	var newH = (h/2) - (myH/2);
	if(/Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		newH -=36;
	}

	if($('.btn-like').hasClass('fa-heart-o')) {
		$('.item-thumb').append('<div class="like-feedback"><i class="fa fa-heart fa-5x"></i></div>');

		$('.like-feedback').css('top', newH);
		
		$('.like-feedback i').animate({
			zoom: 50
		}, {
		    duration: 300,
		    specialEasing: {
		      zoom: "easeOutBack"
		    },
		    complete: function() {
		    	setTimeout(function() {
		    		$('.like-feedback i').animate({
						zoom: 0
					}, {
					    duration: 300,
					    specialEasing: {
					      zoom: "easeInBack"
					    },
					    complete: function() {
					    	$('.like-feedback').remove();
					    }
					  });
		    	}, 0);
		    }
		  });
	}

	$('.btn-like').toggleClass('fa-heart-o');
	$('.btn-like').toggleClass('fa-heart');
}

