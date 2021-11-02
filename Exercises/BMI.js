function P2K(pound){
          return 0.45*pound;
}

function I2M(inch){
          return 0.03*inch;
}

function BMI(pound,inch){
          let kg=P2K(pound);
          let meter=I2M(inch);
          let bmi=kg/(meter*meter);
          return bmi;
}

console.log(BMI(36.5,39));