$(document).ready(function() {
	$('.carousel').carousel({
	  interval: 8000,
	  pause: "false",
	  "pause":"false"
	})
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		//Setup on mobile devices
		$('#Newsfeed .feed-wrapper').css('padding', 0);
		layoutMobile();
		addMouseBehavior();


	}else {
		//Setup on desktop devices
		layoutDesktop();
		addMouseBehavior();

		$(window).resize(function() {
			layoutDesktop();
		});
	}
})

function layoutDesktop() {

	$('.feed-item > .feed-thumb').imagesLoaded().progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
		var $img = $(image.img);
		var $parent = $($img.parent());

		var imgHeight = $img.outerHeight();
		var headerHeight = 0;
		var specsHeight = $parent.find($('.feed-specs')).outerHeight();
		var inspectHeight = imgHeight - (headerHeight + specsHeight);

		$parent.find('.feed-inspect').css('height', inspectHeight);
	  $parent.find('.feed-info').css('top', imgHeight);
		$grid.isotope('layout');
  });
}

function layoutMobile() {
	$('.grid-item').css('margin-bottom', 0);
	$('.feed-item > .feed-thumb').imagesLoaded().progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
		var $img = $(image.img);
		var $parent = $($img.parent());

		var imgHeight = $img.outerHeight();
		var headerHeight = 0;
		var specsHeight = $parent.find($('.feed-specs')).outerHeight();
		var inspectHeight = imgHeight - (headerHeight + specsHeight);

		$parent.find('.feed-inspect').css('height', inspectHeight);
	  $parent.find('.feed-info').css('top', imgHeight);
		$grid.isotope('layout');
  });
}

function clearMouseOver () {
	$('.feed-info').each(function() {
		$(this).parent().find('.feed-info').css('top', $(this).parent().find('.feed-thumb').outerHeight());
	})
}

function addMouseBehavior () {

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.feed-likes').each(function(i,obj) {
			$(this).click(function() {
				addLike($(this));
			})
		})

		$('.feed-item').each(function(i, obj) {
			$(this).find('.feed-inspect').click(function() {
				showFeedItem();
			})
		})

	}else {
		$('.feed-thumb').each(function(i,obj) {
			$(this).on('mouseover', function() {
		    	clearMouseOver();
		    	$(this).parent().find('.feed-info').css('top', 0);
		    })
		    $(this).parent().find('.feed-info').mouseleave(function() {
		    	var imgHeight = $(this).outerHeight();
		    	clearMouseOver();
				$(this).parent().find('.feed-info').css('top', imgHeight);
		    })

			$(this).parent().find('.feed-info > .feed-specs > .feed-title > .feed-likes').click(function() {
				addLike($(this));
			})

			$(this).parent().find('.feed-inspect').click(function() {
				showFeedItem();
			})
		})
	}

}

function addLike(obj) {
	if($(obj).parent().find('.feed-likes > i').hasClass('fa-heart-o')) {
		var target = $(obj).parent().parent().parent().find('.feed-inspect');
		target.append('<span class="btn-like"><i class="fa fa-heart"></i></span>');

		$(target).find('.btn-like i').animate({
			zoom: 50
		}, {
		    duration: 300,
		    specialEasing: {
		      zoom: "easeOutBack"
		    },
		    complete: function() {
		    	setTimeout(function() {
		    		$(target).find('.btn-like i').animate({
						zoom: 0
					}, {
					    duration: 300,
					    specialEasing: {
					      zoom: "easeInBack"
					    },
					    complete: function() {
					    	$(target).find('.btn-like').remove();
					    }
					  });
		    	}, 0);
		    }
		  });
	}
	$(obj).find('i').toggleClass('fa-heart');
	$(obj).find('i').toggleClass('fa-heart-o');
	$(obj).find('i').toggleClass('liked');
	$(obj).parent().parent().parent().parent().parent().find('.feed-likeCount i').toggleClass('liked')
}

function showFeedItem() {
	window.location = 'feeditem.html';
}
