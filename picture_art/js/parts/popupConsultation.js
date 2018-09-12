 function popupConsultation(){

//Модальные окна  popup-consultation
	let buttonConsultation= document.getElementsByClassName('button-consultation');
	let modalConsultation = document.querySelector('.popup-consultation');
	let close0 = document.getElementsByClassName('popup-close')[0];
	for(let i =0; i < buttonConsultation.length;i++){

		 buttonConsultation[i].addEventListener('click',function(){
	      modalConsultation.style.display = "block";
					document.body.style.overflow = 'hidden';
				
	    });
	}
		

		window.addEventListener('click', function(){
			  let target = event.target;
			  if (target == modalConsultation){
			  		modalConsultation.style.display = "none";
				  document.body.style.overflow = ''; 
			  }
			});

			close0.addEventListener('click', function(){
				   modalConsultation.style.display = "none";
		       	   document.body.style.overflow = '';
			});
}
 module.exports = popupConsultation;