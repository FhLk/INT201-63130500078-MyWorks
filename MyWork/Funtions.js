let product=[
          {id:1,price: 10},
          {id:2,price:5}
];
console.log(product)
let newProduct ={id: 3, price:20};
product = [...product,{...newProduct}];
console.log(product);

