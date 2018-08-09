let yourBudget = prompt("Ваш бюджет на месяц?");
let shopName = prompt("Название вашего магазина?");


	mainList = {
	budget:yourBudget,
	name:shopName,
	shopGoods: [],
	employers:{

	},
	open:false
	}

	for(let i = 0; i < 3; i++){

	let a = prompt("Какой тип товаров будем продавать?");	
     
     if((typeof(a)) === 'string'  && a != null && a != '' && a.length < 50){
			mainList.shopGoods[i] = a;
			}
	}
  /*Начало цикла с while 
	 let i = 0;

     while (i < 3){
     	let a = prompt("Какой тип товаров будем продавать?");
      if((typeof(a)) === 'string'  && a != null && a != '' && a.length < 50){
			mainList.shopGoods[i] = a;
			}
			i++;
	}
  Конец цикла	*/
	
	
     
	 
 /* Начало цикла с do while 
let i = 0;
do{
	let a = prompt("Какой тип товаров будем продавать?");
     	 if((typeof(a)) === 'string'  && a != null && a != '' && a.length < 50){
			mainList.shopGoods[i] = a;
			}
			i++;
	}
		
while(i < 3);

/ Конец цикла */

	alert(yourBudget/30);


