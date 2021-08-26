function reverseText(text){
          if(typeof(text)!=String){
                    text=String(text);
          }
          let str="";
          for(let i=text.length-1;i>=0;i--){
                    str+=text[i];
          }
          console.log(str);
}

function ReplaceText(text){
          let v=["a","e","i","o","u"];
          let str="";
          for(let i=0;i<text.length;i++){
                    if(v.includes(text[i])){
                              str+="*";
                    }
                    else{
                              str+=text[i];
                    }
          }
          console.log(str);
}

function getVowels(text){
          let v=["a","e","i","o","u"];
          let count=0;
          for(let i=0;i<text.length;i++){
                    if(v.includes(text[i])){
                              count++
                    }
          }
          console.log(count);
}


reverseText("paramat");

ReplaceText("paramat");

getVowels("paramat");