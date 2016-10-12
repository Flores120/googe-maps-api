var apiKey = "e2795c20c0df1ef0792c28debe9c9142";

$(document).ready(function(){
 $('#artist').submit(function(event){
   event.preventDefault();
   var artist = $('#inputArt').val();
   $.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + artist + '&api_key=' + apiKey + '&format=json').then(function(response) {
     console.log(response.results.artistmatches.artist[0]);
      $('#name').append("Name: " + (response.results.artistmatches.artist[0].name));
      $('#about').append("website about their music: " + (response.results.artistmatches.artist[0].url));
      $('#streamable').append("number of songs to stream through Last.fm: " + (response.results.artistmatches.artist[0].streamable));
      $('#images').append("some cool pictures of " + artist + ": "  +(response.results.artistmatches.artist[0].image[0]));
    });
 });
});
