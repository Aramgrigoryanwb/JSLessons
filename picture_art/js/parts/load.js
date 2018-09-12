//Подгрузка блоков
function load(){
let buttonTransparent = document.getElementsByClassName(' button-transparent ')[0];
let cards = document.getElementsByClassName('styles-2');

	
buttonTransparent.addEventListener('click', function(){
	
	for(let i = 0; i < cards.length; i++){

	cards[i].classList = "col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 styles-2"	;	
	
	}
	buttonTransparent.style.display = "none";
});
}
module.exports = load;