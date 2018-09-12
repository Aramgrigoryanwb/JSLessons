  
 function upslider(){
   let slideIndexMain = 1,
         slidesMain = document.getElementsByClassName('main-slider-item');
  
      showSlidesMain(slideIndexMain);
  
        function showSlidesMain(n) {
            if(n > slidesMain.length){
                slideIndexMain = 1;
            };
            if (n < 1){
                slideIndexMain = slidesMain.length;
            }
              for(let i = 0; i < slidesMain.length; i++){
              slidesMain[i].style.display = 'none';
              
            }
            slidesMain[slideIndexMain - 1].style.display = 'block';
          slidesMain[slideIndexMain - 1].classList.add("animated","bounceInDown");
          }
         
          setInterval (function(){
            showSlidesMain(slideIndexMain += 1)
        },3000);
        }
         module.exports = upslider;