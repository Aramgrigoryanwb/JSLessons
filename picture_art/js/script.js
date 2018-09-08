
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
			document.body.style.overflow = 'hidden';
	    });
	   
	 	 	 buttonOrder4.addEventListener('click', function(){
	      modalPopupDesign.style.display  = "block";
				modalPopupDesign.style.zIndex = "10000000"; 
				document.body.style.overflow = 'hidden';
	    });
			buttonOrder5.addEventListener('click', function(){
	      	modalPopupDesign.style.display  = "block";
			modalPopupDesign.style.zIndex = "10000000";
			document.body.style.overflow = 'hidden';
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

	
buttonTransparent.addEventListener('click', function(e){
	e.preventDefault();
	for(let i = 0; i < cards.length; i++){
	cards[i].style.cssText = 'display: block !important;';
	cards[i].classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");	
	
	}
	buttonTransparent.style.display = "none";
});
// нижний слайдер

 	 let slideIndex = 1,
       	 slides = document.getElementsByClassName('feedback-slider-item'),
	     prev = document.querySelector('.main-prev-btn'),
	     next = document.querySelector('.main-next-btn');

	    showSlides(slideIndex);
  
        function showSlides(n) {
            if(n > slides.length){
                slideIndex = 1;
            };
            if (n < 1){
                slideIndex = slides.length;
            }
              for(let i = 0; i < slides.length; i++){
           		 slides[i].style.display = 'none';
           
            }
            slides[slideIndex - 1].style.display = 'block';
          	slidesMain[slideIndexMain - 1].classList.add("wow","bounceOutRigth");
          }
         
          function plusSlides(n){
            showSlides(slideIndex += n)
        }

        function currentSlide(n){
            showSlides(slideIndex = n)
        }

        prev.addEventListener('click', function(){
            plusSlides(-1);
        });

        next.addEventListener('click', function(){
            plusSlides(1);
        });

           setInterval (function(){
            showSlides(slideIndex += 1)
        },4000);

        


  //верхний слайдер
  	let slideIndexMain = 1,
       	 slidesMain = document.getElementsByClassName('main-slider-item');
	
	    showSlidesMain(slideIndexMain);
  
        function showSlidesMain(n) {
            if(n > slidesMain.length){
                slideIndexMain = 1;
            };
            if (n < 1){
                slideIndexMain = slidesMain.length;
            }
              for(let i = 0; i < slidesMain.length; i++){
           		slidesMain[i].style.display = 'none';
           		
            }
            slidesMain[slideIndexMain - 1].style.display = 'block';
         	slidesMain[slideIndexMain - 1].classList.add("wow","bounceInDown");
          }
         
          setInterval (function(){
            showSlidesMain(slideIndexMain += 1)
        },3000);
