const main = document.querySelector(".main");

fetch(genresListHttp + new URLSearchParams({
    api_key: api_key
}))
  .then(res => res.json())
  .then(data => {
    data.genres.forEach(item => {
        fetchMovieListByGenres(item.id, item.nome)
    });
  })

  const fetchMovieListByGenres = (id, genres) => {
    fetch(movieGenresHttp + new URLSearchParams({
        api_key: api_key,
        with_genres: id,
        page: Math.floor(Math.random()*3) + 1
    }))
    .then(res => res.json())
    .then(data => {
        makeCategoryElement(`${genres}_movies`, data.results);
        
    })
    .catch(err => console.log(err))
  }
    
  const makeCategoryElement = (category, data) => { 
    main.innerHTML += `
        <div class="movie-list">

                <button class="pre-btn">
                    <img src="img/prev.png" alt="previous button">
                </button>

                <h1 class="movie-category">${category.replace("_", " ")}</h1>

            <div class="movie-container" id="${category}">
            </div>

                <button class="next-btn">
                <img src="img/next.png" alt="next button">
                </button>

        </div>
    `
    console.log(category)
  }