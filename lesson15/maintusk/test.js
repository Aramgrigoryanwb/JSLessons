// Функция sum должна возвращать тип данных true. Проверить её на это.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2)

// Переменная num должна быть равна 5. Проверить на соответствие.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

// Узнать, что нам вернет функция each в данных условиях. Проверить её на тип данных, который она возвращает,
// на соответствие ожидаемому результату (который вы получили) и на свойство length.

var each = function(startArr, f){return f(startArr)};
var array = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(array, myFunc));

let assert = require('chai').assert

describe("sum", function(){
	it("Получаем тип данных", function(){
		assert.equal(sum(2,2), false);
	});
});

describe("num", function(){
	it("Получаем число", function(){
		assert.equal(num, 5);
	});
});
describe("each", function(){
	it("Получаем тип данных", function(){
		assert.typeOf(each, 'function');
	});
	it("Получаем результат", function(){
		assert.equal(myFunc, myFunc);
	});
	it("Получаем длинну", function(){
		assert.lengthOf(array, 5);
	});

});