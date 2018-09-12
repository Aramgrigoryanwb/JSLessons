    
    function downslider(){

// нижний слайдер

     let slideIndex = 1,
         slides = document.getElementsByClassName('feedback-slider-item'),
         prev = document.querySelector('.main-prev-btn'),
         next = document.querySelector('.main-next-btn');

        showSlides(slideIndex);
  
        function showSlides(n) {
            if(n > slides.length){
                slideIndex = 1;
            };
            if (n < 1){
                slideIndex = slides.length;
            }
              for(let i = 0; i < slides.length; i++){
                 slides[i].style.display = 'none';
           
            }
            slides[slideIndex - 1].style.display = 'block';
            slides[slideIndex - 1].classList.add("animated","bounceInLeft");
          }
         
          function plusSlides(n){
            showSlides(slideIndex += n)
        }

        function currentSlide(n){
            showSlides(slideIndex = n)
        }

        prev.addEventListener('click', function(){
            plusSlides(-1);
        });

        next.addEventListener('click', function(){
            plusSlides(1);
        });

           setInterval (function(){
            showSlides(slideIndex += 1)
        },4000);
                 
    }
            module.exports = downslider;