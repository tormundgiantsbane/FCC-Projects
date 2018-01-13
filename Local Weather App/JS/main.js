$("#getLocation").click(function(){
	
});

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) { // success callback
  var crd = pos.coords;
  var values = [crd.latitude, crd.longitude];
  doSomethingWithCoordinateValues(values);
};

function doSomethingWithCoordinateValues(coords) {
	var url = 'https://fcc-weather-api.glitch.me/api/current?lat=' + coords[0] + '&lon=' + coords[1];

	  $.ajax({url,
		success: function(val){
	 console.log(val.main.temp);
  }});
}

function error(err) { // error callback
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);

