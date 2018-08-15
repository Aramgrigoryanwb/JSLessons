let date = new Date();
let s = date.toLocaleTimeString() +  " " +  date.toLocaleDateString();
  document.write( "<p>" + s + "</p>" +  '<br>');


 document.write( getWeekDay(date)  +  '<br>');

function getWeekDay(date) {
  var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

  return days[date.getDay()];
}

getWeekDay(date); 



let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();


function appendZero(date){

	if(day < 10){
		day = '0' + day;
	}
	if(month < 10){
	month = '0' + month;
	}
	 document.write(day + " " +  month + " " + year);
}

appendZero(date);

// let dateDay = document.getElementById('date-day');
// 	console.log(dateDay[0]);
//     console.log(dateDay[1]);

let date1 = new Date(2011, 0, 1);
let date2 = new Date(2011, 0, 12);

let difference = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
console.log(difference);



