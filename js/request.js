function getMovies(){
    $.ajax({
        url: "https://simple-acoustic-platinum.glitch.me/movies",
        type: "GET",
        success: function(data){
            massageData(data);
        }


    })
}
getMovies();



function massageData(data){
    let movies = [];
    data.forEach(function (movie){
        movies.push(
            {
            actors: movie.actors,
            director: movie.director,
            genre: movie.genre,
            id: movie.id,
            plot: movie.plot,
            poster: movie.poster,
            rating: movie.rating,
            title: movie.title,
            year: movie.year
        }
        );
        console.log(movies);

    })
    appendNewData(movies);
}
