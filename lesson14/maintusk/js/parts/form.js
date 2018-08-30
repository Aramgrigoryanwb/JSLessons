     //form
     function form(){
   let imgLoader = document.createElement('img');
    imgLoader.src = "../img/ajax-loader.gif";
    let imgSuccess = document.createElement('img');
    imgSuccess.src = "../img/checked.png";
    let imgFail = document.createElement('img');
    imgFail.src = "../img/close-button.png";

    let message = new Object();
    message.loading = document.createElement('div');
    	message.loading.appendChild(imgLoader);
    message.failure = document.createElement('div');
    	 message.failure.appendChild(imgFail);
    message.success = document.createElement('div');
   		 message.success.appendChild(imgSuccess);

	console.log(message);
  
    let form = document.getElementsByClassName('main-form')[0],
    	input = form.getElementsByTagName('input'),
    	statusMessage = document.createElement('div');
    	
    	
    	

  		
  	 console.log(message.success);

    	form.addEventListener('submit', function(event){
    		event.preventDefault();
    		form.appendChild(statusMessage);
    		
    		//AJAX
    		let request =  new XMLHttpRequest();
    		request.open("POST", 'server.php');
    		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    		let formData = new FormData(form);

    		request.send(formData);

    		request.onreadystatechange = function(){
    			if (request.readyState < 4){
    				form.appendChild(message.loading);
    			}else if(request.readyState === 4){
    				if(request.status === 200 && request.status < 300){
    					message.loading.style.display = "none";
    					form.appendChild(message.success);
    					///
    				}else{
    					form.appendChild(message.failure);
    				}
    			}
    		}
    		for (let i = 0; i < input.length; i++){
    			input[i].value = '';
    			// очищаем поля ввода
    		}
    	});

    let formTel = document.getElementById('form'),
    	inputTel = formTel.getElementsByTagName('input');
    	

    	formTel.addEventListener('submit', function(event){
    		event.preventDefault();
    		formTel.appendChild(statusMessage);
    		
    		//AJAX
    		let request =  new XMLHttpRequest();
    		request.open("POST", 'server.php');
    		request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    		let formDataTel = new FormData(formTel);

    		request.send(formDataTel);

    		request.onreadystatechange = function(){
    			if (request.readyState < 4){
    					formTel.appendChild(message.loading);
    			}else if(request.readyState === 4){
    				if(request.status === 200 && request.status < 300){
    					message.loading.style.display = "none";
    					formTel.appendChild(message.success); 
    					///
    				}else{
    					formTel.appendChild(message.failure);
    				}
    			}
    		}
    		for (let i = 0; i < inputTel.length; i++){
    			inputTel[i].value = '';
    			// очищаем поля ввода
    		}
    	});
    }
        module.exports = form;