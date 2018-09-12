function filter(){
	/// фильтрация блоков
let allActive = document.getElementsByClassName("all active")[0];
let lovers = document.getElementsByClassName("lovers")[0];
let chef = document.getElementsByClassName("chef")[0];
let girl = document.getElementsByClassName("girl")[0];
let guy = document.getElementsByClassName("guy")[0];
let grandmother = document.getElementsByClassName("grandmother")[0];
let granddad = document.getElementsByClassName("granddad")[0];

let portfolioNo = document.getElementsByClassName("portfolio-no")[0];

let portfolioMenu =  document.getElementsByClassName("portfolio-menu")[0];
let portfolioBlockAll =document.getElementsByClassName("portfolio-block"); 
  
let li = portfolioMenu.children;

  for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', () => {
            for (let i = 0; i < li.length; i++) {
                li[i].classList.remove('active');
            }
            li[i].classList.add('active');
        });
    }

allActive.addEventListener('click',function(){
	allActive.classList.add("active"); 
	for (let i = 0; i<portfolioBlockAll.length;i++){
			if(portfolioBlockAll[i].classList.contains('all')){
				portfolioBlockAll[i].style.display = "block";

			}
	}
				
	
});

lovers.addEventListener('click',function(){
	for (let i = 0; i<portfolioBlockAll.length;i++){

			if(!portfolioBlockAll[i].classList.contains('lovers')){
				portfolioBlockAll[i].style.display = "none"; 
			}else{
				portfolioBlockAll[i].style.display = "block";
			}
	}


	
		
});

chef.addEventListener('click',function(){
	for (let i = 0; i<portfolioBlockAll.length;i++){

			if(!portfolioBlockAll[i].classList.contains('chef')){
				portfolioBlockAll[i].style.display = "none";
			}else{
				portfolioBlockAll[i].style.display = "block";
			}			
	}
	
});

girl.addEventListener('click',function(){
	for (let i = 0; i<portfolioBlockAll.length;i++){

			if(!portfolioBlockAll[i].classList.contains('girl')){
				portfolioBlockAll[i].style.display = "none";
			}else{
				portfolioBlockAll[i].style.display = "block";
			}
	}
	
});

guy.addEventListener('click',function(){
	for (let i = 0; i<portfolioBlockAll.length;i++){

			if(!portfolioBlockAll[i].classList.contains('guy')){
				portfolioBlockAll[i].style.display = "none";
			}else{
				portfolioBlockAll[i].style.display = "block";
			}
	}
	
});

grandmother.addEventListener('click',function(){
	for (let i = 0; i<portfolioBlockAll.length;i++){

			portfolioBlockAll[i].style.display = "none";
			portfolioNo.style.display = "block";
			
	}
	
});

granddad.addEventListener('click',function(){
	
	for (let i = 0; i<portfolioBlockAll.length;i++){

			portfolioBlockAll[i].style.display = "none";
			portfolioNo.style.display = "block";
			
	}
	

});
 
}

module.exports = filter;