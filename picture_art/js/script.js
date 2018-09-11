
// подарок
var b = 0;
let gift = document.querySelector('.fixed-gift');
let modal = document.querySelector('.popup-gift');
let close = document.getElementsByClassName('popup-close')[1];
	


	 gift.addEventListener('click',function(){
      modal.style.display = "block";
       gift.style.display = "none";
       document.body.style.overflow = 'hidden';
       b+=1;
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
	let buttonConsultation= document.getElementsByClassName('button-consultation');
	let modalConsultation = document.querySelector('.popup-consultation');
	let close0 = document.getElementsByClassName('popup-close')[0];
	for(let i =0; i < buttonConsultation.length;i++){

		 buttonConsultation[i].addEventListener('click',function(){
	      modalConsultation.style.display = "block";
					document.body.style.overflow = 'hidden';
				b+=1;
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

//Модальные окна popup-design
	let buttonOrder = document.getElementsByClassName('button-design');
	let modalPopupDesign = document.getElementsByClassName('popup-design')[0];
	let close1 = document.getElementsByClassName('popup-close')[2];

	for(let i =0; i<buttonOrder.length;i++){

 		buttonOrder[i].addEventListener('click', function(){
	      	modalPopupDesign.style.display  = "block";
			modalPopupDesign.style.zIndex = "10000000"; 
			document.body.style.overflow = 'hidden';
			 b++;
	 });
	 	}
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
let buttonTransparent = document.getElementsByClassName(' button-transparent ')[0];
let cards = document.getElementsByClassName('styles-2');

	
buttonTransparent.addEventListener('click', function(){
	
	for(let i = 0; i < cards.length; i++){
	//cards[i].style.cssText = 'display: block !important;';
	cards[i].classList = "col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 styles-2"	;	
	
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
          	slides[slideIndex - 1].classList.add("animated","bounceInLeft");
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
         	slidesMain[slideIndexMain - 1].classList.add("animated","bounceInDown");
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
 	  let clientHeight = document.getElementsByClassName('promo promo-3')[0].clientHeight;
	  let scrolled =Math.round(document.documentElement.scrollTop);
	  let scrollHeight = document.documentElement.scrollHeight;
	 
	  if (scrollHeight - scrolled <= clientHeight && b == 0){
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


//аккардион


let acc = document.getElementsByClassName('accordion-heading');
let accBlock = document.getElementsByClassName("accordion-block");

for(let i = 0; i<acc.length;i++){
	accBlock[i].style.display = "none";
}


for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', () => {
        	 if(accBlock[i].style.display == "block"){
        	 	console.log('убирайся тварь');
        	 	accBlock[i].style.display = "none";
          }    
     });
 }
    
	


 for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', () => {
            for (let i = 0; i < acc.length; i++) {
            	accBlock[i].style.display = "none"; 
            }
         	 accBlock[i].style.display = "block";
        });
    }


  for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', () => {
            for (let i = 0; i < acc.length; i++) {
                acc[i].classList.remove('ui-accordion-header-active');
            }
            acc[i].classList.add('ui-accordion-header-active');
        });
    }

//Модальное окно при посещении сайта более 60 секунд
let startdate = new Date();
let clockStart = startdate.getTime();

function initStopwatch() {
  let thisTime = new Date(); 
  return (thisTime.getTime() - clockStart)/1000; 
}
function getSecs() {
  var tSecs = Math.round(initStopwatch());
  let x = setTimeout('getSecs()', 1000); 
  if (x>60 && x<=61){
  	if(modalConsultation.style.display == "block" || modal.style.display == "block" || modalPopupDesign.style.display == "block"){
  	  modalConsultation.style.display = "none";
	}else{
		 modalConsultation.style.display = "block";
		document.body.style.overflow = 'hidden';
	}
  }
 }
 getSecs();


/// фильтрация блоков
let allActive = document.getElementsByClassName("all active")[0];
let lovers = document.getElementsByClassName("lovers")[0];
let chef = document.getElementsByClassName("chef")[0];
let girl = document.getElementsByClassName("girl")[0];
let guy = document.getElementsByClassName("guy")[0];
let grandmother = document.getElementsByClassName("grandmother")[0];
let granddad = document.getElementsByClassName("granddad")[0];

