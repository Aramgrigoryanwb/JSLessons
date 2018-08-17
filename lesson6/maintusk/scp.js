//Получить кнопку "Открыть магазин" через id
let btnOpenShop = document.getElementById('open-btn');
//Получить все поля в левом меню через классы
let nameValue = document.getElementsByClassName('name-value')[0];
let budgetValue = document.getElementsByClassName('budget-value')[0];
let goodsValue = document.getElementsByClassName('goods-value')[0];
let itemsValue = document.getElementsByClassName('items-value')[0];
let employersValue = document.getElementsByClassName('employers-value')[0];
let discountValue = document.getElementsByClassName('discount-value')[0];
let isopenValue = document.getElementsByClassName('isopen-value')[0];

//Получить поля категории товаров через класс
let goods = document.getElementsByClassName('goods-item');


//Получить все 3 кнопки через Tag
let btnGoodsItem = document.getElementsByTagName('button')[1];
let btnCountBudget = document.getElementsByTagName('button')[2];
let btnHireEmployers = document.getElementsByTagName('button')[3];
let discountSystem = document.getElementsByTagName('button')[4];

//Получить поля ввода товаров, времени и расчета бюджета через querySelector
let choseItem = document.querySelector('.choose-item');
let timeValue = document.querySelector('.time-value');
let countBudgetValue = document.querySelector('.count-budget-value');

//Получить поля имен сотрудников через querySelectorAll
let hireEmployers = document.querySelectorAll('.hire-employers-item');


let yourBudget,
	nameShop;

//открытие магазина		
btnOpenShop.addEventListener('click', () => {
	do {
		yourBudget = prompt("Ваш бюджет на месяц", "");
	} while (isNaN(yourBudget) || yourBudget === '' || yourBudget === null);

	budgetValue.textContent = yourBudget;
	mainList.budget = yourBudget;
	nameValue.textContent = prompt("Название вашего магазина?", "Имя").toUpperCase();
	mainList.name = nameShop;
	btnCountBudget.disabled = false;
});


let price = 100;

let mainList = {
	budget: yourBudget,
	name: nameShop,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	choseGoods: function choseGoods() {},
	workTime: function workTime() {},
	getDayBudget: function getDayBudget() {},
	hireEmployers: function hireEmployers() {},
	makeDiscountShop: function makeDiscountShop() {},
	chooseShopItems: function chooseShopItems() {}
};





//ввод категорий товаров
btnGoodsItem.addEventListener('click', () => {
	for (let i = 0; i < goods.length; i++) {
		let a = goods[i].value;

		if ((typeof (a) === 'string') && (a != null) && (a.length < 50)) {
			console.log('Всё верно!');
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		} else {
			console.log('Не верно!');
			i = i - 1;
		}
	}
	//очищаем поля ввода
	for (let i = 0; i < goods.length; i++) {
		goods[i].value = '';
	}
});

//наименование товаров
choseItem.addEventListener('change', () => {
	let items = choseItem.value;

	if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(', ');
		mainList.shopItems.sort();

		itemsValue.textContent = mainList.shopItems;
	}
	//очищаем поле после записи значения	//jxboftv gjkt gjckt pfgbcb pyfxtybz

	choseItem.value = '';
});

//время работы
timeValue.addEventListener('change', () => {
	let timeWork = timeValue.value;

	if ((timeWork < 0) || (timeWork > 24)) {
		console.log("такого не может быть");
		mainList.open = false;
	} else if ((timeWork > 8) && (timeWork < 20)) {
		console.log("время работать");
		mainList.open = true;
	} else {
		mainList.open = false;
		console.log(" Магазин закрыт");
	};

	if (mainList.open) {
		isopenValue.style.backgroundColor = 'green';
	} else {
		isopenValue.style.backgroundColor = 'red';
	}
	btnDisable();
});

//расчёт дневного бюджета
btnCountBudget.addEventListener('click', () => {
	//проверка на введённый бюджет
	mainList.budget ? btnCountBudget.disabled = false : btnCountBudget.disabled = true;
	countBudgetValue.value = (mainList.budget / 30).toFixed(2);
});


//сотрудники
btnHireEmployers.addEventListener('click', () => {
	//сброс сотрудников при повторном найме
	mainList.employers = {};
	employersValue.textContent = '';



	for (let i = 0; i < hireEmployers.length; i++) {
		let a = hireEmployers[i].value;

		if ((a != null) && (a != '')) {
			//проверка на русские буквы
			if (/^[А-Я]{1}([а-я]{0,22})?$/.test(a)) {

				mainList.employers[i] = a;
				employersValue.textContent += mainList.employers[i] + '  ';
			} else {

				console.log('Только русские буквы!');
			}
		}
	}

	//очищаем поля ввода
	for (let i = 0; i < hireEmployers.length; i++) {
		hireEmployers[i].value = '';
	}
});

//дисконтная система
discountSystem.addEventListener('click', () => {

	mainList.discount = true;
	price = +(price * 0.8).toFixed(2);
	console.log(price);
	discountValue.textContent = "Ваш дисконт 80%";
	if (mainList.discount) {
		discountValue.style.backgroundColor = "green";
	} else {
		discountValue.style.backgroundColor = "red";
	}

});

//Если магазин  открыт делаем кнопки активными
function btnDisable() {
	if (mainList.open) {
		discountSystem.disabled = false;
		btnHireEmployers.disabled = false;
		btnGoodsItem.disabled = false;
		btnCountBudget.disabled = false;

		//проверка для кнопки "рассчитать"
		mainList.budget ? btnCountBudget.disabled = false : btnCountBudget.disabled = true;

	}
}


//отмена запрета кнопки при фокусе на поле ввода
for (let i = 0; i < hireEmployers.length; i++) {

	hireEmployers[i].addEventListener('focus', () => {
		btnHireEmployers.disabled = false;
	});

	//Запрет на ввод не кирилических символов
	hireEmployers[i].addEventListener('keyup', () => {
		let a = hireEmployers[i].value;
		if (!(/^[А-ЯЁ]{1}([а-яё]{0,22})?$/.test(a))) {
			hireEmployers[i].value = '';
		}

	});

};
for (let i = 0; i < goods.length; i++) {
	goods[i].addEventListener('focus', () => {
		btnGoodsItem.disabled = false;
	});
};