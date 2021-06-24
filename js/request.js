function getMovies(){
    $.ajax({
        url: "https://simple-acoustic-platinum.glitch.me/movies",
        type: "GET",
        success: function(data){
            massageData(data);
        },
        error: function(){
            window.reload();
        }


    })
}
getMovies();



function massageData(data){
    let movies = [];
    data.forEach(function (movie){
        // sorts property values to give Not Found in-place of empty string;
        for (let property in movie){
            if (movie[property] == ""){
                movie[property] = "Not Found"
            }
        }
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
        // console.log(movies);

    })

    appendNewData(movies);
}
