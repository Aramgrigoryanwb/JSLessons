let open = document.getElementById('open-btn'),
	nameValue = document.getElementsByClassName('name-value')[0],
 	budgetValue	= document.getElementsByClassName('budget-value')[0],
	goodsValue	= document.getElementsByClassName('goods-value')[0],
 	itemsValue	= document.getElementsByClassName('items-value')[0],
	employersValue	= document.getElementsByClassName('employers-value')[0],
	discountValue	= document.getElementsByClassName('discount-value')[0],
	isopenValue	= document.getElementsByClassName('isopen-value')[0],

	goodsItem = document.getElementsByClassName('goods-item'),
	goodsBtn = document.getElementsByTagName('button')[1],
	budgetBtn = document.getElementsByTagName('button')[2],
	employersBtn = document.getElementsByTagName('button')[3],
    chooseItem = document.querySelector('.choose-item'), 
 	countBudgetValue = document.querySelector('.count-budget-value'),
	timeValue = document.querySelector('.time-value'),
	hireEmployersItem = document.querySelectorAll('.hire-employers-item');

	let yourBudget,
	shopName,
	disc,
	employee

	open.addEventListener('click', () =>{
		yourBudget = prompt("Ваш бюджет?", '');
		while(isNaN(yourBudget ) || yourBudget == "" || yourBudget == null){
			yourBudget = prompt("Ваш бюджет ?", '');
		}
		budgetValue.textContent = yourBudget;
		nameValue.textContent = prompt("Название вашего магазина?", '').toUpperCase();

			disc = prompt("Будет ли скидка?(да/нет)", '').toUpperCase();

			if(disc == 'ДА'){
				mainList.discount = true;
			}else if (disc == 'НЕТ') {
				mainList.discount = false;
			}else{
				alert("Введите корректное значение");
			}
			if (mainList.discount == true){
				discountValue.style.backgroundColor = 'green';
			}else{
				discountValue.style.backgroundColor = 'red';
			}
			
	 
			
	});

	
		
	goodsBtn.addEventListener('click', () => {
		for(let i = 0; i < goodsItem.length; i++){

				let a = goodsItem[i].value;	
			     
			     if((typeof(a)) === 'string'  && a != null && a.length < 50){
						mainList.shopGoods[i] = a;
						goodsValue.textContent = mainList.shopGoods;
						}else{
							i--;
						}
				}

	});	
	

	chooseItem.addEventListener('change', () =>{
		let items = chooseItem.value;
			if(isNaN(items) && items != ''){
				mainList.shopItems = items.split(", ")
				mainList.shopItems.sort();
				itemsValue.textContent = mainList.shopItems;
			}
	});
		
	timeValue.addEventListener('change', () => {
		let time = timeValue.value;

		if (time < 0){
			console.log('Не может быть');
			mainList.open = false;
		}else if (time >= 9 && time < 20){
			console.log('Рабочее время')
			mainList.open = true;
		}else if (time < 24){
			console.log('Поздно')
			mainList.open = false;
		}else {
			console.log('В сутках 24 часа');
			mainList.open = false;
		}

		if(mainList.open == true){
			isopenValue.style.backgroundColor = 'green';
		}else{
			isopenValue.style.backgroundColor = 'red';
		}

			if(mainList.open == true){
 			goodsBtn.removeAttribute("disabled");
 			budgetBtn.removeAttribute("disabled");
 			//employersBtn.removeAttribute("disabled");
			} 	
	});

	budgetBtn.addEventListener('click', () => {
		countBudgetValue.value = yourBudget/30;
	});

	employersBtn.addEventListener('click', () => {
		mainList.employers = {};
		employersValue.textContent = '';

		for(let i = 0; i < hireEmployersItem.length; i++){
			let employee = hireEmployersItem[i].value;

			if (/^[А-Я]{1}([а-я]{0,22})?$/.test(employee)){
			mainList.employers[i] = employee;
				employersValue.textContent += mainList.employers[i]	+ '; ';
			}
}
			
	});
	function checkParams() {
		for(let i = 0; i < hireEmployersItem.length; i++){
			let employee = hireEmployersItem[i].value;    
    		if(employee.length != 0 ) {
		          employersBtn.disabled = false;
		    } else {
		        employersBtn.setAttribute('disabled', 'disabled');
		    }
	}
}
	let mainList = {
	budget:yourBudget,
	name:shopName,
	shopGoods: [],
	employers:{},
	open: false,
	discount: false,
	shopItems: [],
	}


			//	console.log(mainList);	