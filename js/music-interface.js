var apiKey = "e2795c20c0df1ef0792c28debe9c9142";

$(document).ready(function(){
  $('#artist').submit(function(event){
    event.preventDefault();
    var artist = $('#inputArt').val();
    $.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + artist + '&api_key=' + apiKey + '&format=json').then(function(response) {
      $('#name').text("Name: " + (response.results.artistmatches.artist[0].name));
      $("#link").attr("href", response.results.artistmatches.artist[0].url);
      $('#streamable').text("number of songs to stream through Last.fm: " + (response.results.artistmatches.artist[0].streamable));
      $("#images").attr("src", (response.results.artistmatches.artist[0].image[3]["#text"]));
    });
  });

  $('#song').submit(function(event) {
    var songArray = [];
    event.preventDefault();
    var song = $('#inputSong').val();
    $.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track=' + song + '&api_key=' + apiKey + '&format=json').then(function(response) {
      for (var i = 0; i < response.results.trackmatches.track.length; i++) {
        songArray.push(response.results.trackmatches.track[i].artist);
      }
      $('.display').text("The artists that have sung songs with the title " + song + " are listed below:");
      songArray.forEach(function(songArray) {
        $(".display").append("<li>" +songArray + "</li>");

      });
    });
  });

  $('#topCountryArtist').submit(function(event){
    event.preventDefault();
    var countryInput = [];
    var country = $('#country').val();
      $.get('http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=' + country + '&api_key=' + apiKey + '&format=json').then(function(response) {
        // console.log(response.topartists.artist);
        for (var i = 0; i < response.topartists.artist.length; i++) {
          countryInput.push(response.topartists.artist[i].name);
        }
        $('.topArt').text("Top Artists in " + country + " are listed below:");
        countryInput.forEach(function(countryInput) {
          $(".topArt").append("<li>" + countryInput + "</li>");
    });
  });
});
});
