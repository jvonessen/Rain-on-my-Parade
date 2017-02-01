var weather_URL = 'https://api.openweathermap.org/data/2.5/weather';
var direction_URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAtsQkI9rXQT7kf36Giu_qms_Ksowljab4';

function getWeatherData(callback) {
  var query = {
    id: '5815135',
    APPID: 'c463b2d3c8a40702fa35a7648efdae25'
  };
  $.getJSON(weather_URL, query, callback)
}

function getDirectionData(startCity, endCity, callback) {
  var query = {
    origin: startCity,
    destination: endCity,
    travelMode: 'DRIVING',
  }
  $.getJSON(direction_URL, query, callback)
}

function displayWeatherData(data) {
  var result = '';
  console.log(data);
}

function displayDirectionData(data) {
  var result = '';
  console.log(data);
}

$('#weather-button').click(function() {
  getWeatherData(displayWeatherData);
});

$('#direction-button').click(function() {
  getDirectionData('Los Angeles, CA', 'Salt Lake City, UT', displayDirectionData)
})
