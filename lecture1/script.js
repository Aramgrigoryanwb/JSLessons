function simpleNumber(start,end){
  var arr = [];
    if ( (typeof(start)) === 'number' && (typeof(end)) === 'number' && start <= end && start >= 2 && end >= 2){
        for(start; start <= end; start++){
              var a = 0;
              var simp = true;

              for(let i = 2; i <= start-1; i++){
                  if(start == a){
                         i++;  
                    }
                  a = start % i;
                  if(a==0){
                       simp=false;
                        break;
                      }else{
                       simp=true;
                     }
                }
                if (simp==true){
                    arr.push(start);
                   document.write( "Делители " + start + " числа: 1 и " + start +  '<br>');
                }                  
        }
    }else{
      console.log("введите промежуток из чисел больше единицы ");
    }
    if (arr.length == 0){
    console.log("Простых чисел в интервале нет(");
  }  
   }

 simpleNumber(2,100);

   