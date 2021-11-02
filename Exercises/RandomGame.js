function Random(){
          return Math.floor(Math.random()* 10)+1;
}

let player ={id:1,name:"Paramat",guess: Random()}

function play(player){
          let Number=Random();
          let NumPlayer=player.guess;
          if(NumPlayer>Number){
                    console.log("Too High");
                    console.log(`${Number}`);
                    console.log(`${NumPlayer}`);
          }
          else if(NumPlayer<Number){
                    console.log("Too Low");
                    console.log(`${Number}`);
                    console.log(`${NumPlayer}`);
          }
          else{
                    console.log("You WIN!!!!");
          }
}

play(player);