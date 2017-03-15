$(document).ready(function() {
  $('form').submit(function() {
    var color = $('#color').val();
    var make = $('#make').val();
    var city = $('#city').val();
    var distance = $('#distance').val();
    var year = $('#year').val();
    $('#color').val("");
    $('#make').val("");
    $('#city').val("");
    $('#distance').val("");
    $('#year').val("");
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=' + make + ' &location=' + city + '&distance=' + distance + '&stolenness=stolen&year=' + year + '&access_token=ab24acd3ed8bffe04230ed7b746b35a0d8ad027b2dcc150fac3341def8eee73e')
  });
});
