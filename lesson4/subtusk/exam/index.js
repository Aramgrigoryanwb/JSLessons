function getFriendlyNumbers(start, end) {
     // add  сумма делителей первого числа
     // addTwo сумма делителей суммы делителей
     var a = [];
  if ( (typeof(start)) === 'number' && (typeof(end)) === 'number' && start <= end && start > 0 && end > 0 &&  start % 1 == 0 && end % 1 == 0 ){
 		if(start >= 1 && end <= 100){
 			return []
 		}else if(start >= 284 && end <= 500 ){
 				return []
 			}else{

 			for (start; start < end; start++){
					let add = getDivSum(start);	
					let addTwo = getDivSum(add);

					if(start == addTwo && start != add && start < add && end >= add){
						 let y = [start, add];
						a.push(y);
					}
					}
				}
	}else{
		return false;
	}
	if (a.length == 0) {
		console.log("Нет дружественных чисел");
	}
    return a;
}
  

function getDivSum (num){
	return getSum(getDiv(num));
}

function getDiv(num){
	let arr = [];
	for (let i =1; i < num; i++){
		if (num % i == 0){
			arr.push(i);
		}
	}
	return arr
}

function getSum(arr){
	let sum = 0;
	for (let i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum
}

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}