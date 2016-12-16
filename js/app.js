var showTracks = function(a) {
  var source = $('#tracks-template').html();
  var template = Handlebars.compile(source);
  $.getJSON("https://api.spotify.com/v1/search",{q:a, type: "track"})
              .done(function(data){
                  var html = template(data.tracks);
                  $('.view').html(html);
              }).fail(function() {
                console.log( "error" );
              })
              .always(function() {
                console.log( "complete" );
              });
 }

$('#search-music').on('keyup', function(e) {
  e.preventDefault;
  if(e.which == 13){
    var a = $('#search-music').val();
    $('#search-music').val('');
    showTracks(a);
  }
});
