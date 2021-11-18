import { Random,Find,Menu } from "./export/Random.js";

let select = Math.floor(Math.random()*3)+1;
let RandomNumber=[Random(),Random(),Random()];

// console.log(Menu());

let f =Find(select,RandomNumber);

console.log(`${RandomNumber}\n(${select}) ${f}`);