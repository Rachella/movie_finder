$('input[name="movie-title"]').keyup(function(){
  if ( event.which == 13 ) {
    event.preventDefault();
    var query = $('input[name="movie-title"]').val();     

    $.ajax({
      type: "GET",
      url: "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&r=json",
      dataType: "JSON",
      success: function(response){
        $('.movie-poster').html("<img src=\"" + response.Poster + "\" />");       
        $('.movie-title1').text("Title: ");
        $('.movie-title').text(response.Title);
        $('.movie-year1').text("Year: ");
        $('.movie-year').text(response.Year);
        $('.movie-rating1').text("Rating: ");
        $('.movie-rating').text(response.imdbRating);        
        $('.movie-released1').text("Relased: ");
        $('.movie-released').text(response.Released);                
        $('.movie-runtime1').text("Runtime: "); 
        $('.movie-runtime1').text(response.Runtime);                
        $('.movie-genre1').text("Genre: ");
        $('.movie-genre').text(response.Genre);        
        $('.movie-director1').text("Director: ");
        $('.movie-director').text(response.Director);        
        $('.movie-writer1').text("Writer: ");
        $('.movie-writer').text(response.Writer);        
        $('.movie-actors1').text("Actors: ");
        $('.movie-actors').text(response.Actors);
        $('.movie-language1').text("Language: ");
        $('.movie-language').text(response.Language);        
        $('.movie-country1').text("Country: ");
        $('.movie-country').text(response.Country);        
        $('.movie-awards1').text("Awards: ");
        $('.movie-awards').text(response.Awards);        
      }
    });
  }
});