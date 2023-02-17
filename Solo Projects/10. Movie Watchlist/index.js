
const key='3068fa44'; //API Key for OMDB

const search_button = document.getElementById('search-btn');
search_button.addEventListener('click', (e) => fetchResults(e));
const list = document.getElementById('main');
list.addEventListener('click', (e) => handleClicks(e));
var watchList=localStorage.getItem("watchlist");

function fetchResults(e){

    e.preventDefault();
    const formData = new FormData(e.target.parentElement);
    fetch(`http://www.omdbapi.com/?apikey=${key}&s=${formData.get('search-content')}`)
        .then( res => res.json())
        .then( data => {

            if(data.Search){
                var innerHTML='';
                data.Search.map( movie => {
                    const { Title, imdbID, Poster} = movie;
                    fetch( `http://www.omdbapi.com/?apikey=${key}&i=${imdbID}`)
                    .then( res => res.json())
                    .then( info => {
                        innerHTML+=`
                        <div class="movie">
                            <img class="poster" src="${Poster}">
                            <div class="movie-main">
                                <h4>${Title} ${info.imdbRating}</h4>
                                <p class="movie-info">
                                    ${info.Runtime}
                                     | 
                                    ${info.Genre} 
                                    <button class="add-watchlist" data-id="${imdbID}">
                                    +
                                    </button>
                                </p>
                                <p class="plot">${info.Plot}</p>
                            </div>
                        </div>
                        `;
                        list.innerHTML=innerHTML;
                    })
                })
            }
            else{
                list.innerHTML=`<h3 id="not-found">Unable to find what you are looking for. Please try another search.</h3>`;
            }
        })
}

function handleClicks(e){
    if(e.target.classList.contains('add-watchlist')){
        const movie = e.target.parentElement.parentElement.parentElement;
        console.log(e.target.dataset.id)
        if(watchList)
        watchList+=e.target.dataset.id+",";
        else
        watchList=e.target.dataset.id+",";
        localStorage.setItem("watchlist", watchList);
        movie.style.display='none';
    }
}