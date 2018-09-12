//Модальное окно при пролистывании
function windows(){
	let a = 0;
	
	 

 	window.addEventListener('scroll', function() {
 	  let clientHeight = document.getElementsByClassName('promo promo-3')[0].clientHeight;
	  let scrolled =Math.round(document.documentElement.scrollTop);
	  let scrollHeight = document.documentElement.scrollHeight;
	 
	  if (scrollHeight - scrolled <= clientHeight && click == false){
	  	gift.style.display = "none";
	  	modal.style.display = "block";
	  	document.body.style.overflow = 'hidden';
	  	a += 1;
	  	if(a>4){
	  		modal.style.display = "none";	
	  		document.body.style.overflow = '';
	  	}
	   }
	
	 });
 }
 module.exports = windows;