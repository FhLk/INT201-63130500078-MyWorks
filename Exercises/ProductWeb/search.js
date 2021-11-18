import { product } from "./product.js";
import { showProduct } from "./product-list.js";

const searchbutton = document.querySelector("#search-icon");
const searchbar = document.querySelector("#search-bar");
let toggle = false;
searchbutton.addEventListener("click", () => {
          toggle = !toggle;
          if (toggle) {
                    searchbar.innerHTML = `<span><input type = 'text' placeholder="Search..." id="searchValue" class="form-control rounded"></span>`
                    let searchValue=document.querySelector("#searchValue");
                    searchValue.addEventListener('keyup',(e)=>{
                              let searchProduct=[];
                              let text=searchValue.value.toLowerCase();
                              for(let pd of product){
                                        if(pd.name.toLowerCase().includes(text)){
                                                  searchProduct.push(pd);
                                        }
                              }
                              if(e.code=='Backspace'){
                                        searchProduct=[];
                                        for(let pd of product){
                                                  if(pd.name.toLowerCase().includes(text)){
                                                            searchProduct.push(pd);
                                                  }
                                        }
                              }
                              showProduct(searchProduct);
                              if(text==''){
                                        showProduct();
                              }
                    })
                    
          }
          else {
                    searchbar.innerHTML = "";
          }
});