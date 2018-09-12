function hamburg(){

//Гамбургер-меню 
 let burger = document.querySelector('.burger');
 let burgerMenu = document.querySelector('.burger-menu');
 let width = document.documentElement.offsetWidth;
    
    if(width <= 768) {

     burgerMenu.style.display = 'none';

       burger.addEventListener('click', function(){

          if (burgerMenu.style.display == 'none') {
                burgerMenu.style.display = 'block';
          }else{
                burgerMenu.style.display = 'none';
          }
        });
    }
}
module.exports = hamburg;