// station coordinates
var southStation      = new google.maps.LatLng(42.352271, -71.05524200000001);
var andrew            = new google.maps.LatLng(42.330154, -71.057655);
var porterSquare      = new google.maps.LatLng(42.3884, -71.11914899999999);
var harvardSquare     = new google.maps.LatLng(42.373362, -71.118956);
var jfkUmass          = new google.maps.LatLng(42.320685, -71.052391);
var savinHill         = new google.maps.LatLng(42.31129, -71.053331);
var parkStreet	      = new google.maps.LatLng(42.35639457, -71.0624242);
var broadway	      = new google.maps.LatLng(42.342622, -71.056967);
var northQuincy       = new google.maps.LatLng(42.275275, -71.029583);
var shawmut	      = new google.maps.LatLng(42.29312583, -71.06573796000001);
var davisSquare	      = new google.maps.LatLng(42.39674, -71.121815);
var alewife	      = new google.maps.LatLng(42.395428, -71.142483);
var kendallMIT	      = new google.maps.LatLng(42.36249079, -71.08617653);
var charlesMGH        = new google.maps.LatLng(42.361166, -71.070628);
var downtownCrossing  = new google.maps.LatLng(42.355518, -71.060225);
var quincyCenter      = new google.maps.LatLng(42.251809, -71.005409);
var quincyAdams       = new google.maps.LatLng(42.233391, -71.007153);
var ashmont	      = new google.maps.LatLng(42.284652, -71.06448899999999);
var wollaston	      = new google.maps.LatLng(42.2665139, -71.0203369);
var fieldsCorner      = new google.maps.LatLng(42.300093, -71.061667);
var centralSquare     = new google.maps.LatLng(42.365486, -71.103802);
var braintree         = new google.maps.LatLng(42.2078543, -71.0011385);

// array of stations
var stations = [
	['South Station',    42.352271,   -71.05524200000001], 
	['Andrew',           42.330154,   -71.057655], 
	['Porter Square',    42.3884,     -71.11914899999999], 
	['Harvard Square',   42.373362,   -71.118956], 
	['JFK/UMass',        42.320685,   -71.052391], 
	['Savin Hill',       42.31129,    -71.053331], 
	['Park Street',      42.35639457, -71.0624242], 
	['Broadway',         42.342622,   -71.056967], 
	['North Quincy',     42.275275,   -71.029583],
	['Shawmut',          42.29312583, -71.06573796000001],
	['Davis Square',     42.39674,    -71.121815],
	['Alewife',          42.395428,   -71.142483],
	['Kendall/MIT',      42.36249079, -71.08617653],
	['Charles/MGH',      42.36249079, -71.08617653],
	['Downtown Crossing',42.355518,   -71.060225],
	['Quincy Center',    42.251809,   -71.005409],
	['Quincy Adams',     42.233391,   -71.007153],
	['Ashmont',          42.284652,   -71.06448899999999],
	['Wollaston',        42.2665139,  -71.0203369],
	['Fields Corner',    42.300093,   -71.061667],
	['Central Square',   42.365486,   -71.103802],
	['Braintree',        42.2078543,  -71.0011385]
] 

function init()
{
	var settings = {
		zoom: 13,
      		center: southStation, // centers map at South Station
      		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	// create map
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	
	drawMarkers(map);
	drawPolylines(map);
}

function drawMarkers(map)
{
	var image = {
		url: 'marker.png',
		anchor: new google.maps.Point(0,60),
	}

	for(var i = 0; i < stations.length; i++){
		var station = stations[i];
		var marker = new google.maps.Marker({
			position: {lat: station[1], lng: station[2]},
			map: map,
			icon: image,
			title: station[0],
		});
	}
}

function drawPolylines(map)
{
	var trainPath = [alewife, davisSquare, porterSquare, harvardSquare, centralSquare,
			 kendallMIT, charlesMGH, parkStreet, downtownCrossing, southStation,
			 broadway, andrew, jfkUmass, northQuincy, wollaston, quincyCenter,
			 quincyAdams, braintree];	
	var trainPathLines = new google.maps.Polyline({
		path: trainPath,
		strokeColor: '#ff0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	
	
	var ashmontBound = [jfkUmass, savinHill, fieldsCorner, shawmut, ashmont];
	var ashmontPathLines = new google.maps.Polyline({
		path: ashmontBound,
		strokeColor: '#ff0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

	trainPathLines.setMap(map);
	ashmontPathLines.setMap(map);
}