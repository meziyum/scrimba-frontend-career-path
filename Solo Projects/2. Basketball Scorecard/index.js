
const buttons = document.getElementsByClassName('score');

for( let i=0; i<buttons.length; i++){
    buttons[i].addEventListener( 'click', point_score);
}
function point_score( event ){

    let scored_by = event.target.classList[0]=='home-point' ? 'home':  'guest';
    let score = parseInt(event.target.innerText);

    document.getElementById(scored_by+'-counter').innerText=parseInt(document.getElementById(scored_by+'-counter').innerText)+score;
}