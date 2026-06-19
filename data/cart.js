export let cart;
loadFromStorage();

export function loadFromStorage(){
        cart= JSON.parse(localStorage.getItem('cart'));

        if(!cart){


            cart = [{
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 2,
                    deliveryOptionId: '1'
                },
                {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryOptionId: '2'
                }
                ]; 
                // An empty array ([]) is truthy in JavaScript, so if the user removes all items,
                // cart becomes [] (not null), and this default cart is not assigned.
                
        }
}

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
     let matchingItem; //undefined
        cart.forEach((cartItem)=>{ //loop to find out if the product already exist in the cart array?
            if(cartItem.productId===productId){
                matchingItem=cartItem;  //storing the product's object in the variable.
            }
        });
        if(matchingItem){
            matchingItem.quantity+=1; // if the product is already in the cart, then just increase the quantity instead of addding the full product object again.
        }else{
            cart.push({ //adding the product's object in the cart array if it is not inside the cart already.
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
        }
        saveToStorage();
}

export function removeFromCart(productId){

    //idea: 1) create a new array. 2) loop through the cart. 3) add each product to the new array, except for this productId's product.
    const newCart = [];

    cart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){
            newCart.push(cartItem);
        }

    });

    cart=newCart;
    
    saveToStorage();
    
}
export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(cartItem.productId===productId){
            matchingItem=cartItem;
        }
    });

    matchingItem.deliveryOptionId= deliveryOptionId;
    saveToStorage();
 
}