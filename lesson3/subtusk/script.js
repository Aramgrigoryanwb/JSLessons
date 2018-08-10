let str = "урок-3-был слишком легким";
let arr = [20, 33, 1, "Человек" , 2, 3];


let newStr = str[0].toUpperCase() + str.slice(1);
console.log(newStr.replace(/-/g, ' '));
let word = newStr.substring(19,25);
let newWord =word.replace(word.charAt(5),' ');
	newWord = newWord.replace(newWord.charAt(4), 'o');
alert(newWord);





let x = 0;

for (let i = 0; i < arr.length; i++){
	x = x + Math.pow(arr[i],3);
}

let answer = Math.sqrt(x);
console.log(answer);

function knowNaim(string){
	if (typeof(string) !== 'string'){
		alert("Введите строку")
	}else if ( string.length < 50){
		console.log(string.trim());
	}else{
		string = string.slice(0, 50);
		string = string.trim();
		console.log(string + "...");
		
	}
}

knowNaim("Lorem ipsum dolors.");