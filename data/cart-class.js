class Cart{
    cartItems;
    localStorageKey;
    constructor(localStorageKey){
        this.localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

     //function that load cart from the local storage
     loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
        if(!this.cartItems){
          this.cartItems = [{
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

      
     
   
   
   //function that save items in the cart to local storage
     saveToStorage(){
        localStorage.setItem(this.localStorageKey,JSON.stringify(this.cartItems));
      }
    
    
      
    // function that add product to the cart
     addToCart(productId){
      let matchingItem;
      this.cartItems.forEach((cartItem)=>{
        if(productId === cartItem.productId){
          matchingItem = cartItem;
        }
      })
      if(matchingItem){
        matchingItem.quantitiy += 1;
      }
      else{
        this.cartItems.push({
          productId: productId,
          quantitiy: 1,
          delieveryOptionId:'1'
         
          
        })
      }
      this.saveToStorage();
    }
    
    
    // function that update add to cart quanitity on home page
    updateCartQuantity(){
      
      let cartQuantitiy = 0;
      this.cartItems.forEach((cartItem)=>{
       cartQuantitiy += cartItem.quantitiy;
      })
      
      document.querySelector('.js-cart-quantity').innerHTML = cartQuantitiy;
     
    
    }
    
    
    
    // function that remove product from cart
    
     removeFromCart(productId){
      const newCart = [];
      this.cartItems.forEach((cartItem)=>{
      if(cartItem.productId !== productId){
        newCart.push(cartItem);
      }
      })
      this.cartItems = newCart;
      this.saveToStorage();
     }
    
    
     //function that update individual product quatitity 
      updateQuantity(productId,newQuantity){
      let matchingItem;
      this.cartItems.forEach((item)=>{
       if(item.productId === productId){
        matchingItem = item;
       }
      
      })
      matchingItem.quantitiy  = newQuantity;
      this.saveToStorage();
       }
    
    
       // function that update delivery option on checkoup page by changing delivery option id 
      updatDelieveryOptionId(productId,delieveryOptionId){
      let matchingItem;
      this.cartItems.forEach((cartItem)=>{
        if(productId === cartItem.productId){
          matchingItem = cartItem;
        }
      })
      matchingItem.delieveryOptionId = delieveryOptionId;
      this.saveToStorage();
      
     }
}







  
  
  // const cart =  new Cart('cart-oop');
  // const bunsinessCart = new Cart('business-oop');

  
  // console.log(cart)
  // console.log(bunsinessCart);
  // console.log(bunsinessCart instanceof Cart);
  
  
  
  
  
  
  
  
  
  
  
  
   
  
  
   