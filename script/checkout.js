import {renderOrderSummary} from './checkout page/orderrsummary.js';
import { renderPaymentSummary } from './checkout page/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/bac-end.js';


new Promise((resolve)=>{
    console.log('Promise Start')
    setTimeout(()=>{
        console.log("Task Looad");
        resolve("The resolve parameter");
    },4000)
}).then((para)=>{
    console.log("Next step after promise",para);
})

renderOrderSummary();
renderPaymentSummary();


function practicingFetch(){
    fetch('https:myname/khan').then((responce)=>{
        return responce.json();

    }).then((products)=>{
        console.log(products);
  
    })

}
practicingFetch();