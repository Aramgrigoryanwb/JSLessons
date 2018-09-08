
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
					document.body.style.overflow = 'hidden';
	    });
		 	 buttonConsultation2.addEventListener('click',function(){
	      modalConsultation.style.display = "block";
					document.body.style.overflow = 'hidden';
	    });
		 	 	 buttonConsultation3.addEventListener('click',function(){
	      modalConsultation.style.display = "block";
			 document.body.style.overflow = 'hidden';
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
		       	   document.body.style.overflow = '';
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
			 document.body.style.overflow = 'hidden';
	    });

	 	 	 buttonOrder1.addEventListener('click', function(){
	      modalPopupDesign.style.display  = "block";
			 document.body.style.overflow = 'hidden';
	    });
	 	 	buttonOrder2.addEventListener('click', function(){
	      	modalPopupDesign.style.display  = "block";
			 document.body.style.overflow = 'hidden';
	    });
	 	 	buttonOrder3.addEventListener('click', function(){
	      	modalPopupDesign.style.display  = "block";
			modalPopupDesign.style.zIndex = "10000000"; 
	    });
	   
	 	 	 buttonOrder4.addEventListener('click', function(){
	      modalPopupDesign.style.display  = "block";
				modalPopupDesign.style.zIndex = "10000000"; 
	    });
			buttonOrder5.addEventListener('click', function(){
	      	modalPopupDesign.style.display  = "block";
			modalPopupDesign.style.zIndex = "10000000";
	    });
	 	 buttonOrder6.addEventListener('click', function(){
	      modalPopupDesign.style.display  = "block";
			document.body.style.overflow = 'hidden';
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
		       	  document.body.style.overflow = '';
			});

//Подгрузка блоков		
let buttonTransparent = document.getElementsByClassName('button button-transparent button-styles')[0];
let cards = document.getElementsByClassName('hidden-lg hidden-md hidden-sm hidden-xs styles-2');
let hide  = document.getElementsByClassName ('hidden-lg');

	
buttonTransparent.addEventListener('click', function(e){
	e.preventDefault();
	for(let i = 0; i < cards.length; i++){
	cards[i].style.cssText = 'display: block !important;';
		
	
	}
	buttonTransparent.style.display = "none";
});