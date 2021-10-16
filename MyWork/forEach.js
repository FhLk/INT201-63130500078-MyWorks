//Group 1 Method forEach
// forEach((element) => { ... } ) 
// forEach((element, index) => { ... } ) 
// forEach((element, index, array) => { ... } )

let number = [1,2,3,4,5];
let sum=0;
number.forEach(SumArray)

function SumArray(e){
          sum+=e;
          console.log(sum);
}




// let str=["J","a","v","a","S","c","r","i","p","t"];
// let text="";
// let char="";
// str.forEach(Change);
// function Change(e,i){
//           if(i%2==0){
//                     char=e;
//           }
//           else{
//                     char="*";
//           }
//           text+=char;
// }
// console.log(text);

// let people=[
// {id:1,name:"Paramat"},
// {id:2,name:"Pet-in"}
// ];
// people.forEach((e,i,a)=>{
//           if(e.id==1){
//                     people[i].sex="Male";
//           }
//           else{
//                     people[i].sex="Female";
//           }
//           people.push(...a);
// });
// console.log(people);


// let colors = ['blue', 'green', 'white'];
// colors.forEach(function iterate(item){
//           console.log(item);
// });
// // logs "blue"
// // logs "green"
// // logs "white"