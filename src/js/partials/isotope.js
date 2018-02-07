var $grid = $('.grid').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.grid-sizer'

  }
});

$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  //filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


// var $grid = $('.grid').imagesLoaded( function() {
// 	$grid.isotope({
// 		itemSelector: '.grid-item',
// 	  	percentPosition: true,
// 	  	masonry: {
// 	    	// use outer width of grid-sizer for columnWidth
// 	    	columnWidth: '.grid-sizer',
// 	    	gutter: '.gutter-sizer'
// 	  	}
// 	})
// }
