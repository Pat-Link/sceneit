//const movieTitle = document.querySelector('movie-title');
//const releaseDate = document.querySelector('release-date');
//const moviesContainer = document.getElementById('movies-container');


document.addEventListener('DOMContentLoaded', function () {
    //moviesContainer.innerHTML = renderMovies(movieData)
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains("add-button")) {
            const movieID = event.target.dataset.imdbid;
            //console.log(movieID)
            saveToWatchlist(movieID)
        }
    })
});

function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map(function (currentMovie) {
        return `<div class="movie card">
        <img class = "card-image-top" src="${currentMovie.Poster}" alt="Card image cap">
          <div class="card-body">
            <h5 class = "card-title">"${currentMovie.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${currentMovie.Year}</h6>
            <button href="#" class="btn btn-primary add-button" data-imdbid=${currentMovie.imdbID}>Add Movie</button>
          </div>
          </div>`
    })
    return movieHtmlArray.join('')
}

const myForm = document.getElementById("search-form");
myForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const searchString = document.getElementsByClassName("search-bar")[0].value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    await fetch("https://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
        .then(async function(response) {
            return await response.json()

        })
        .then (function(data) {
            document.getElementsByClassName("movies-container")[0].innerHTML = renderMovies(data.Search)
            movieData = data.Search
        })
    
})


const saveToWatchlist = (movieID) => {
    //console.log(movieID)
    const movie = movieData.find(function (currentMovie) {
        return currentMovie.imdbID == movieID;
    })
    let watchlistJSON = localStorage.getItem("watchlist");
    let watchlist = JSON.parse(watchlistJSON);
    console.log(watchlist)
    if (watchlist == null) {
        watchlist = []
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem("watchlist", watchlistJSON)
    
}
