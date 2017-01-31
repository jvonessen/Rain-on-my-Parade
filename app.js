var weather_URL = 'api.openweathermap.org/data/2.5/weather'

function getWeatherData(callback) {
  var query = {
    id: '5815135',
    APPID: 'c463b2d3c8a40702fa35a7648efdae25'
  };
  $.getJSON(weather_URL, query, callback)
}

function displayWeatherData(data) {
  var result = '';
  console.log(data);
  // if (data.items) {
  //   initialPageToken = data.nextPageToken;
  //   data.items.forEach(function(item) {
  //     // do things
  //   });
  // }
  // else {
  //   result += '<p>No results</p>';
  // }
  // $('.js-search-results').append('<ul class="js-search-results-page-' + page + '">' + result + '</ul>');
}

$('#weather-button').click(function() {
  getWeatherData(displayWeatherData);
});
