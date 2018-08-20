let btn = document.querySelector(".btn");


function animate(){
	let obj_1 = document.querySelector(".obj_1"),
	obj_2 = document.querySelector(".obj_2"),
	pos = 0,
	id_1 = setInterval(frame, 10),
	id_2 = setInterval(change, 10);

function frame(){
	if(pos == 300){
			clearInterval(id_1);
		}else{
			pos++;
			obj_1.style.top = pos + 'px';
		}
	}

function change(){
	if(pos == 300){
			clearInterval(id_2);
		}else{
			pos++;
			obj_2.style.left = pos + 'px';
		}
	}
}

requestAnimationFrame(animate);

btn.addEventListener('click', animate);