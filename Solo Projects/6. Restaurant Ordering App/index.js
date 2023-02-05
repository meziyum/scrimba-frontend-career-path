
import {menuArray} from "/data.js";

const items = document.getElementById('items');
renderItems();

let orderList=[];
menuArray.forEach( () => {orderList.push(0)});
let totalPrice=0;

document.addEventListener( 'click', (e) =>{

    if( e.target.dataset.item ){
        if(e.target.dataset.action === 'add')
            addItem(e.target.dataset.item);
        else if(e.target.dataset.action === 'minus')
            removeItem(e.target.dataset.item);
        else if(e.target.dataset.action === 'delete')
            removeItemAll(e.target.dataset.item);
    }
    else if( e.target.id == 'order'){
        document.getElementById('user-info').style.display='block';
    }
    else if( e.target.id == 'pay'){

        e.preventDefault();

        const formData = new FormData(e.target.parentElement);
        const success = document.getElementById('success');

        success.innerHTML=
        `
            <h2>Thanks, ${formData.get('name')}! Your order is on its way!</h2>
        `;
        success.style.display='block';

        document.getElementById('user-info').style.display='none';
        totalPrice=0;
        orderList.forEach( (element, index)=> {
            orderList[index]=0;
        })
        console.log(orderList)
        e.target.parentElement.reset();
        renderOrderList();
        setTimeout(()=>{
            success.style.display='none';
        }, 7500);
    }
});

function renderItems(){

    let itemHTML='';

    menuArray.forEach(item => {
        itemHTML+=
        `
            <div class="item">
                <div class="item-icon">${item.emoji}</div>
                <div class="item-info">
                    <h2>${item.name}</h2>
                    <h4>${item.ingredients.toString()}</h4>
                    <h3>$${item.price}</h3>
                </div>
                <button class="plus action" data-item="${item.id}" data-action="${'add'}">+</button>
            </div>
        `;
    });

    items.innerHTML=itemHTML;
}

function renderOrderList(){

    let orderHTML='';

    const yourOrder = document.getElementById('your-order'); 

    if(totalPrice>0)
        yourOrder.style.display='flex';
    else{
        yourOrder.style.display='none';
    }

    menuArray.filter( (item) => {
        if(orderList[item.id]>0){
            orderHTML+=
                `
                    <div class="order-item">
                        <h3 class="order-item-name">${item.name}</h3>
                        <h3>${item.price}$ * ${orderList[item.id]} = ${item.price*orderList[item.id]} | </h3>
                        <button class="minus action" data-item="${item.id}" data-action="${'minus'}">-</button>
                        <button class="cancel action" data-item="${item.id}" data-action="${'delete'}">X</button>
                    </div>
                `;
        }
    });
    document.getElementById('order-list').innerHTML= orderHTML;
}

function addItem( id ){
    orderList[id]++;
    updatePrice(id, 1);
    renderOrderList();
}

function removeItem(id){
    orderList[id]--;
    updatePrice(id, -1);
    renderOrderList();
}

function removeItemAll(id){
    updatePrice(id, -1*orderList[0]);
    orderList[id]=0;
    renderOrderList();
}

function updatePrice(id, action){
    menuArray.forEach((item)=>{
        if(id==item.id)
            totalPrice=totalPrice+(item.price)*action;
    })
    document.getElementById('total').innerText= `$${totalPrice}`;
}