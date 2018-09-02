'use strict';

window.addEventListener('DOMContentLoaded', function () {

  var tab = document.getElementsByClassName('info-header-tab'),
      tabContent = document.getElementsByClassName('info-tabcontent'),
      info = document.getElementsByClassName('info-header')[0];

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    var target = event.target;
    if (target.className == 'info-header-tab') {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          showTabContent(i);
          break;
        }
      }
    }
  });

  // timer
  var deadline = '2018-08-25';
  var now = Date.parse(new Date());
  var dead = Date.parse(deadline);

  if (dead <= now) {
    var timer = document.getElementById('timer'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  } else {
    var getTimerRemaining = function getTimerRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date()),
          seconds = Math.floor(t / 1000 % 60),
          minutes = Math.floor(t / 1000 / 60 % 60),
          hours = Math.floor(t / (1000 * 60 * 60));

      return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    };

    var setClock = function setClock(id, endtime) {
      var timer = document.getElementById(id),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector('.minutes'),
          seconds = timer.querySelector('.seconds');

      function updateClock() {
        var t = getTimerRemaining(endtime);
        hours.innerHTML = appendZero(t.hours);
        minutes.innerHTML = appendZero(t.minutes);
        seconds.innerHTML = appendZero(t.seconds);

        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      };

      updateClock();
      var timeInterval = setInterval(updateClock, 1000);
    };

    var appendZero = function appendZero(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    };

    ;

    ;

    setClock('timer', deadline);
  }

  console.log('hello');

  // собираем все якоря; устанавливаем время анимации и количество кадров
  var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 100,
      framesCount = 300;

  anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function (e) {
      // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

      // запускаем интервал, в котором
      var scroller = setInterval(function () {
        // считаем на сколько скроллить за 1 такт
        var scrollBy = coordY / framesCount;

        // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
        // и дно страницы не достигнуто
        if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          // то скроллим на к-во пикселей, которое соответствует одному такту
          window.scrollBy(0, scrollBy);
        } else {
          // иначе добираемся до элемента и выходим из интервала
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
        // время интервала равняется частному от времени анимации и к-ва кадров
      }, animationTime / framesCount);
    });
  });

  //modal
  var more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  more.addEventListener('click', function () {
    this.classList.add('more-splash');
    overlay.style.display = "block";
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function () {
    overlay.style.display = "none";
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  var btn = document.getElementsByClassName('description-btn')[0],
      inf = document.getElementsByClassName('info')[0],
      descriptionBtn = document.getElementsByClassName('description-btn');

  inf.addEventListener('click', function (event) {
    var target = event.target;
    if (target.className == 'description-btn') {

      var _overlay = document.querySelector('.overlay'),
          _close = document.querySelector('.popup-close');

      this.classList.add('more-splash');
      _overlay.style.display = "block";
      document.body.style.overflow = 'hidden';

      _close.addEventListener('click', function () {
        _overlay.style.display = "none";
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
      });
    }
  });

  //form
  var imgLoader = document.createElement('img');
  imgLoader.src = "img/ajax-loader.gif";
  var imgSuccess = document.createElement('img');
  imgSuccess.src = "img/checked.png";
  var imgFail = document.createElement('img');
  imgFail.src = "img/close-button.png";

  var message = new Object();
  message.loading = document.createElement('div');
  message.loading.appendChild(imgLoader);
  message.failure = document.createElement('div');
  message.failure.appendChild(imgFail);
  message.success = document.createElement('div');
  message.success.appendChild(imgSuccess);

  console.log(message);

  var form = document.getElementsByClassName('main-form')[0],
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');

  console.log(message.success);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    //AJAX
    var formData = new FormData(form);

    function postData(data) {

      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open("POST", 'server.php');
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.onreadystatechange = function () {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status === 200 && request.status < 300) {
              resolve();
            } else {
              reject();
            }
          }
        };

        request.send(formData);
      });
    }

    function clearInput() {
      for (var i = 0; i < input.length; i++) {
        input[i].value = '';
        // очищаем поля ввода
      }
    }

    postData(formData).then(function () {
      return form.appendChild(message.loading);
    }).then(function () {
      message.loading.style.display = "none";
      form.appendChild(message.success);
    }).catch(function () {
      return form.appendChild(message.failure);
    }).then(clearInput);
  });

  var formTel = document.getElementById('form'),
      inputTel = formTel.getElementsByTagName('input');

  formTel.addEventListener('submit', function (event) {
    event.preventDefault();
    formTel.appendChild(statusMessage);

    //AJAX
    var formDataTel = new FormData(formTel);

    function postData(data) {

      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open("POST", 'server.php');
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.onreadystatechange = function () {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status === 200 && request.status < 300) {
              resolve();
            } else {
              reject();
            }
          }
        };

        request.send(formDataTel);
      });
    }

    function clearInputTel() {
      for (var i = 0; i < inputTel.length; i++) {
        inputTel[i].value = '';
        // очищаем поля ввода
      }
    }

    postData(formDataTel).then(function () {
      return formTel.appendChild(message.loading);
    }).then(function () {
      message.loading.style.display = "none";
      formTel.appendChild(message.success);
    }).catch(function () {
      return formTel.appendChild(message.failure);
    }).then(clearInputTel);
  });
});