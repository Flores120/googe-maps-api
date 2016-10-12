var apiKey = "e2795c20c0df1ef0792c28debe9c9142";

$(document).ready(function(){
 $('#artist').submit(function(event){
   event.preventDefault();
   var artist = $('#inputArt').val();
   $.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + artist + '&api_key=' + apiKey + '&format=json').then(function(response) {
     console.log(response.results.artistmatches.artist[0]);
      $('#name').text("Name: " + (response.results.artistmatches.artist[0].name));
      $("#link").attr("href", response.results.artistmatches.artist[0].url);
      $('#streamable').text("number of songs to stream through Last.fm: " + (response.results.artistmatches.artist[0].streamable));

      console.log(response.results.artistmatches.artist[0].image.length);
      for(var i = 0; i <= response.results.artistmatches.artist[0].image.length; i++) {
        console.log(response.results.artistmatches.artist[0].image[i]);
        $("#images").attr("src", (response.results.artistmatches.artist[0].image[i]["#text"]));
      }







    });
 });
});
