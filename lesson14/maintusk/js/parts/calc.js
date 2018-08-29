    //calc

     let persons = document.getElementsByClassName('counter-block-input')[0],
            restDays = document.getElementsByClassName('counter-block-input')[1],
            place = document.getElementById('select'),
            totalValue = document.getElementById('total'),
            personSum = 0,
            daysSum = 0,
            total = 0;
            reg = /[e\,\+\.]/ig;
 
            totalValue.innerHTML = '';

            persons.addEventListener('change', function(){
                personSum = +this.value;
                total = (daysSum * personSum)*4000;
                //if(persons.value == '' ||  persons.value == "+" ||  persons.value == "e" || Math.round(persons.value) != persons.value){
                    if (persons.value.match(reg)){
                        persons.value = "";
                        totalValue.innerHTML = 0;
                }else{
                    totalValue.innerHTML = total;
                }
            
            });
            
            restDays.addEventListener('change', function(){
                daysSum = +this.value;
                total = (daysSum * personSum)*4000;
                //if(restDays.value == ''  ||  restDays.value == "+" || restDays.value == "e" || Math.round(restDays.value) != restDays.value){
            if (restDays.value.match(reg)){
                        restDays.value = "";
                        totalValue.innerHTML = 0;
                }else{
                    totalValue.innerHTML = total;
                }
            });

            place.addEventListener('change', function(){
                //if(restDays.value == ''  ||  restDays.value == "+" || restDays.value == "e" || Math.round(restDays.value) != restDays.value ||persons.value == '' ||  persons.value == "+" ||  persons.value == "e" || Math.round(persons.value) != persons.value ){
                if (restDays.value.match(reg) || persons.value.match(reg)){
                    totalValue.innerHTML = 0;
                }else{
                    let a = total;
                    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
                }
            });
            module.exports = calc;