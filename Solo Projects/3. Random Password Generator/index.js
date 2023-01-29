const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

document.getElementById('generate').addEventListener( 'click', getPasswords);
let pass_outputs = document.getElementsByClassName('password');
pass_outputs[0].addEventListener( 'click', (e) => autoCopy(e));
pass_outputs[1].addEventListener( 'click', (e) => autoCopy(e));

getPasswords(); //Generate 2 Passwords by default

function getPasswords(){
    let pass_outputs = document.getElementsByClassName('password');
    pass_outputs[0].innerText=generatePassword();
    pass_outputs[1].innerText=generatePassword();
}

function generatePassword(){
    let pass='';
    for(let i=0; i<15; i++){
        pass+=characters[Math.ceil(Math.random()*(characters.length-1))];
    }
    return pass;
}

function autoCopy( e ){
    var copyText = e.target.innerText;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}
