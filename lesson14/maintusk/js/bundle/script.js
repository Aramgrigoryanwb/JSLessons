window.addEventListener('DOMContentLoaded', function(){

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info =  document.getElementsByClassName('info-header')[0];

		function hideTabContent(a){
			for(let i = a; i < tabContent.length; i++){
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		}

		hideTabContent(1)

		function showTabContent(b){
			if(tabContent[b].classList.contains('hide')){
				hideTabContent(0);
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
			}
		}

		info.addEventListener('click', (event) =>{
				let target = event.target;
				if(target.className == 'info-header-tab'){
					for(let i = 0; i < tab.length; i++){
						if (target == tab[i]){
							showTabContent(i);
							break;
						}
					}
				}
		});

// timer
	let deadline = '2018-08-24';
	let now = Date.parse(new Date());
	let dead = Date.parse(deadline);

	if (dead <= now){
	let timer = document.getElementById('timer'),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');

		hours.innerHTML = "00";
		minutes.innerHTML = "00";
		seconds.innerHTML = "00";

		}else{

		function getTimerRemaining(endtime){
			let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor((t/(1000*60*60)));

			return {
				'total': t,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
		};

		function setClock(id, endtime){
			let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

			function updateClock(){
				let t = getTimerRemaining(endtime);
				hours.innerHTML = appendZero(t.hours);
				minutes.innerHTML = appendZero(t.minutes);
				seconds.innerHTML = appendZero(t.seconds);

				if (t.total <= 0){
					clearInterval(timeInterval);
				}
			};


			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
		};

		function appendZero(i){
			if (i < 10){	
					i = "0" + i;
			}
			return i;
		}
		setClock('timer', deadline);
	}


	console.log('hello');


// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 100,
      framesCount = 300;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

	//modal
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', () =>{
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	let btn = document.getElementsByClassName('description-btn')[0],
		inf = document.getElementsByClassName('info')[0],
        descriptionBtn = document.getElementsByClassName('description-btn');
        
    inf.addEventListener('click', function(event){
                let target = event.target;
                if(target.className == 'description-btn'){
                    	
                            let overlay = document.querySelector('.overlay'),
								close = document.querySelector('.popup-close');

							this.classList.add('more-splash');
							overlay.style.display = "block";
							document.body.style.overflow = 'hidden';
					
							close.addEventListener('click', () =>{
								overlay.style.display = "none";
								more.classList.remove('more-splash');
								document.body.style.overflow = '';
							});
						                                                 }
               //     }
               // }
      });

    //form
     //form
   let imgLoader = document.createElement('img');
    imgLoader.src = "img/ajax-loader.gif";
    let imgSuccess = document.createElement('img');
    imgSuccess.src = "img/checked.png";
    let imgFail = document.createElement('img');
    imgFail.src = "img/close-button.png";

    let message = new Object();
    message.loading = document.createElement('div');
    	message.loading.appendChild(imgLoader);
    message.failure = document.createElement('div');
    	 message.failure.appendChild(imgFail);
    message.success = document.createElement('div');
   		 message.success.appendChild(imgSuccess);

	console.log(message);
  
    let form = document.getElementsByClassName('main-form')[0],
    	input = form.getElementsByTagName('input'),
    	statusMessage = document.createElement('div');
    	
    	
    	

  		
  	 console.log(message.success);

    	form.addEventListener('submit', function(event){
    		event.preventDefault();
    		form.appendChild(statusMessage);
    		
    		//AJAX
    		let request =  new XMLHttpRequest();
    		request.open("POST", 'server.php');
    		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    		let formData = new FormData(form);

    		request.send(formData);

    		request.onreadystatechange = function(){
    			if (request.readyState < 4){
    				form.appendChild(message.loading);
    			}else if(request.readyState === 4){
    				if(request.status === 200 && request.status < 300){
    					message.loading.style.display = "none";
    					form.appendChild(message.success);
    					///
    				}else{
    					form.appendChild(message.failure);
    				}
    			}
    		}
    		for (let i = 0; i < input.length; i++){
    			input[i].value = '';
    			// очищаем поля ввода
    		}
    	});

    let formTel = document.getElementById('form'),
    	inputTel = formTel.getElementsByTagName('input');
    	

    	formTel.addEventListener('submit', function(event){
    		event.preventDefault();
    		formTel.appendChild(statusMessage);
    		
    		//AJAX
    		let request =  new XMLHttpRequest();
    		request.open("POST", 'server.php');
    		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    		let formDataTel = new FormData(formTel);

    		request.send(formDataTel);

    		request.onreadystatechange = function(){
    			if (request.readyState < 4){
    					formTel.appendChild(message.loading);
    			}else if(request.readyState === 4){
    				if(request.status === 200 && request.status < 300){
    					message.loading.style.display = "none";
    					formTel.appendChild(message.success); 
    					///
    				}else{
    					formTel.appendChild(message.failure);
    				}
    			}
    		}
    		for (let i = 0; i < inputTel.length; i++){
    			inputTel[i].value = '';
    			// очищаем поля ввода
    		}
    	});

            //Slider
    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.getElementsByClassName('dot');

        showSlides(slideIndex);

        function showSlides(n) {
            if(n > slides.length){
                slideIndex = 1;
            };
            if (n < 1){
                slideIndex = slides.length;
            };
            for(let i = 0; i < slides.length; i++){
                slides[i].style.display = 'none';
            };
            for(let i = 0; i < dots.length; i++){
                dots[i].classList.remove('dot-active');
            };

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');

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

        dotsWrap.addEventListener('click', function(event){
            for(let i = 0; i < dots.length + 1; i++){
                if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                    currentSlide(i);
                }
            }
        });

        //calc

     let persons = document.getElementsByClassName('counter-block-input')[0],
            restDays = document.getElementsByClassName('counter-block-input')[1],
            place = document.getElementById('select'),
            totalValue = document.getElementById('total'),
            personSum = 0,
            daysSum = 0,
            total = 0;
            reg = /[e\,\+\.]/ig;
 
            totalValue.innerHTML = '';

            persons.addEventListener('change', function(){
                personSum = +this.value;
                total = (daysSum * personSum)*4000;
                //if(persons.value == '' ||  persons.value == "+" ||  persons.value == "e" || Math.round(persons.value) != persons.value){
                    if (persons.value.match(reg)){
                        persons.value = "";
                        totalValue.innerHTML = 0;
                }else{
                    totalValue.innerHTML = total;
                }
            
            });
            
            restDays.addEventListener('change', function(){
                daysSum = +this.value;
                total = (daysSum * personSum)*4000;
                //if(restDays.value == ''  ||  restDays.value == "+" || restDays.value == "e" || Math.round(restDays.value) != restDays.value){
            if (restDays.value.match(reg)){
                        restDays.value = "";
                        totalValue.innerHTML = 0;
                }else{
                    totalValue.innerHTML = total;
                }
            });

            place.addEventListener('change', function(){
                //if(restDays.value == ''  ||  restDays.value == "+" || restDays.value == "e" || Math.round(restDays.value) != restDays.value ||persons.value == '' ||  persons.value == "+" ||  persons.value == "e" || Math.round(persons.value) != persons.value ){
                if (restDays.value.match(reg) || persons.value.match(reg)){
                    totalValue.innerHTML = 0;
                }else{
                    let a = total;
                    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
                }
            });



});
// на jquery

	// $(document).ready(function(){
	//     $("#myTopnav").on("click","a", function (event) {
	//   event.preventDefault();
	//         var id  = $(this).attr('href'),
	//             top = $(id).offset().top;
	//         $('body,html').animate({scrollTop: top}, 1500);

	//     });
	// });