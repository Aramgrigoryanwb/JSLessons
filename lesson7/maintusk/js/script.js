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

		info.addEventListener('click', function(event){
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
	let deadline = '2018-08-22';
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