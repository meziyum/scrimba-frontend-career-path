
document.addEventListener( 'click', (e) => {
    if(e.target.dataset.color){
        navigator.clipboard.writeText(e.target.dataset.color);
        alert("Copied the color: " + e.target.dataset.color);
    }
    else if(e.target.id == 'get-color'){
        e.preventDefault();

        const formData = new FormData(e.target.parentNode);

        fetch( `https://www.thecolorapi.com/scheme?hex=${formData.get('color').slice(1)}&mode=${formData.get('scheme')}&count=5`,{

        })
        .then( res => res.json())
        .then( data => {
            let innerHTML='';
            for( color of data.colors){
                let color_hex=color.hex.value;
                innerHTML+=`
                    <div class="color-div">
                        <div class="color-show" style="background-color: ${color_hex}">
                        </div>
                        <h6 data-color="${color_hex}">${color_hex}</h6>
                    </div>
                `
            }
            document.getElementById('color-list').innerHTML=innerHTML;
        })
    }
})