import { product } from "./product.js";
import { showProduct } from "./product-list.js";

export let cart={item:[],totalPrice:0,totalQty:0};
const divCart=document.querySelector("#cart");

divCart.addEventListener("click",()=>{
          alert(ShowCart());
});

export default function ShowCart(){
          let str="";
          for(let i of cart.item){
                    str += `${i.name} ${i.price}x${i.qty} ${i.price*i.qty} Baht\n`;
          }
          str += `\n Total Qty: ${cart.totalQty}`;
          str += `\n Total Price: ${cart.totalPrice} Baht`;
          return str;
}
