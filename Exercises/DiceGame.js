let player1 ={Name:"Paramat",Dice:[],result:[]};
let player2 ={Name:"Pet-in",Dice:[],result:[]};

function Dice(){
          return Math.floor(Math.random()*6)+1;
}

function play(player1,player2,round){
          let player1point=0;
          let player2point=0;
          for(let i=0;i<round;i++){
                    player1.Dice.push(Dice());
                    player2.Dice.push(Dice());
                    console.log(`Round ${i+1}`);
                    console.log(`Player 1 :${player1.Dice[i]}`);
                    console.log(`Player 2 :${player2.Dice[i]}`);
                    if(player1.Dice[i]>player2.Dice[i]){
                              player1.result.push("Win");
                              player2.result.push("Lose");
                              player1point++;
                              console.log("Player 1 : Win\n");
                    }
                    else if(player1.Dice[i]<player2.Dice[i]){
                              player2.result.push("Win");
                              player1.result.push("Lose");
                              player2point++;
                              console.log("Player 2 : Win\n");
                    }
                    else{
                              player1.result.push("Draw");
                              player2.result.push("Draw");
                              console.log("Player : Draw\n");
                    }
          }
          if(player1point>player2point){
                    return player1;
          }
          else if(player1point<player2point){
                    return player2;
          }
          else{
                    return "Player Draw";
          }
}

let p=play(player1,player2,5);

console.log(p);