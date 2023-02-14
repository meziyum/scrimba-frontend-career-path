
const key='3068fa44';

document.getElementById('search-btn').addEventListener('click', (e) => fetchResults(e));

function fetchResults(e){

    e.preventDefault();
    const formData = new FormData(e.target.parentElement);
    fetch(`http://www.omdbapi.com/?apikey=${key}&s=${formData.get('search-content')}`)
        .then( res => res.json())
        .then( data => {

            if(data.Search){
                console.log('tes')
                var innerHTML='';
                data.Search.map( movie => {
                    const { Title, imdbID, Poster} = movie;
                    fetch( `http://www.omdbapi.com/?apikey=${key}&i=${imdbID}`)
                    .then( res => res.json())
                    .then( info => {
                        console.log(info)
                        innerHTML+=`
                        <div class="movie">
                            <img class="poster" src="${Poster}">
                            <div class="movie-main">
                                <h4>${Title} ${info.imdbRating}</h4>
                                <p class="movie-info">
                                    ${info.Runtime}
                                     | 
                                    ${info.Genre}
                                     | 
                                    <button id="add-watchlist">
                                    +
                                    </button>
                                </p>
                                <p class="plot">${info.Plot}</p>
                            </div>
                        </div>
                        `;
                        document.getElementById('main').innerHTML=innerHTML;
                    })
                })
            }
            else{
                document.getElementById('main').innerHTML=`<h3>Unable to find what you are looking for. Please try another search.</h3>`;
            }
        })
}

function fetchMoreInfo(){

}