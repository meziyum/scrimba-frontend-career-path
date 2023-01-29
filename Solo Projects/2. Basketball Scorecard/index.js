
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
    document.getElementById(lead+'-heading').style.color = "white";
    document.getElementById(trail+'-heading').style.color = "white";
})

function score_compare(){

    let home_counter = parseInt(document.getElementById('home-counter').innerText);
    let guest_counter = parseInt(document.getElementById('guest-counter').innerText);

    if( guest_counter == home_counter){
        document.getElementById('home-heading').style.color = "white";
        document.getElementById('guest-heading').style.color = "white";
    }
    else if( home_counter > guest_counter){
        document.getElementById('home-heading').style.color = "green";
        document.getElementById('guest-heading').style.color = "red";
    }
    else{
        document.getElementById('home-heading').style.color = "red";
        document.getElementById('guest-heading').style.color = "green";
    }
}