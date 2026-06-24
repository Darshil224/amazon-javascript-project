import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import { loadProducts, loadProductsFetch } from "../data/products.js";

import { loadCart } from "../data/cart.js";

// import '../data/cart-class.js';
// import '../data/backend-practice.js';


/*
//using just a callback
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/




/*
//promises in javascript:-
new Promise((resolve)=>{
    console.log('start promise');
    loadProducts(()=>{
        console.log('finished loading');
        resolve();
    });

}).then(()=>{
    console.log('next step');
});
*/

/*
//explanation:-
new Promise((resolve) => {
  // Code inside the Promise runs immediately.

  loadProducts(() => {
    // Called after products finish loading.

    resolve(); // Marks the Promise as completed successfully.
  });

}).then(() => {
  // Runs only after resolve() is called.
});
*/

/*
//lets actually use a promise in our project
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});

*/


/*
//using promise in our project:-
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });

}).then(()=>{
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });

}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/



/*
//the same code written abovs using the promise can be written like this, if we just use the callbacks:-
//problem wwith using just the callbacks:- Multiple callbacks cause a lot of nesting, and hence as a result it causes a lot of indentation, which makes our code harder to work with:-

loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/


//two features of Promise:-

/*
// 1) We can give resolve function a value and then this value will get stored as the parameter inside .then() :- So this lets us share a value between two steps of a Promise

new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('darshil');
    })

}).then((value)=>{
    console.log(value);
})

*/

//2) We can run multiple promises at the same time:- eg:- instead of waiting for products to load then wait for cart to load, we can actually load the products and the cart at the same time. 

//TO do this , we need to use a feature:- Promise.all()  :-

Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
        resolve();
        });
    })

]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
//this works same as we did the code above,  below comment (using promise in our project).

//also we can save values inside the resolve functions of promises and the will be stored inside the array parameter inside the .then() function.






// renderOrderSummary();
// renderPaymentSummary();