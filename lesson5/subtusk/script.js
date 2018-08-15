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
 function input(){
 	let dateDay = document.getElementById('date_day').value;
 	let dateDay1 = document.getElementById('date_day1').value;
 	let dateMonth = document.getElementById('date_month').value;
 	let dateMonth1 = document.getElementById('date_month1').value;
 	let dateYear = document.getElementById('date_year').value;
 	let dateYear1 = document.getElementById('date_year1').value;
	let date1 = new Date(dateYear, dateMonth, dateDay); 
	let date2 = new Date(dateYear1, dateMonth1, dateDay1); //2011, 1, 27
 
	let difference = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));

	document.getElementById("result").value = difference;

 }
 

