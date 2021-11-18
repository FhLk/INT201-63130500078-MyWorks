import { cart } from "./cart.js";
import { product } from "./product.js";

showProduct();

let test=0;

export function showProduct(list=product) {
          const divProducts = document.querySelector("#products");
          divProducts.setAttribute("class", "container row justify-content-center mx-auto");
          divProducts.innerHTML="";
          for (let i = 0; i < list.length; i++) {
                    const ProductList = document.createElement("div");
                    ProductList.setAttribute("id", list[i].id);
                    ProductList.setAttribute("class", "m-2 container col-xs-12 col-md-6 col-lg-6 col-xl-3 card rounded-0 bg-light border-light");
                    ProductList.setAttribute("style", "margin-bottom: 10px; text-align: center; ");

                    const BoxProduct = document.createElement("div");
                    BoxProduct.setAttribute("class", "box-body");

                    const ProductImage = document.createElement("img");
                    ProductImage.setAttribute("src", list[i].image);
                    ProductImage.setAttribute("style", "width:20%;height:20%;")
                    BoxProduct.appendChild(ProductImage);

                    const idProduct = document.createElement("p");
                    idProduct.setAttribute("style", "color: blue");
                    idProduct.textContent = `ID: ${list[i].id}`;
                    BoxProduct.appendChild(idProduct);

                    const nameProduct = document.createElement("p");
                    nameProduct.textContent = `Name: ${list[i].name}`;
                    BoxProduct.appendChild(nameProduct);

                    const priceProduct = document.createElement("p");
                    priceProduct.textContent = `Price: ${list[i].price}`;
                    BoxProduct.appendChild(priceProduct);

                    const qtyProduct = document.createElement("p");
                    qtyProduct.textContent = `Stock: ${list[i].qty}`;
                    BoxProduct.appendChild(qtyProduct);

                    const buttonProduct = document.createElement("button");
                    buttonProduct.setAttribute("type", "button");
                    buttonProduct.setAttribute("class", "btn btn-outline-dark rounded-0");
                    buttonProduct.addEventListener("click",()=>{
                              if(list[i].qty>0){
                                        alert(`You add Product`);
                                        --list[i].qty;
                                        showProduct();
                                        if(cart.item.includes){
                                        cart.item.push({
                                                  id:list[i].id,
                                                  name:list[i].name,
                                                  price:list[i].price,
                                                  qty:0
                                        });
                                        console.log(cart.item);
                                        cart.item.forEach((pc)=>{
                                                  if(list[i].id==pc.id){
                                                            pc.qty+=1;
                                                  }
                                        })
                              }
                              else{
                                        alert(`!!!!This Product SOLD OUT!!!!`);
                              }
                    });
                    buttonProduct.textContent = "Add Now";
                    BoxProduct.appendChild(buttonProduct);
                    
                    ProductList.appendChild(BoxProduct);
                    divProducts.appendChild(ProductList);

          }
}
