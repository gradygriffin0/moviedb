function appendNewData(movie){
    movie.forEach((movie) => {
        $("#cardHolder").append(`
        <div id="movie-div-${movie.id}" class="movie-div"> <img src="${movie.poster}""></div>
        `)
    })
}