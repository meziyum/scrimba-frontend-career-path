
const key='3068fa44'; //API Key for OMDB
const list = document.getElementById('main');

var watchList=localStorage.getItem("watchlist");
var moviesList;
list.addEventListener('click', (e) => handleClicks(e));

if(watchList){
    moviesList =  watchList.split(",");
    moviesList.pop();
    console.log(moviesList)
    var innerHTML='';

    moviesList.forEach(id => {
        fetch(`http://www.omdbapi.com/?apikey=${key}&i=${id}`)
        .then( res => res.json())
        .then( data => {
            const {Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID}=data;
            innerHTML+=`
            <div class="movie">
                <img class="poster" src="${Poster}">
                <div class="movie-main">
                    <h4>${Title} ${imdbRating}</h4>
                    <p class="movie-info">
                        ${Runtime}
                         | 
                        ${Genre} 
                        <button class="remove-watchlist" data-id="${imdbID}">
                        -
                        </button>
                    </p>
                    <p class="plot">${Plot}</p>
                </div>
            </div>
            `;
            list.innerHTML=innerHTML;
        })
    });
}
else{
    list.innerHTML=`
    <div id='empty-watchlist'>
    <h3>Your watchlist is looking a little empty</h3>
    <div id="add" onclick="window.location='index.html';">
        <button>
        +
        </button>
        <h3>Lets add some movies!</h3>
    </div>
    </div>
    `;
}

function handleClicks(e){
    if(e.target.classList.contains('remove-watchlist')){
        const movie = e.target.parentElement.parentElement.parentElement;
        if(moviesList.length>1){
        moviesList.splice( moviesList.indexOf(e.target.dataset.id),1);
        localStorage.setItem("watchlist", moviesList.toString()+",");
        }
        else{
            localStorage.removeItem("watchlist");
        }
        movie.style.display='none';
    }
}