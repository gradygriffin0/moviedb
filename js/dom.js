function appendNewData(movie) {
    // append each movie
    movie.forEach((movie) => {
        $("#cardHolder").append(`
                <div id="movie-div-${movie.id}" class="movie-div my-4 p-0 col">
                <span class="text-center display-6 overflow-p">${movie.title.toUpperCase()} (${movie.year})</span> 
                    <div class="movie-div-house container-fluid">
                        
                        <div class="picture-display">
                            <div class="d-flex flex-column flex-nowrap justify-content-center align-items-center">
                            
                            <img src="${movie.poster}"">
                            </div>
                        </div>
                        <div class="text-display movie-div border d-none"> 
                            <div class="text-display-inner d-flex flex-column flex-nowrap justify-content-center align-items-center">
                           
                            
                            </div>                    
                        </div>
                    </div>
                </div>  
        `)
    })

    addClickEvents();
}

function addClickEvents() {
    $(".movie-div").click(function () {
        $(this).children().children().first().fadeToggle(500, function(){
            $(this).next().toggleClass('d-none');
        });

    })
}
