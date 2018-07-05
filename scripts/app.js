$(document).on("ready", function(){

var gifUrl = 'http://api.giphy.com/v1/gifs/search?q=';
var key = '&api_key=nGwbBG5WSosstuoL9YqWkZTAHcR0sEE9';

$('form').on('submit', function(e){
  e.preventDefault();
  var userInput = $('.form-control gif-input').val();
  $.ajax({
    method: 'GET',
    url: gifUrl + userInput + key,
    success: function(response){
      console.log(response);
      response.data.forEach(gif => {
        $('.gif-gallery').append(`<img src=${gif.images.fixed_height.url}>`);
      })
      },
      error: function(error){
        console.log(error);
      }
 });
});
});
