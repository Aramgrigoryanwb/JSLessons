// подарок

 function gift(){

let gift = document.querySelector('.fixed-gift');
let modal = document.querySelector('.popup-gift');
let close = document.getElementsByClassName('popup-close')[1];
let buttonCount = document.getElementsByClassName('button');
let click = false;
  


	 gift.addEventListener('click',function(){
      modal.style.display = "block";
       gift.style.display = "none";
       document.body.style.overflow = 'hidden';
       
    });

	window.addEventListener('click', function(){
	  let target = event.target;
	  if (target == modal){
	  		modal.style.display = "none";
		  document.body.style.overflow = ''; 
	  }
	 });
		close.addEventListener('click', function(){
		 modal.style.display = "none";
		  document.body.style.overflow = '';  
       	});

    for (let i =0; i<buttonCount.length;i++){
      buttonCount[i].addEventListener('click',()=>{
        click = true;
      });
    }
}
 module.exports = gift;