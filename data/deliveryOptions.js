export const delieveryOptions = [{
    id:'1',
    deliveryDays:7,
    price:0
},
{
    id:'2',
    deliveryDays:3,
    price:300
},{
    id:'3',
    deliveryDays:1,
    price:450
}]

export function getDelieveryOption(delieveryOptionId){
    let delieveryOption;
    delieveryOptions.forEach((option)=>{
    if(option.id === delieveryOptionId){
    delieveryOption = option;
    }
    });
    return delieveryOption || delieveryOptions[0];
}  