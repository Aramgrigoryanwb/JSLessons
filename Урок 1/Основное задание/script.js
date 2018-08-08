var QuestionOne = prompt("Ваш бюджет на месяц?");
var QuestionTwo = prompt("Название вашего магазина?");
var ItemNameOne = prompt("Какой тип товаров будем продавать?");
var ItemNameTwo = prompt("Какой тип товаров будем продавать?");
var ItemNameTree = prompt("Какой тип товаров будем продавать?");

	mainList = {
		budget:QuestionOne,
		name:QuestionTwo,
		shopGoods: [ItemNameOne,ItemNameTwo,ItemNameTree],
		employers:{

		},
		open:true
	}
	alert(QuestionOne/30);