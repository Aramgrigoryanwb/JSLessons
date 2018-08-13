let yourBudget,
	shopName,
	time,
	price,
	employee


	function start(){
		yourBudget = prompt("Ваш бюджет на месяц?", '');

		while(isNaN(yourBudget ) || yourBudget == "" || yourBudget == null){
			yourBudget = prompt("Ваш бюджет на месяц?", '');
		}
		shopName = prompt("Название вашего магазина?", '').toUpperCase();

		time = 21;
	}

//start();

	let mainList = {
	budget:yourBudget,
	name:shopName,
	shopGoods: [],
	employers:{},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods(){
		for(let i = 0; i < 3; i++){

		let a = prompt("Какой тип товаров будем продавать?", '');	
	     
	     if((typeof(a)) === 'string'  && a != null && a != ''){
				mainList.shopGoods[i] = a;
				}else{
					i--;
				}
		}
	},
	workTime: function workTime(time){
		if (time < 0){
			console.log('Не может быть');
		}else if (time > 9 && time < 20){
			console.log('Рабочее время')
			mainList.open == true;
		}else if (time < 24){
			console.log('Поздно')
		}else {
			console.log('В сутках 24 часа');
		}
	},
	dayBudget: function dayBudget(){
		alert("Ежедневный бюджет " + yourBudget/30);
	},
	discounter: function discounter(price){
			while (isNaN(price ) || price == "" || price == null){
				price = prompt("Укажите цену");
			}
			if(mainList.discount == true){
				price = price - price*0.8;
				alert(price);
			}else{
			alert('Гуляй вацок скидок нет');
			}
	},
	hire: function hire(){
		let b = mainList.employers; 
		for(let i = 1; i <= 4; i++){

		let a = prompt("Назовите номер и имя сотрудника", '');	
	     
	     if((typeof(a)) === 'string'  && a != null && a != '' && a.length < 50){
				b[i] = a ;
				}else{
					i--;
				}
		}
	},
	chooseShopItems: function chooseShopItems(){
		let items = prompt("Перечислите через запятую товары", "");
		if((typeof(items)) === 'string'  && items != null && items != ''){
				mainList.shopItems = items.split(",")
				}else{
					alert("Ошибка");
				}
	},
	availability: function availability(){
				mainList.shopItems.forEach(function(item,i){
						alert("У нас вы можете купить: " + (i+1) + ": " + item);
					});
	},
	include: function include(){
		for (let key in mainList){
			console.log("Наш магазин включает в себя: " + key);
		}
	}

	}

mainList.chooseShopItems();

				

mainList.availability();
	console.log(mainList);
