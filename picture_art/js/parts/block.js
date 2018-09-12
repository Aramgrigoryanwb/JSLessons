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