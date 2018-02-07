var styleArray = [
    {
      featureType: "all",
      stylers: [
       { saturation: -80 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#e50047" },
        { saturation: 50 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];	    
  // The following example creates complex markers to indicate beaches near
  // Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
  // to the base of the flagpole.

  function initMap() {
    var map = new google.maps.Map(document.getElementById('ReporterMap'), {
      zoom: 10,
      styles: styleArray,
      center: {lat: 55.59851, lng: 12.24141}
    });

    setMarkers(map);
  }

  // Data for the markers consisting of a name, a LatLng and a zIndex for the
  // order in which these markers should display on top of each other.
  var reporters = [
  	{
  		repName: 'Cecilia Valsted',
  		repImg: 'assets/images/avatar1.jpg',
  		repTitle: 'Photographer',
  		repDescr: 'I am into urban style photography and like to travel. I have a nose for being in the right place on the right time.',
  		repLink: 'profile-public.html',
  		repConnect: 'profile-public.html',
  		repPos: {lat: 55.57586, lng: 12.27302},
  		repZ: 1
  	},
  	{
  		repName: 'Lars Brask Frederiksen',
  		repImg: 'assets/images/avatar2.jpg',
  		repTitle: 'Photographer',
  		repDescr: 'Lorem ipsum dolor sit amet, scelerisque iusto vestibulum imperdiet pellentesque tincidunt non, elit tempus. Vestibulum quis, integer proin nec, dolor pulvinar, maecenas at.',
  		repLink: 'profile-public.html',
  		repConnect: 'profile-public.html',
  		repPos: {lat: 55.67797, lng: 12.54870},
  		repZ: 1
  	},
  	{
  		repName: 'Jesper Frimann',
  		repImg: 'assets/images/avatar1.jpg',
  		repTitle: 'Video Photographer',
  		repDescr: 'Lorem ipsum dolor sit amet, scelerisque iusto vestibulum imperdiet pellentesque tincidunt non, elit tempus. Vestibulum quis, integer proin nec, dolor pulvinar, maecenas at.',
  		repLink: 'profile-public.html',
  		repConnect: 'profile-public.html',
  		repPos: {lat: 55.58526, lng: 12.31545},
  		repZ: 1
  	}
  ];

  var markersArray = [];

  function setMarkers(map) {
    // Adds markers to the map.

    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.

    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    var image = {
      url: 'assets/images/if-maps-marker.png',
      // This marker is 20 pixels wide by 23 pixels high.
      size: new google.maps.Size(20, 23),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(9, 23)
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };

    for (var i = 0; i < reporters.length; i++) {
      var reporter = reporters[i];
      console.log(reporter.repName);
      var marker = new google.maps.Marker({
        position: reporter.repPos,
        map: map,
        icon: image,
        shape: shape,
        title: reporter.repName,
        zIndex: reporter.repZ,
        contentString: 	'<div id="content">'+
			            '<div id="siteNotice">'+
			            '</div>'+
			            '<div class="col-md-4"><img src="'+reporter.repImg+'" alt="'+reporter.repName+'" style="border-radius:50%;"></div>'+
			            '<div class="col-md-8"><h1 id="firstHeading" class="firstHeading">'+reporter.repName+'</h1>'+
			            '<p class="if-subheader">'+reporter.repTitle+'</p>'+ 
			            '<div id="bodyContent">'+
			            '<p>'+reporter.repDescr+'</p>'+
			            '<div class="col-sm-6" style="padding-left:0;"><button type="type" class="btn btn-primary btn-sm btn-block" onclick="window.location = "'+reporter.repLink+'";">'+reporter.repName+'&#39;s work</button></div>'+
			            '<div class="col-sm-6" style="padding-left:0;"><button type="type" class="btn btn-primary btn-sm btn-block" onclick="window.location = "'+reporter.repConnect+'";">Connet with '+reporter.repName+'</button></div>'+
			            '</div>'+
			            '</div>'+
			            '</div>'

      });
      markersArray.push(marker);
    }

    for ( var i = 0; i < markersArray.length; i++) {

        var infowindow = new google.maps.InfoWindow({
          maxWidth: screen.width
        });

    	markersArray[i].addListener('click', function() {
    		infowindow.setContent(this.contentString);
      		infowindow.open(map, this);
        });
    }
  }