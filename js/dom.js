function appendNewData(movie) {
    // append each movie
    movie.forEach((movie) => {
        $("#cardHolder").append(`
                <div id="movie-div-${movie.id}" class="movie-div my-4 p-0 col">
                    <span class="text-center title-span display-6 overflow-p">${movie.title.toUpperCase()} (${movie.year})</span> 
                    <div class="movie-div-house">
                        
                        <div class="picture-display">
                            <div class="d-flex flex-column flex-nowrap justify-content-center align-items-center">
                            
                            <img class="movie-poster" src="${movie.poster}"">
                            </div>
                        </div>
                        <div class="text-display movie-div border d-none"> 
                            <div class="text-display-inner">
                                <div class="card text-card"> 
                                    <span class="w-100 text-warning bg-dark text-center">${movie.rating}/5 <img class="star-img" src="assets/star.svg"></span>
                                    <div class="card-body"> 
                                        <div class="d-flex justify-content-center ">
                                         
                                        
                                        </div>
<!--                                        <hr>-->
                                        <div class="text-center"> Plot: </div>
<!--                                        <div class="mb-1 d-flex justify-content-center"> -->
<!--&lt;!&ndash;                                        <span class="text-warning bg-dark "> Plot: </span>&ndash;&gt;-->
<!--                                        </div>-->
                                        <p class="text-movie-desc text-center">${movie.plot}</p>
                                        <hr/>
                                        <br>
                                        <p class="text-movie-desc text-center">Directed by: <br>${movie.director}</p>
                                        <p class="text-movie-desc text-center">Starring: <br>${movie.actors}</p>

                                        
                                    </div>
                                </div>
                                
                            
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
        if (!$(this).children().children(".text-display").hasClass('d-none')) {

            $(this).children().children(".text-display").toggleClass('d-none');
            $(this).children().children(".picture-display").toggleClass('d-none');

        } else {
            // console.log("else");
            // console.log($(this).children().children().first());
            $(this).children().children(".text-display").toggleClass('d-none');
            $(this).children().children(".picture-display").toggleClass('d-none');

        }

    })
}
