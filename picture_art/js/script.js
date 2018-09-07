
// подарок
let gift = document.querySelector('.fixed-gift');
let modal = document.querySelector('.popup-gift');
let close = document.getElementsByClassName('popup-close')[1];
	
//console.log(dialog);

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


	 //Модальные окна  popup-consultation
	let buttonConsultation1= document.getElementsByClassName('button button-order button-consultation')[0];
	let buttonConsultation2= document.getElementsByClassName('button button-order button-consultation')[1];
	let buttonConsultation3= document.getElementsByClassName('button button-order button-consultation')[2];
	let modalConsultation = document.querySelector('.popup-consultation');
	let close0 = document.getElementsByClassName('popup-close')[0];
		 buttonConsultation1.addEventListener('click',function(){
	      modalConsultation.style.display = "block";
	
	    });
		 	 buttonConsultation2.addEventListener('click',function(){
	      modalConsultation.style.display = "block";
	
	    });
		 	 	 buttonConsultation3.addEventListener('click',function(){
	      modalConsultation.style.display = "block";
	
	    });

		window.addEventListener('click', function(){
			  let target = event.target;
			  if (target == modalConsultation){
			  		modalConsultation.style.display = "none";
				  document.body.style.overflow = ''; 
			  }
			});

			close0.addEventListener('click', function(){
				   modalConsultation.style.display = "none";
		       	 
			});

//Модальные окна popup-design
	let buttonOrder = document.getElementsByClassName('button button-order button-design')[0];
	let buttonOrder1 = document.getElementsByClassName('button button-order button-design')[1];
	let buttonOrder2 = document.getElementsByClassName('button button-order button-design')[2];	
	let buttonOrder3 = document.getElementsByClassName('button button-order button-design')[3];
	let buttonOrder4 = document.getElementsByClassName('button button-order button-design')[4];
	let buttonOrder5 = document.getElementsByClassName('button button-order button-design')[5];
	let buttonOrder6 = document.getElementsByClassName('button button-order button-design')[6];
	let modalPopupDesign = document.getElementsByClassName('popup-design')[0];
	let close1 = document.getElementsByClassName('popup-close')[2];


	 	 buttonOrder.addEventListener('click', function(){
	      modalPopupDesign.style.display  = "block";
	
	    });

	 	 	 buttonOrder1.addEventListener('click', function(){
	      modalPopupDesign.style.display  = "block";
	
	    });
	 	 	buttonOrder2.addEventListener('click', function(){
	      modalPopupDesign.style.display  = "block";
	
	    });
	 	 	buttonOrder3.addEventListener('click', function(){
	      modalPopupDesign.style.display  = "block";
	
	    });
	 	 	 buttonOrder4.addEventListener('click', function(){
	      modalPopupDesign.style.display  = "block";
	
	    });
			buttonOrder5.addEventListener('click', function(){
	      modalPopupDesign.style.display  = "block";
	
	    });
	 	 buttonOrder6.addEventListener('click', function(){
	      modalPopupDesign.style.display  = "block";
	
	    });
	 	 window.addEventListener('click', function(){
			  let target = event.target;
			  if (target == modalPopupDesign){
			  		modalPopupDesign.style.display = "none";
				  document.body.style.overflow = ''; 
			  }
			});
			close1.addEventListener('click', function(){
				modalPopupDesign.style.display = "none";
		       	 
			});

//Модальное окно при пролистывании			