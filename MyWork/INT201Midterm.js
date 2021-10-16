let student={id:"63130500078",F_name:"Paramat",L_name:"Pet-in"};

let Subjectregister=[];

let resultStudy={unitResgis:0,unitCal:0,score:0,gpa:0,getunit:0};

let resultTerm={unitResgis:0,unitCal:0,score:0,gpa:0,getunit:0,status:"Normal"};

function Register(subjectID,unit){
          subjectID=String(subjectID);
          unit=Number(unit);
          let i=1;
          let subject={id:subjectID,credit:unit,grade:"-"};
          Subjectregister.push(subject);
}
function AddGrade(subjectID,addgrade){
          let subject=findSubject(subjectID);
          Subjectregister[subject].grade = String(Change(addgrade));
}

function findSubject(subjectID){
          for(let i in Subjectregister){
                    if(subjectID==Subjectregister[i].id){
                              return i;
                    }
          }
}
function Change(grade){
          if(grade==4){
                    return "A";
          }
          else if(grade==3.5){
                    return "B+";
          }
          else if(grade==3){
                    return "B";
          }
          else if(grade==2.5){
                    return "C+";
          }
          else if(grade==2){
                    return "C";
          }
          else if(grade==1.5){
                    return "D+";
          }
          else if(grade==1){
                    return "D";
          }
          else{
                    return "F";
          }
}


Register("GEN101",1);
Register("GEN121",3);
Register("INT100",3);
Register("INT101",3);
Register("INT102",1);
Register("INT114",3);
Register("LNG120",3);
console.log(Subjectregister);
AddGrade("GEN101",3.5);
AddGrade("GEN121",3);
AddGrade("INT100",2.5);
AddGrade("INT101",3.5);
AddGrade("INT102",2.5);
AddGrade("INT114",2.5);
AddGrade("LNG120",3.5);
console.log(Subjectregister);

// function UnitResgis(){
//           let u=0;
//           for (let i=0;i<Subjectregister.length;i++){
//                     u+=Subjectregister[i].unit;
//           }
//           resultStudy.unitResgis=u;
//           resultTerm.unitResgis+=u;
// }

// Subjectregister=[
//           {No:1,id:"GEN101",unit:1,grade:"B+"},
//           {No:2,id:"GEN121",unit:3,grade:"B"},
//           {No:3,id:"INT100",unit:3,grade:"C+"},
//           {No:4,id:"INT101",unit:3,grade:"B+"},
//           {No:5,id:"INT102",unit:1,grade:"C+"},
//           {No:6,id:"INT114",unit:3,grade:"C+"},
//           {No:7,id:"LNG120",unit:3,grade:"B+"},
//           ];

// function UnitCal(){
//           let u=0;
//           for (let i=0;i<Subjectregister.length;i++){
//                     u+=Subjectregister[i].unit;
//           }
//           resultStudy.unitCal=u;
//           resultTerm.unitCal+=u;
// };

// Subjectregister=[
//           {No:1,id:"GEN111",unit:3,grade:"B+"},
//           {No:2,id:"GEN103",unit:3,grade:"B"},
//           {No:3,id:"INT104",unit:3,grade:"B"},
//           {No:4,id:"INT105",unit:1,grade:"C+"},
//           {No:5,id:"INT107",unit:3,grade:"C+"},
//           {No:6,id:"INT200",unit:1,grade:"C"},
//           {No:7,id:"LNG220",unit:3,grade:"B+"},
//           ];

// function ScorPoint(){
//           let score=0;
//           for (let i=0;i<Subjectregister.length;i++){
//                     score+=(Subjectregister[i].unit*Change(Subjectregister[i].grade));
//           }
// }