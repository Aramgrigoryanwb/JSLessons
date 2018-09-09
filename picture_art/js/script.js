
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

	
buttonTransparent.addEventListener('click', function(){
	
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
          	slides[slideIndex - 1].classList.add("wow","bounceOutRigth");
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

// Картинки при наведении
	let sizeBlock1 = document.querySelectorAll('.sizes-block')[0];

	let sizeChildren1 = sizeBlock1.children[0];
	let sizeChildren2 = sizeBlock1.children[1];
	let sizeChildren3 = sizeBlock1.children[2];
	let sizeChildren4 = sizeBlock1.children[3];

  sizeBlock1.addEventListener('mouseenter', function(){
 	sizeChildren1.src = "./img/sizes-1-1.png";
 	sizeChildren2.style.display = "none";
 	sizeChildren3.style.display = "none";
 	sizeChildren4.style.display = "none";
  });

 sizeBlock1.addEventListener('mouseleave', function(){
   sizeChildren1.src = "./img/sizes-1.png";
   	sizeChildren2.style.display = "block";
 	sizeChildren3.style.display = "block";
 	sizeChildren4.style.display = "block";
  });

// 2 блок
 	let sizeBlock2 = document.querySelectorAll('.sizes-block')[1];

	let sizeChildren12 = sizeBlock2.children[0];
	let sizeChildren22 = sizeBlock2.children[1];
	let sizeChildren32 = sizeBlock2.children[2];
	let sizeChildren42 = sizeBlock2.children[3];

  sizeBlock2.addEventListener('mouseenter', function(){
 	sizeChildren12.src = "./img/sizes-2-1.png";
 	sizeChildren22.style.display = "none";
 	sizeChildren32.style.display = "none";
 	sizeChildren42.style.display = "none";
  });

 sizeBlock2.addEventListener('mouseleave', function(){
   sizeChildren12.src = "./img/sizes-2.png";
   	sizeChildren22.style.display = "block";
 	sizeChildren32.style.display = "block";
 	sizeChildren42.style.display = "block";
  });

// 3 блок
 	let sizeBlock3 = document.querySelectorAll('.sizes-block')[2];

	let sizeChildren13 = sizeBlock3.children[0];
	let sizeChildren23 = sizeBlock3.children[1];
	let sizeChildren33 = sizeBlock3.children[2];
	let sizeChildren43 = sizeBlock3.children[3];

  sizeBlock3.addEventListener('mouseenter', function(){
 	sizeChildren13.src = "./img/sizes-3-1.png";
 	sizeChildren23.style.display = "none";
 	sizeChildren33.style.display = "none";
 	sizeChildren43.style.display = "none";
  });

 sizeBlock3.addEventListener('mouseleave', function(){
   sizeChildren13.src = "./img/sizes-3.png";
   	sizeChildren23.style.display = "block";
 	sizeChildren33.style.display = "block";
 	sizeChildren43.style.display = "block";
  });

 // 4 блок 

 	let sizeBlock4 = document.querySelectorAll('.sizes-block')[3];

	let sizeChildren14 = sizeBlock4.children[0];
	let sizeChildren24 = sizeBlock4.children[1];
	let sizeChildren34 = sizeBlock4.children[2];
	let sizeChildren44 = sizeBlock4.children[3];

  sizeBlock4.addEventListener('mouseenter', function(){
 	sizeChildren14.src = "./img/sizes-4-1.png";
 	sizeChildren24.style.display = "none";
 	sizeChildren34.style.display = "none";
 	sizeChildren44.style.display = "none";
  });

 sizeBlock4.addEventListener('mouseleave', function(){
   sizeChildren14.src = "./img/sizes-4.png";
   	sizeChildren24.style.display = "block";
 	sizeChildren34.style.display = "block";
 	sizeChildren44.style.display = "block";
  });


//Модальное окно при пролистывании

	let a = 0;
	




 	window.addEventListener('scroll', function() {
	  let scrolled = document.documentElement.scrollTop;
	  if (scrolled > 12375){
	  	gift.style.display = "none";
	  	modal.style.display = "block";
	  	document.body.style.overflow = 'hidden';
	  	a += 1;
	  	if(a>3){
	  		modal.style.display = "none";	
	  		document.body.style.overflow = '';
	  	}
	  }
	});
