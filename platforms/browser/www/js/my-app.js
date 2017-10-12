var myApp = new Framework7();

var $$ = Dom7;

var idWatch;
var map;
var marker;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

$$(document).on('deviceready',initapp);

function initapp(){
  console.log("Dispositivo Listo.");
}

function initMap() {
	var initial = {lat: -25.363, lng: 131.044};

	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 17,
		center: initial
	});

	marker = new google.maps.Marker({
		position: initial,
		map: map
	});

  idWatch = navigator.geolocation.watchPosition(onSuccess, onError, options);
}

function onSuccess(position) {
  var pos = {lat: position.coords.latitude, lng: position.coords.longitude};

  map.setCenter(pos);
  marker.setPosition(pos);

	console.log(position.coords.latitude);
	console.log(position.coords.longitude);
	console.log(position.coords.altitude);
	console.log(position.coords.accuracy);
	console.log(position.coords.altitudeAccuracy);
	console.log(position.coords.heading);
	console.log(position.coords.speed);
	console.log(position.timestamp);
};

function onError(error) {
	console.log(error.code);
	console.log(error.message);
}

var options = { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };
