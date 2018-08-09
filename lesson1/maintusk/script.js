var yourBudget = prompt("Ваш бюджет на месяц?");
var shopName = prompt("Название вашего магазина?");
var itemTypeOne = prompt("Какой тип товаров будем продавать?");
var itemTypeTwo = prompt("Какой тип товаров будем продавать?");
var itemTypeTree = prompt("Какой тип товаров будем продавать?");

mainList = {
budget:yourBudget,
name:shopName,
shopGoods: [itemTypeOne,itemTypeTwo,itemTypeTree],
employers:{

},
open:true
}
alert(yourBudget/30);
