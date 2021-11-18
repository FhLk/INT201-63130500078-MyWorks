function Random(){
          return Math.floor(Math.random()*100)+1;
}

function Menu(){
          const menu = 
`***Main Menu***
1: Find Sum
2: Find Minimum Value
3: Find Maximum Value`;
          return menu;
}

function Find(select,random){
          console.log(Menu());
          if(select==1){
                    let sum=0;
                    for(let i=0;i<random.length;i++){
                              sum+=random[i];
                    }
                    return sum;
          }
          else if(select==2){
                    let min=random[0];
                    for(let i=0;i<random.length;i++){
                              if(min>random[i]){
                                        min=random[i];
                              }
                    }
                    return min;
          }
          else if(select==3){
                    let max=random[0];
                    for(let i=0;i<random.length;i++){
                              if(max<random[i]){
                                        max=random[i];
                              }
                    }
                    return max;
          }
}

export {Menu,Random,Find};
