
// timer
 function timer(){
	let deadline = '2018-08-31';
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
}
module.exports = timer;