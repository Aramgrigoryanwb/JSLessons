let liSecond = document.getElementsByClassName('menu-item');
	liSecond[1].textContent = "Второй пункт";
let liThird = document.getElementsByClassName('menu-item');
	liSecond[2].textContent = "Третий пункт";

let li = document.createElement('li');
	li.classList.add("menu-item");
	li.textContent = "Пятый пункт";
	let ul = document.getElementsByTagName('ul')[0];
	ul.appendChild(li);

	let body = document.getElementsByTagName('body')[0];
	
  body.style.backgroundImage = 'url("img/apple_true.jpg")';



let title = document.getElementById('title');
	title.textContent = " Мы продаем только подлинную технику Apple";

let div = document.getElementsByClassName('column')[1];
let adv = document.getElementsByClassName('adv')[0];
	div.removeChild(adv);

 let answer = prompt( "Ваше отношение к технике apple");
 let field = document.getElementById('prompt');
	field.textContent = answer;