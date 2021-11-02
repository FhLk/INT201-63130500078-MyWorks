function Reverse(text){
          text=String(text);
          let str="";
          for(let i=text.length-1;i>=0;i--){
                    str+=text[i];
          }
          console.log(str);
}

Reverse(12345);

function Replace(text){
          let vowels=["a","e","i","o","u"];
          text = String(text);
          let str="";
          for(let i=0;i<text.length;i++){
                    if(vowels.includes(text[i].toLowerCase())){
                              str+="*"
                    }
                    else{
                              str+=text[i];
                    }
          }
          console.log(str);
}

Replace("pAramat");

function CountVowels(text){
          let vowels=["a","e","i","o","u"];
          let count=0;
          for(let i=0;i<text.length;i++){
                    if(vowels.includes(text[i].toLowerCase())){
                              count++
                    }
          }
          console.log(count);
}

CountVowels("paramat");