var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
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
    var currentBike = new Bike();
    var result = currentBike.find(city, color, make, distance, year);
  });
});
