
const buttons = document.getElementsByClassName('score');

for( let i=0; i<buttons.length; i++){
    buttons[i].addEventListener( 'click', point_score);
}
function point_score( event ){

    let scored_by = event.target.classList[0]=='home-point' ? 'home':  'guest';
    let score = parseInt(event.target.innerText);

    document.getElementById(scored_by+'-counter').innerText=parseInt(document.getElementById(scored_by+'-counter').innerText)+score;

    score_compare();
}

document.getElementById('new-game').addEventListener( 'click', () => {
    document.getElementById('home-counter').innerText=0;
    document.getElementById('guest-counter').innerText=0;
})

function score_compare(){

    let lead = parseInt(document.getElementById('home-counter').innerText)>parseInt(document.getElementById('guest-counter').innerText) ? 'home' : 'guest';
    
    let trail = parseInt(document.getElementById('home-counter').innerText)>parseInt(document.getElementById('guest-counter').innerText) ? 'guest' : 'home';

    document.getElementById(lead+'-heading').style.color = "green";
    document.getElementById(trail+'-heading').style.color = "red";
}