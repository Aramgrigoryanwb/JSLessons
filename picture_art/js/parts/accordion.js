//аккардион
function accordion(){
let acc = document.getElementsByClassName('accordion-heading');
let accBlock = document.getElementsByClassName("accordion-block");

for(let i = 0; i<acc.length;i++){
	accBlock[i].style.display = "none";
}


for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', () => {
        	 if(accBlock[i].style.display == "block"){
        		acc[i].classList.remove('ui-accordion-header-active');
        	 	accBlock[i].style.display = "none";
          } 
     });
 }
    
	


 for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', () => {
            for (let i = 0; i < acc.length; i++) {
            	accBlock[i].style.display = "none"; 
            }
         	 accBlock[i].style.display = "block";
         	 accBlock[i].classList.add("animated","bounceInDown");
        });
    }


  for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', () => {
            for (let i = 0; i < acc.length; i++) {
                acc[i].classList.remove('ui-accordion-header-active');
            }
            acc[i].classList.add('ui-accordion-header-active');
        });
    }
  }
  module.exports = accordion;