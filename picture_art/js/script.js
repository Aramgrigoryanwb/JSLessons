let gift = document.querySelector('.fixed-gift');
let modal = document.querySelector('.popup-gift');
let close = document.querySelector('.popup-close');
	
	 gift.addEventListener('click',function(){
      modal.style.display = "block";
       gift.style.display = "none";
    });

	modal.addEventListener('click', function(){
		 modal.style.display = "none";
       	 gift.style.display = "inline";
	});

	close.addEventListener('click', function(){
		 modal.style.display = "none";
       	 gift.style.display = "inline";
	});