let portfolioNo = document.getElementsByClassName("portfolio-no")[0];

let portfolioMenu =  document.getElementsByClassName("portfolio-menu")[0];
let portfolioBlockAll =document.getElementsByClassName("portfolio-block"); 
  
let li = portfolioMenu.children;

  for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', () => {
            for (let i = 0; i < li.length; i++) {
                li[i].classList.remove('active');
            }
            li[i].classList.add('active');
        });
    }

allActive.addEventListener('click',function(){
	allActive.classList.add("active"); 
	for (let i = 0; i<portfolioBlockAll.length;i++){
			if(portfolioBlockAll[i].classList.contains('all')){
				portfolioBlockAll[i].style.display = "block";

			}
	}
				
	
});

lovers.addEventListener('click',function(){
	for (let i = 0; i<portfolioBlockAll.length;i++){

			if(!portfolioBlockAll[i].classList.contains('lovers')){
				portfolioBlockAll[i].style.display = "none"; 
			}else{
				portfolioBlockAll[i].style.display = "block";
			}
	}


	
		
});

chef.addEventListener('click',function(){
	for (let i = 0; i<portfolioBlockAll.length;i++){

			if(!portfolioBlockAll[i].classList.contains('chef')){
				portfolioBlockAll[i].style.display = "none";
			}else{
				portfolioBlockAll[i].style.display = "block";
			}			
	}
	
});

girl.addEventListener('click',function(){
	for (let i = 0; i<portfolioBlockAll.length;i++){

			if(!portfolioBlockAll[i].classList.contains('girl')){
				portfolioBlockAll[i].style.display = "none";
			}else{
				portfolioBlockAll[i].style.display = "block";
			}
	}
	
});

guy.addEventListener('click',function(){
	for (let i = 0; i<portfolioBlockAll.length;i++){

			if(!portfolioBlockAll[i].classList.contains('guy')){
				portfolioBlockAll[i].style.display = "none";
			}else{
				portfolioBlockAll[i].style.display = "block";
			}
	}
	
});

grandmother.addEventListener('click',function(){
	for (let i = 0; i<portfolioBlockAll.length;i++){

			portfolioBlockAll[i].style.display = "none";
			portfolioNo.style.display = "block";
			
	}
	
});

granddad.addEventListener('click',function(){
	
	for (let i = 0; i<portfolioBlockAll.length;i++){

			portfolioBlockAll[i].style.display = "none";
			portfolioNo.style.display = "block";
			
	}
	

});
 

// Формы в модальных окнах



    // let form = document.getElementsByClassName('form')[1];
    //    console.log(form);
    //   console.log(modalPopupDesign);

    // 	input1 = form.getElementsByTagName('input')[0],
    // 	input2 = form.getElementsByTagName('input')[1],
    // 	statusMessage = document.createElement('div');
 
    // 	form.addEventListener('submit', function(event){
    // 		event.preventDefault();
    // 		form.appendChild(statusMessage);
    		
    // 		//AJAX
    // 		let request =  new XMLHttpRequest();
    // 		//request.open("POST", 'server.php');
    // 		//request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    // 		let formData = new FormData(form);

    // 		request.send(formData);

    // 		request.onreadystatechange = function(){
    // 			if (request.readyState < 4){

    // 				console.log('щас щас');

    // 			}else if(request.readyState === 4){
    // 				if(request.status === 200 && request.status < 300){
    // 					console.log('normalin');
    // 					///;
    // 				}else{
    // 					console.log('unnormalin');
    // 				}
    // 			}
    // 		}
    // 		for (let i = 0; i < input1.length; i++){
    // 			input1[i].value = '';
    // 			// очищаем поля ввода
    // 		}
    // 			for (let i = 0; i < input2.length; i++){
    // 			input2[i].value = '';
    // 			// очищаем поля ввода
    // 		}
    // 	});



    // калькулятор
