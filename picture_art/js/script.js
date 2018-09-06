
// подарок
let gift = document.querySelector('.fixed-gift');
let modal = document.querySelector('.popup-gift');
let close = document.querySelector('.popup-close');
	
	 gift.addEventListener('click',function(){
      modal.style.display = "block";
       gift.style.display = "none";
    });

	modal.addEventListener('click', function(){
		 modal.style.display = "none";
       	 gift.style.display = "inline";
	});

	close.addEventListener('click', function(){
		 modal.style.display = "none";
       	 gift.style.display = "inline";
	});

	// слайдер нижний

	 // let slideIndex = 1,
  //      	 slides = document.getElementsByClassName('feedback-slider-item'),
	 //     prev = document.querySelector('.main-prev-btn'),
	 //     next = document.querySelector('.main-next-btn');

		// showSlides(slideIndex);
		// console.log(slides)

  //      function showSlides(n) {
  //           if(n > slides.length){
  //               slideIndex = 1;
  //           };
  //           if (n < 1){
  //               slideIndex = slides.length;
  //           }
  //             for(let i = 0; i < slides.length; i++){
  //          		 slides[i].style.display = 'none';
  //               console.log('hello');
  //           }
  //         }
 

  //       function plusSlides(n){
  //           showSlides(slideIndex += n)
  //       }

  //       function currentSlide(n){
  //           showSlides(slideIndex = n)
  //       }

  //       prev.addEventListener('click', function(){
  //           plusSlides(-1);
  //       });

  //       next.addEventListener('click', function(){
  //           plusSlides(1);
  //       });

// Модальные окна popup-consultation
	let buttonConsultation1= document.getElementsByClassName('button button-order button-consultation')[0];
	let buttonConsultation2= document.getElementsByClassName('button button-order button-consultation')[1];
	let buttonConsultation3= document.getElementsByClassName('button button-order button-consultation')[2];
	let modalConsultation = document.querySelector('.popup-consultation');

		 buttonConsultation1.addEventListener('click',function(){
	      modalConsultation.style.display = "block";
	
	    });
		 	 buttonConsultation2.addEventListener('click',function(){
	      modalConsultation.style.display = "block";
	
	    });
		 	 	 buttonConsultation3.addEventListener('click',function(){
	      modalConsultation.style.display = "block";
	
	    });
			modalConsultation.addEventListener('click', function(){
				   modalConsultation.style.display = "none";
		       	 
			});

			close.addEventListener('click', function(){
				   modalConsultation.style.display = "none";
		       	 
			});
