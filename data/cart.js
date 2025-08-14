
export let cart;
loadFromStorage();


//function that load cart from the local storage
export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart){
    cart = [{
      productId:'5235-5352-2234dfsfd-3435',
      quantitiy:2,
      delieveryOptionId :'1'
      
      
    },
    {
      productId:'5235-5352-2s34fsfd-3435',
      quantitiy:1,
      delieveryOptionId :'2'
  
      
    }];
  }
}


function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}





// function that add product to the cart
export function addToCart(productId){
    let matchingItem;
    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    })
    if(matchingItem){
      matchingItem.quantitiy += 1;
    }
    else{
      cart.push({
        productId: productId,
        quantitiy: 1,
        delieveryOptionId:'1'
       
        
      })
    }
    saveToStorage();
}


// function that update add to cart quanitity on home page
export function updateCartQuantity(){
  
    let cartQuantitiy = 0;
    cart.forEach((cartItem)=>{
     cartQuantitiy += cartItem.quantitiy;
    })
    
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantitiy;
   

}


// function that remove product from cart

 export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem)=>{
  if(cartItem.productId !== productId){
    newCart.push(cartItem);
  }
  })
  cart = newCart;
  saveToStorage();
 }


 //function that update individual product quatitity 
 export function updateQuantity(productId,newQuantity){
let matchingItem;
cart.forEach((item)=>{
 if(item.productId === productId){
  matchingItem = item;
 }

})
matchingItem.quantitiy  = newQuantity;
saveToStorage();
 }


 // function that update delivery option on checkoup page by changing delivery option id 
 export function updatDelieveryOptionId(productId,delieveryOptionId){
  let matchingItem;
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  })
  matchingItem.delieveryOptionId = delieveryOptionId;
  saveToStorage();
  
 }