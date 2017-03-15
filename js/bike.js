
function Bike(){
}

Bike.prototype.find = function(city, color, make, distance, year) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + make + ' &location=' + city + '&distance=' + distance + '&stolenness=stolen&year=' + year + '&access_token=ab24acd3ed8bffe04230ed7b746b35a0d8ad027b2dcc150fac3341def8eee73e').then(function(response) {
    console.log(response);
    response.bikes.forEach(function(bike) {
      $('#solution').append('<h4>Bike location: ' + bike.stolen_location + ' Bike color: ' + bike.frame_colors + '</h4> ');
    }).fail(function(error) {
      $('#solution').text(error.responseJSON.message);
    });
  });
};
exports.bikeModule = Bike;
