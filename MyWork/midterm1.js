function ChangeCalculator(order, money) {
          if (money < order) {
                    return -1;
          }
          let change = money - order;
          let result = {};
          result.B500 = Math.floor(change / 500);
          result.B100 = Math.floor((change % 500) / 100);
          result.B50 = Math.floor(((change % 500) % 100) / 50);
          result.B20 = Math.floor((((change % 500) % 100) % 50) / 20);
          result.B10 = Math.floor(((((change % 500) % 100) % 50) % 20) / 10);
          result.B5 = Math.floor((((((change % 500) % 100) % 50) % 20) % 10) / 5);
          result.B2 = Math.floor(((((((change % 500) % 100) % 50) % 20) % 10) % 5) / 2);
          result.B1 = Math.floor(((((((change % 500) % 100) % 50) % 20) % 10) % 5) % 2);
          result.value= (result.B500*500)+(result.B100*100)+(result.B50*50)+(result.B20*20)+(result.B10*10)+(result.B5*5)+(result.B2*2)+(result.B1*1);
          return result;
}

console.log(ChangeCalculator(222, 500));


let quest1 = {
          question: 'What is the capital of Thailand?',
          answers: ['Khon kaen', 'Chiang Mai', 'Bangkok', 'Pattaya'],
          correctAnswer: 3
        };
let quest2 = {
          question: `What is the result of '1' - 1 ?`,
          answers: [0, 'NaN', '11', 'error'],
          correctAnswer: 1
        };
        
let quest3 = {
          question: `Where do we live in ?`,
          answers: ['Venus', 'Pluto', 'Earth', 'Mercury'],
          correctAnswer: 3
        };
        
let quest4 = {
          question: `What is a primitive number data type?`,
          answers: ['1', 1, `1`, '1'],
          correctAnswer: 2
        };
        
let quest5 = {
          question: `what is the biggest star in the Milky way?`,
          answers: ['Jupiter', 'Earth', 'Sun', 'Cow Milk!!!'],
          correctAnswer: 3
        };

let questions=[quest1,quest2,quest3,quest4,quest5];

let player={
          name:"Paramat",
          question:[],
          answers:[],
          point:0

};

function play(player){
          for(let i=0;i<questions.length;i++){
                    let randQuestion=Math.floor(Math.random()*4);
                    console.log((i+1));
                    console.log(questions[randQuestion]);
                    player.question[i]=questions[randQuestion];
                    let userAnws=Math.floor(Math.random()*3)+1;
                    player.answers[i]=userAnws;
                    if(player.question[i].correctAnswer==player.answers[i]){
                              console.log("Correct!!!");
                              player.point++;
                    }
                    else{
                              console.log("Incorrect");
                    }
          }
}

play(player);

console.log(player);

let player1={
name:"Paramat",
dice:[],
result:[]
};
let player2={
name:"Pet-in",
dice:[],
result:[]
};

function RandomDice(){
          return Math.floor(Math.random()*6)+1;
}

function play(round){
          let count1=0;
          let count2=0;
          for(let i=0;i<round;i++){
                    player1.dice[i]=RandomDice();
                    player2.dice[i]=RandomDice();
                    if(player1.dice[i]>player2.dice[i]){
                              player1.result[i]="Win";
                              player2.result[i]="Lose";
                              count1++
                    }
                    else if(player1.dice[i]<player2.dice[i]){
                              player1.result[i]="Lose";
                              player2.result[i]="Win";
                              count2++;
                    }
                    else{
                              player1.result[i]="Draw";
                              player2.result[i]="Draw";
                    }
          }
          if(count1>count2){
                    return player1;
          }
          else if(count1<count2){
                    return player2
          }
          else{
                    return "Draw";
          }
}
console.log(play(5));
console.log(player1);
console.log(player2);

