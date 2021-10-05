const products = JSON.parse(shoplist);


for (let val of products){

    document.getElementById("products").innerHTML += `<div class="product"> <h1>${val.name}</h1> </div>
    <button type="button" class="btn btn-secondary"> Add to cart </button>`;

}

//Empty array that gets filled up
let cart = [];


function addToCart(obj){

    //Cart empty
    if(cart.length == 0){
        cart.push(obj); //add Object to end of cart array
    }

    /* ‘find‘ function searches in array, returns true if found */
    /* else if (cart.find(function(val){return val.name == obj.name} i.e. returns true or false*/
    else if(cart.find((val) => val.name == obj.name)){
        obj.qtty ++; 
    }

    else {
        cart.push(obj);
    }
}

let buttons = document.getElementsByClassName("product-button");

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        
        }
    )
}


//Display shopping cart

function createRow (){

}


function total(){
    let total = 0;
    for (let val of cart){
        total = total + val.price * val.qutty;
    }
}

function plusQtty(index){
    cart[index].qtty++; //Increase by one
    document.getElementsByName("cart-qutty")[index].innerHTML = cart[index].qutty;
}

//getElementsByName --> Array --> INDEX!!