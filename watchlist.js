document.addEventListener('DOMContentLoaded', function () {
  const watchlistJSON = localStorage.getItem("watchlist")
  const watchlist = JSON.parse(watchlistJSON)
  console.log(document)
  document.getElementsByClassName("movies-container")[0].innerHTML = renderMovies(watchlist)
});

function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map(function (currentMovie) {
        return `<div class="movie card">
        <img class = "card-image-top" src="${currentMovie.Poster}" alt="Card image cap">
          <div class="card-body">
            <h5 class = "card-title">"${currentMovie.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${currentMovie.Year}</h6>
            
          </div>
          </div>`
    })
    return movieHtmlArray.join('')
}