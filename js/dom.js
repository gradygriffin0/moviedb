function appendNewData(movie){
    movie.forEach((movie) => {
        $("#cardHolder").append(`

            <div id="movie-div-${movie.id}" class="movie-div my-4 col">
                <div class="d-flex flex-column flex-nowrap justify-content-center align-items-center">
                <span class="text-center display-6 overflow-p">${movie.title.toUpperCase()} (${movie.year})</span> 
                <img src="${movie.poster}"">
                </div>
            </div>
            
        `)
    })
}