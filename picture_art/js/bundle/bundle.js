(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function(){

    let accordion = require('../parts/accordion.js');
    let ajaxsend = require('../parts/ajaxsend.js');
    let block = require('../parts/block.js');
    let calc = require('../parts/calc.js');
    let time = require('../parts/time.js');
    let downslider = require('../parts/downslider.js');
    let filter = require('../parts/filter.js');
    let gift = require('../parts/gift.js');
    let hamburg = require('../parts/hamburg.js');
    let load = require('../parts/load.js');
    let popupConsultation = require('../parts/popupConsultation.js');
    let popupDesign = require('../parts/popupDesign.js');
    let upslider = require('../parts/upslider.js');


    accordion();
    ajaxsend();
    block();
    calc();
    time();
    downslider();
    filter();
    gift();
    hamburg();
    load();
    popupConsultation();
    popupDesign();
    upslider();


});




	 








         
    



	



},{"../parts/accordion.js":2,"../parts/ajaxsend.js":3,"../parts/block.js":4,"../parts/calc.js":5,"../parts/downslider.js":6,"../parts/filter.js":7,"../parts/gift.js":8,"../parts/hamburg.js":9,"../parts/load.js":10,"../parts/popupConsultation.js":11,"../parts/popupDesign.js":12,"../parts/time.js":13,"../parts/upslider.js":14}],2:[function(require,module,exports){
//аккардион
function accordion(){
let acc = document.getElementsByClassName('accordion-heading');
let accBlock = document.getElementsByClassName("accordion-block");

for(let i = 0; i<acc.length;i++){
	accBlock[i].style.display = "none";
}


for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', () => {
        	 if(accBlock[i].style.display == "block"){
        		acc[i].classList.remove('ui-accordion-header-active');
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
         	 accBlock[i].classList.add("fade-inn");
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
  }
  module.exports = accordion;
},{}],3:[function(require,module,exports){
function ajaxsend(){






   let form = document.querySelectorAll("form"),
        phoneInputs = document.querySelectorAll("[name='phone']"),
        nameInputs = document.querySelectorAll("[name='name']"),
        formTextareas = document.querySelectorAll("[name='message']"),
        statusMessage = document.createElement('div');

  let message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Скоро мы с вами свяжемся';
    message.failure = 'Что-то пошло не так...';

  
  for (let i = 0; i < form.length; i++) {
    form[i].addEventListener('submit', requestResponse);
  }

  for (let i = 0; i < phoneInputs.length; i++) {
    phoneInputs[i].addEventListener('input', mask);
  }

  for (let i = 0; i < nameInputs.length; i++) {
    nameInputs[i].onBlur = russianWord;
    nameInputs[i].onkeyup = russianWord;
  }

  for (let i = 0; i < formTextareas.length; i++) {
        formTextareas[i].addEventListener("blur", function(){
       formTextareas[i] = formTextareas[i].value.replace(/[^\йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ]/ig,"");
     });

     formTextareas[i].addEventListener('keyup', function(){
     formTextareas[i]= formTextareas[i].value.replace(/[^\йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ]/ig,"");
     });
  }


  function requestResponse(event) {
    event.preventDefault();
    this.appendChild(statusMessage);

    //AJAX
    let request = new XMLHttpRequest(),
      formData = new FormData(event.target);

    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(formData);

    request.onreadystatechange = function() {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    };

  }

  //Маска ввода телефонного номера
  let keyCode;
    
  function mask(event) {
      event.KeyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = '(___) ____-___',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, ''),
        new_value = matrix.replace(/[_\d]/g, function(a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });

    i = new_value.indexOf('_');
    if (i != -1) {
      i < 5 && (i = 1);
      new_value = new_value.slice(0, i);
    }

    let reg = matrix.substr(0, this.value.length).replace(/_+/g, function(a) {
        
          return '\\d{1,' + a.length + '}';

        }).replace(/[+()]/g, '\\$&');

    reg = new RegExp('^' + reg +'$');

    if (!reg.test(this.value) || this.value.length < 1 || keyCode > 47 && keyCode < 58) {
      this.value = new_value;
    }

    if (event.type == 'blur' && this.value.length < 1) {
      this.value = '';
    }
  }
function russianWord() {
    this.value = this.value.replace(/[^\йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ]/ig,"");
  }

}
module.exports = ajaxsend;

},{}],4:[function(require,module,exports){
function block(){
	
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

  sizeBlock4.addEventListener('mouseenter', ()=>{
 	sizeChildren14.src = "./img/sizes-4-1.png";
 	sizeChildren24.style.display = "none";
 	sizeChildren34.style.display = "none";
 	sizeChildren44.style.display = "none";
  });

 sizeBlock4.addEventListener('mouseleave', ()=>{
   sizeChildren14.src = "./img/sizes-4.png";
   	sizeChildren24.style.display = "block";
 	sizeChildren34.style.display = "block";
 	sizeChildren44.style.display = "block";
  });

}
 module.exports = block;
},{}],5:[function(require,module,exports){

    // калькулятор
function calc(){
	    let size = document.getElementById('size'),
	        material = document.getElementById('material'),
	        options = document.getElementById('options'),
	        coupon = document.getElementsByClassName('promocode')[0],
	        totalValue = document.getElementsByClassName('calc-price')[0],
            total = 0;
			let reg = /IWANTPOPART/;

           

    size.addEventListener('change', function() {
        total = ((size.value * material.value) + options.value);
        if (size.value ==0 || material.value == 0) {
            totalValue.innerHTML = '';
        } else {
            if (coupon.value.match(reg)) {
                totalValue.innerHTML = total - (total*0.3);
            } else {
                totalValue.innerHTML = total;
            }
        }
    });

    material.addEventListener('change', function() {
        total = ((size.value * material.value) + options.value);
        if (size.value ==0 || material.value == 0) {
            totalValue.innerHTML = '';
        } else {
            if (coupon.value.match(reg)) {
                totalValue.innerHTML = total - (total*0.3);
            } else {
                totalValue.innerHTML = total;
            }
        }
    });

    options.addEventListener('change', function() {
        total = ((size.value * material.value) + options.value);
        if (size.value == '' || material.value == '') {
            totalValue.innerHTML = '';
        } else {
            if (coupon.value.match(reg)) {
                totalValue.innerHTML = total - (total*0.3);
            } else {
                totalValue.innerHTML = total;
            }
        }
    });


    coupon.addEventListener('change', function() {
        total = ((size.value * material.value) + options.value);

        if (size.value == '' || material.value == ''){
            totalValue.innerHTML = '';
        } else {
            if (coupon.value.match(reg)) {
                totalValue.innerHTML = total - (total*0.3);
            } else {
                totalValue.innerHTML = total;
            }
        }

    });
}
module.exports = calc;
},{}],6:[function(require,module,exports){
    
    function downslider(){

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
                 
    }
            module.exports = downslider;
},{}],7:[function(require,module,exports){
function filter(){
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
 
}

module.exports = filter;
},{}],8:[function(require,module,exports){
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
    let a = 0;
	
	 

 	window.addEventListener('scroll', function() {
	  let scrollHeight = document.documentElement.scrollHeight;
	 
	  if (window.scrollY + 1 >= scrollHeight - innerHeight && click == false){
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
 module.exports = gift;
},{}],9:[function(require,module,exports){
function hamburg(){

//Гамбургер-меню 
 let burger = document.querySelector('.burger');
 let burgerMenu = document.querySelector('.burger-menu');
 let width = document.documentElement.offsetWidth;
    
    if(width <= 768) {

     burgerMenu.style.display = 'none';

       burger.addEventListener('click', function(){

          if (burgerMenu.style.display == 'none') {
                burgerMenu.style.display = 'block';
          }else{
                burgerMenu.style.display = 'none';
          }
        });
    }
}
module.exports = hamburg;
},{}],10:[function(require,module,exports){
//Подгрузка блоков
function load(){
let buttonTransparent = document.getElementsByClassName(' button-transparent ')[0];
let cards = document.getElementsByClassName('styles-2');

	
buttonTransparent.addEventListener('click', function(){
	
	for(let i = 0; i < cards.length; i++){

	cards[i].className = "col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 styles-2"	;	
	
	}
	buttonTransparent.style.display = "none";
});
}
module.exports = load;
},{}],11:[function(require,module,exports){
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
},{}],12:[function(require,module,exports){
    //calc
    function popupDesign(){


//Модальные окна popup-design
    let buttonOrder = document.getElementsByClassName('button-design');
    let modalPopupDesign = document.getElementsByClassName('popup-design')[0];
    let close1 = document.getElementsByClassName('popup-close')[2];

    for(let i =0; i<buttonOrder.length;i++){

        buttonOrder[i].addEventListener('click', function(){
            modalPopupDesign.style.display  = "block";
            modalPopupDesign.style.zIndex = "10000000"; 
            document.body.style.overflow = 'hidden';
            
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
                 
    }
            module.exports = popupDesign;
},{}],13:[function(require,module,exports){
function time(){
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
 
}

module.exports = time;
},{}],14:[function(require,module,exports){
  
 function upslider(){
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
        }
         module.exports = upslider;
},{}]},{},[1]);
