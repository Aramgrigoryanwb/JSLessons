//Подгрузка блоков
function load(){
let buttonTransparent = document.getElementsByClassName(' button-transparent ')[0];
let cards = document.getElementsByClassName('styles-2');

	
buttonTransparent.addEventListener('click', function(){
	
	for(let i = 0; i < cards.length; i++){

	cards[i].classList.add("styles-2");	
	
	}
	buttonTransparent.style.display = "none";
});
}
module.exports = load;