// let,var,conts
//let
let i = 10;
let u = 'This is String';
console.log('I is ' + i);
console.log('U is ' + u);
//เป็นการประกาศตัวแปรโดยใช้ let เพื่อนำไปแสดงผลบน console

//const
const pie = 3.14;
var area;
function circle(r){
    area = pie*r*r;
    console.log(area);
}
circle(3);
//เป็นโปรแกรมการหาพื้นที่วงกลม โดยกำหนดค่าพาย โดยใช้ const

//var
var Say = 'Hey';
var Say = 'Haylo';
function Welcome() {
  var msg = 'Hello';
}
console.log(Say);
//เป็นการประกาษค่าและทดลองอัพเดทค่าโดยประกาศเป็น var และแสดงผลบน cosole

//for
for(let i = 0; i < 10; i++){
    console.log(i);
}
//ทดลองการใช้ for loop เพื่อแสดงผลเลข 1-10

//if-else
var num = 10;
var num2 = 20;
function check(){
    if(num == num2){
        console.log("Equal");
    }else
        console.log("Not Equal");
}
check();
//ทดลองการใช้ if-else ในการเช็คค่าว่าเท่ากันหรือไม่

//switch
let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
//ทดลองการใช้ switch ตามเงื่อนไขที่กำหนด

var x=1;
x=2;
{
          var x=3;
          console.log(x);
}
console.log(x);

function A(){
       var a=10;
       console.log(a);   
}

function B(){
          var b=a+10;
          console.log(b);
}
B();

//for
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
//ทดลองการใช้ for loop เพื่อแสดงผลเลข 1-10










