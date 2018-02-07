// TOGGLE COLLAPSING MENUS
// Closes any open navigation menu when a different one is clicked (Only on the mobile menu)
// ========================================================================================

$("[data-collapse-group='togglableNav']").click(function () {
  var $this = $(this);
  $("[data-collapse-group='togglableNav']:not([data-target='" + $this.data("target") + "'])").each(function () {
      $($(this).data("target")).removeClass("in").addClass('collapse');

  });
  if(!$this.hasClass('active')) {
  	$('.navbar-mobile .navbar-toggle').removeClass('active');	
  	$this.addClass('active');
  }else{
  	$('.navbar-mobile .navbar-toggle').removeClass('active');
  }
  if($(this).attr("data-target") == '#navbar-search') {
  	
  	$($(this).data("target")).on('shown.bs.collapse', function () {
  		
  		setTimeout(function () {
  			$($this.data("target") + ' .form-control').focus();
  			console.log($($this.data("target") + ' .form-control').attr('placeholder'));
  		}, 1000);
  	})
  	
  }  
});