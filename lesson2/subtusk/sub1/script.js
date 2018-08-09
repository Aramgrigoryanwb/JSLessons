let week = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
	
	for(let i = 0; i < week.length; i++){
		

	    if(week[i] == "Суббота" || week[i] == "Воскресенье"){
		 		document.write("<b>" + week[i] + "</b>" + "<br>");
			
		 }else if(week[i] == "Четверг"){

		 	document.write("<i>" + week[i] + "</i>" + "<br>");
		 }else{
		 	  document.write(week[i] +  '<br>');
		 }

}
	alert("Вторая часть в консоле");


let arr =["734623482","4312421","332355","41","12411","71","33"];
for(let i = 0; i < arr.length; i++){
	if(arr[i][0]== "3" || arr[i][0]== "7"){
		console.log(arr[i]);
	}
	}
