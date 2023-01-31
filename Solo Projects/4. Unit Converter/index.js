
const conversions = {
    'feet': 3.281,
    'gallon': 0.264,
    'pound': 2.204,
}

document.getElementById('convert-button').addEventListener( 'click', convertUnits);

function convertUnits(){

    const input = document.getElementById('input').value;

    Object.entries(conversions).forEach(conversion => {
        const [type, value] = conversion;
        const output = document.getElementById(type+'-output');
        output.innerHTML = `<h3>${input*value} ${type.charAt(0).toUpperCase()}${type.substring(1,type.length)}</h3>`
      });
}