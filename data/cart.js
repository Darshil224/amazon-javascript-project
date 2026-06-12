export const cart=[]; 
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
            quantity: 1
        });
        }
}