//modal
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', () =>{
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	let btn = document.getElementsByClassName('description-btn')[0],
		inf = document.getElementsByClassName('info')[0],
        descriptionBtn = document.getElementsByClassName('description-btn');
        
    inf.addEventListener('click', function(event){
                let target = event.target;
                if(target.className == 'description-btn'){
                    	
                            let overlay = document.querySelector('.overlay'),
								close = document.querySelector('.popup-close');

							this.classList.add('more-splash');
							overlay.style.display = "block";
							document.body.style.overflow = 'hidden';
					
							close.addEventListener('click', () =>{
								overlay.style.display = "none";
								more.classList.remove('more-splash');
								document.body.style.overflow = '';
							});
						                                                 }
               //     }
               // }
      });
    module.exports = modal;