import {cart,addToCart,loadFromStorage} from '../../data/cart.js';

describe('test suite: addToCart',()=>{
   
    it('add existing product to the cart',()=>{
        spyOn(localStorage,'setItem');
       spyOn(localStorage,'getItem').and.callFake(()=>{
        return JSON.stringify([
            {
                productId:'5235-5352-2234dfsfd-3435',
                quantitiy:1,
                delieveryOptionId :'1'  
            }
        ]);
       });
     loadFromStorage();
       addToCart('5235-5352-2234dfsfd-3435');
       expect(cart.length).toEqual(1);
       expect(cart[0].quantitiy).toEqual(2);
       expect(cart[0].productId).toEqual('5235-5352-2234dfsfd-3435');
       expect(localStorage.setItem).toHaveBeenCalledTimes(1);

    });
    it('add new product to the cart',()=>{
     // mocking localstorage.setItem so it can not effext the orignal code
     spyOn(localStorage,'setItem');

        //mockcing localstorage.getItem to give us an empty array so can test that product is added succesfully
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
        loadFromStorage();
       
        addToCart('5235-5352-2s34fsfd-3435');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('5235-5352-2s34fsfd-3435');
        expect(cart[0].quantitiy).toEqual(1);
    })
})