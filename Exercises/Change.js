function ChangeCalculation(price,purch){
          let change=purch-price;
          let money={};
          money.B500= change/500;
          money.B100= (change%500)/100;
          money.B50= ((change%500)%100)/50;
          money.B20=(((change%500)%100)%50)/20;
          money.B10= ((((change%500)%100)%50)%20)/10;
          money.B5= (((((change%500)%100)%50)%20)%10)/5;
          money.B2=((((((change%500)%100)%50)%20)%10)%5)/2;
          money.B1=(((((((change%500)%100)%50)%20)%10)%5)%2)/1;
          return money;
}

console.log(ChangeCalculation(1000,2000));