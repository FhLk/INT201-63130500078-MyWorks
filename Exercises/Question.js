let question=[];

let q1 = {Q:'1.1+1 = ?',C:["1) 1", "2) 2","3) 3","4) 4"],A:2};

let q2 = {Q:'2.1+1 = ?',C:["1) 1", "2) 2","3) 3","4) 4"],A:4};

let q3 = {Q:'3.3+3 = ?',C:["1) 5","2) 6","3) 7","4) 8"],A:2};

let q4 = {Q:'4.4+4 = ?',C:["1) 9","2) 10","3) 8","4) 12"],A:3};

let q5 = {Q:'5.5+5 = ?',C:["1) 5","2) 2","3) 10","4) 9"],A:3};

question.push(q1,q2,q3,q4,q5);

let player = {Name:"Paramat",Q:"",C:"",P:0};

// console.log(question[0].Q.charAt(0));
function play(question,player){
          player.Q=String(player.Q);
          player.A=String(player.A);
          for(let i=0;i<question.length;i++){
                    if(player.Q==i+1){
                              console.log(question[i].Q,question[i].C);
                              if(question[i].A==player.A){
                                        player.P++;
                                        console.log("Correct!!!");
                              }
                              else{
                                        console.log("Incorrect!!!!");
                              }
                    }
          }
} 

player.Q=1;
player.A=3;

play(question,player);


