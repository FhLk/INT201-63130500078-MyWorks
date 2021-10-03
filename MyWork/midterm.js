function RandomNumber(){
          let random=Math.floor(Math.random()*10)+1;
          return random;
}

function Play(value){
          let getValue=RandomNumber();
          console.log(getValue);
          if(value>getValue){
                    console.log("Too High\n"+"Number "+getValue);
          }
          else if(value<getValue){
                    console.log("Too Low\n"+"Number "+getValue);
          }
          else{
                    console.log("You WIN!");
          }
}

Play(10);


function Pound2kg(pound){
          const p=0.453592;
          return pound * p;
}

function Inch2meter(inch){
          const i=0.0254;
          return inch * i;
}

function BMI(user){
          let weight=Pound2kg(user.weight);
          let height=Inch2meter(user.height);
          let bmi=weight/Math.pow(height,2);
          return bmi;
}

users =[
{weight: 40.25, height: 40.75 },
{weight: 36.5, height: 39 },
{weight: 51, height: 32 }
];

for (const user of users) {
          console.log("BMI = " + BMI(user));
}

function ReverseText(text){
          text=String(text);
          let srt="";
          for(let i=text.length-1;i>=0;i--){
                srt+=text[i];    
          }
          return srt;
}

function ReplaceText(text){
          text=String(text);
          let vowels=["a","e","i","o","u"];
          let srt="";
          for(let i=0;i<text.length;i++){
                    if(vowels.includes(text[i].toLowerCase())){
                              srt+="*";
                    }
                    else{
                              srt+=text[i];
                    }
          }
          return srt;
}

function getVowels(text){
          text=String(text);
          let vowels=["a","e","i","o","u"];
          let count=0
          for(let i=0;i<text.length;i++){
                    if(vowels.includes(text[i].toLowerCase())){
                              count++;
                    }
          }
          return count;
}


console.log(getVowels("PARAMAT"));


function Random(){
          return Math.floor(Math.random()*100)+1;
}

let n1=Random();
let n2=Random();
let n3=Random();
let number=[n1,n2,n3];

function Sum(){
          let sum=0;
          for (let i of number){
                    sum+=i;
          }
          return sum;
}

function FindMax(){
          return Math.max(...number);
}

function FindMin(){
          return Math.min(...number);
}

function Interface(value){
          console.log(number);
          switch(value){
                    case 1:
                              console.log(Sum());
                              break;
                    case 2:
                              console.log(FindMax());
                              break;
                    case 3:
                              console.log(FindMin());
                              break;
          }
}

Interface(1);
Interface(2);
Interface(3);