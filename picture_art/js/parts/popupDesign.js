    //calc
    function popupDesign(){


//Модальные окна popup-design
    let buttonOrder = document.getElementsByClassName('button-design');
    let modalPopupDesign = document.getElementsByClassName('popup-design')[0];
    let close1 = document.getElementsByClassName('popup-close')[2];

    for(let i =0; i<buttonOrder.length;i++){

        buttonOrder[i].addEventListener('click', function(){
            modalPopupDesign.style.display  = "block";
            modalPopupDesign.style.zIndex = "10000000"; 
            document.body.style.overflow = 'hidden';
            
     });
        }
         window.addEventListener('click', function(){
              let target = event.target;
              if (target == modalPopupDesign){
                    modalPopupDesign.style.display = "none";
                  document.body.style.overflow = ''; 
              }
            });
            close1.addEventListener('click', function(){
                modalPopupDesign.style.display = "none";
                  document.body.style.overflow = '';
            });
                 
    }
            module.exports = popupDesign;