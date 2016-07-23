navigator.geolocation.getCurrentPosition(success, error);

      function success(position) {
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;
          var GEOCODING = 'https://crossorigin.me/http://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + '%2C' + lon + '&language=en';

          $.getJSON(GEOCODING).done(function(location) {
            console.log(location);
            var address = location.results[2].formatted_address;
            $("#long").html(address);
            getweather(address);
          })

      }

      function error(err) {
          console.log(err)
      }
$(document).ready(function() {
  setInterval(simpleWeather, 1000);
});
function getweather(address){
  $.simpleWeather({
    location: address,
    woeid: '',
    unit: 'c',
    success: function(weather) {
      console.log(weather);
      var city = weather.city;
      var temp = weather.temp + "&deg;"+weather.units.temp;
      var wcode = '<img class="weathericon" src="https://googledrive.com/host/0Byi7CVy901YhLXVrTWx6QkZDZzA/'+weather.code+'.svg">';
      var wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
      var humidity = weather.humidity + " %";

      $(".location").text(city);
      $(".temperature").html(temp);
      $(".climate_bg").html(wcode);
      $(".windspeed").html(wind);
      $(".humidity").text(humidity);
    },
    error: function(error) {
      $(".error").html('<p>' + error + '</p>');
    }
  });
}
