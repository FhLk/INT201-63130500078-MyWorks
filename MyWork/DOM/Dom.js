const sec2g1 = document.querySelector('#Section2 .group1');
console.log(sec2g1);

sec2g1.textContent = "Ready Sleep";

let s = document.createAttribute('style');

sec2g1.setAttributeNode(s);
sec2g1.style.color = "red";

// function inputText() {
//     let contenttext = "INT201 s2 Group1"
//     document.getElementById("content").innerHTML = contenttext
// }

// inputText();

// const group1 = document.querySelector("#Section2 .group1");

// group1.innerHTML = "work hard play harder";

// group1.style.color = 'Blue';

// group1.style.fontSize = "larger";

// var g1 = document.createAttribute("style");

// g1.value = "color: Blue";

// const Group1 = document.querySelector("#Section2 .group1");

// Group1.innerHTML = " work hard play harder ";

// Group1.setAttributeNode(g1);

// Group1.style.fontSize = "larger";