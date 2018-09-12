"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];return o(n || r);
        }, p, p.exports, r, e, n, t);
      }return n[i].exports;
    }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }return o;
  }return r;
})()({ 1: [function (require, module, exports) {
    window.addEventListener('DOMContentLoaded', function () {

      var accordion = require('../parts/accordion.js');
      var ajaxsend = require('../parts/ajaxsend.js');
      var block = require('../parts/block.js');
      var calc = require('../parts/calc.js');
      var time = require('../parts/time.js');
      var downslider = require('../parts/downslider.js');
      var filter = require('../parts/filter.js');
      var gift = require('../parts/gift.js');
      var hamburg = require('../parts/hamburg.js');
      var load = require('../parts/load.js');
      var popupConsultation = require('../parts/popupConsultation.js');
      var popupDesign = require('../parts/popupDesign.js');
      var upslider = require('../parts/upslider.js');

      accordion();
      ajaxsend();
      block();
      calc();
      time();
      downslider();
      filter();
      gift();
      hamburg();
      load();
      popupConsultation();
      popupDesign();
      upslider();
    });
  }, { "../parts/accordion.js": 2, "../parts/ajaxsend.js": 3, "../parts/block.js": 4, "../parts/calc.js": 5, "../parts/downslider.js": 6, "../parts/filter.js": 7, "../parts/gift.js": 8, "../parts/hamburg.js": 9, "../parts/load.js": 10, "../parts/popupConsultation.js": 11, "../parts/popupDesign.js": 12, "../parts/time.js": 13, "../parts/upslider.js": 14 }], 2: [function (require, module, exports) {
    //аккардион
    function accordion() {
      var acc = document.getElementsByClassName('accordion-heading');
      var accBlock = document.getElementsByClassName("accordion-block");

      for (var i = 0; i < acc.length; i++) {
        accBlock[i].style.display = "none";
      }

      var _loop = function _loop(_i) {
        acc[_i].addEventListener('click', function () {
          if (accBlock[_i].style.display == "block") {
            acc[_i].classList.remove('ui-accordion-header-active');
            accBlock[_i].style.display = "none";
          }
        });
      };

      for (var _i = 0; _i < acc.length; _i++) {
        _loop(_i);
      }

      var _loop2 = function _loop2(_i2) {
        acc[_i2].addEventListener('click', function () {
          for (var _i4 = 0; _i4 < acc.length; _i4++) {
            accBlock[_i4].style.display = "none";
          }
          accBlock[_i2].style.display = "block";
          accBlock[_i2].classList.add("animated", "bounceInDown");
        });
      };

      for (var _i2 = 0; _i2 < acc.length; _i2++) {
        _loop2(_i2);
      }

      var _loop3 = function _loop3(_i3) {
        acc[_i3].addEventListener('click', function () {
          for (var _i5 = 0; _i5 < acc.length; _i5++) {
            acc[_i5].classList.remove('ui-accordion-header-active');
          }
          acc[_i3].classList.add('ui-accordion-header-active');
        });
      };

      for (var _i3 = 0; _i3 < acc.length; _i3++) {
        _loop3(_i3);
      }
    }
    module.exports = accordion;
  }, {}], 3: [function (require, module, exports) {
    function ajaxsend() {

      var form = document.querySelectorAll("form"),
          phoneInputs = document.querySelectorAll("[name='phone']"),
          nameInputs = document.querySelectorAll("[name='name']"),
          formTextareas = document.querySelectorAll("[name='message']"),
          statusMessage = document.createElement('div');

      var message = new Object();
      message.loading = 'Загрузка...';
      message.success = 'Скоро мы с вами свяжемся';
      message.failure = 'Что-то пошло не так...';

      for (var i = 0; i < form.length; i++) {
        form[i].addEventListener('submit', requestResponse);
      }

      for (var _i6 = 0; _i6 < phoneInputs.length; _i6++) {
        phoneInputs[_i6].addEventListener('input', mask);
      }

      var _loop4 = function _loop4(_i7) {
        nameInputs[_i7].addEventListener("blur", function () {
          nameInputs[_i7] = nameInputs[_i7].value.replace(/[^\йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ]/ig, "");
        });

        nameInputs[_i7].addEventListener('keyup', function () {
          nameInputs[_i7] = nameInputs[_i7].value.replace(/[^\йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ]/ig, "");
        });
      };

      for (var _i7 = 0; _i7 < nameInputs.length; _i7++) {
        _loop4(_i7);
      }

      var _loop5 = function _loop5(_i8) {
        formTextareas[_i8].addEventListener("blur", function () {
          formTextareas[_i8] = formTextareas[_i8].value.replace(/[^\йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ]/ig, "");
        });

        formTextareas[_i8].addEventListener('keyup', function () {
          formTextareas[_i8][_i8] = formTextareas[_i8].value.replace(/[^\йцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ]/ig, "");
        });
      };

      for (var _i8 = 0; _i8 < formTextareas.length; _i8++) {
        _loop5(_i8);
      }

      function requestResponse(event) {
        event.preventDefault();
        this.appendChild(statusMessage);

        //AJAX
        var request = new XMLHttpRequest(),
            formData = new FormData(event.target);

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send(formData);

        request.onreadystatechange = function () {
          if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
          } else if (request.readyState === 4) {
            if (request.status == 200 && request.status < 300) {
              statusMessage.innerHTML = message.success;
            } else {
              statusMessage.innerHTML = message.failure;
            }
          }
        };
      }

      //Маска ввода телефонного номера
      var keyCode = void 0;

      function mask(event) {
        event.KeyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = '(___) ____-___',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, ''),
            new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });

        i = new_value.indexOf('_');
        if (i != -1) {
          i < 5 && (i = 1);
          new_value = new_value.slice(0, i);
        }

        var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {

          return '\\d{1,' + a.length + '}';
        }).replace(/[+()]/g, '\\$&');

        reg = new RegExp('^' + reg + '$');

        if (!reg.test(this.value) || this.value.length < 1 || keyCode > 47 && keyCode < 58) {
          this.value = new_value;
        }

        if (event.type == 'blur' && this.value.length < 1) {
          this.value = '';
        }
      }
    }
    module.exports = ajaxsend;
  }, {}], 4: [function (require, module, exports) {
    function block() {

      // Картинки при наведении
      var sizeBlock1 = document.querySelectorAll('.sizes-block')[0];

      var sizeChildren1 = sizeBlock1.children[0];
      var sizeChildren2 = sizeBlock1.children[1];
      var sizeChildren3 = sizeBlock1.children[2];
      var sizeChildren4 = sizeBlock1.children[3];

      sizeBlock1.addEventListener('mouseenter', function () {
        sizeChildren1.src = "./img/sizes-1-1.png";
        sizeChildren2.style.display = "none";
        sizeChildren3.style.display = "none";
        sizeChildren4.style.display = "none";
      });

      sizeBlock1.addEventListener('mouseleave', function () {
        sizeChildren1.src = "./img/sizes-1.png";
        sizeChildren2.style.display = "block";
        sizeChildren3.style.display = "block";
        sizeChildren4.style.display = "block";
      });

      // 2 блок
      var sizeBlock2 = document.querySelectorAll('.sizes-block')[1];

      var sizeChildren12 = sizeBlock2.children[0];
      var sizeChildren22 = sizeBlock2.children[1];
      var sizeChildren32 = sizeBlock2.children[2];
      var sizeChildren42 = sizeBlock2.children[3];

      sizeBlock2.addEventListener('mouseenter', function () {
        sizeChildren12.src = "./img/sizes-2-1.png";
        sizeChildren22.style.display = "none";
        sizeChildren32.style.display = "none";
        sizeChildren42.style.display = "none";
      });

      sizeBlock2.addEventListener('mouseleave', function () {
        sizeChildren12.src = "./img/sizes-2.png";
        sizeChildren22.style.display = "block";
        sizeChildren32.style.display = "block";
        sizeChildren42.style.display = "block";
      });

      // 3 блок
      var sizeBlock3 = document.querySelectorAll('.sizes-block')[2];

      var sizeChildren13 = sizeBlock3.children[0];
      var sizeChildren23 = sizeBlock3.children[1];
      var sizeChildren33 = sizeBlock3.children[2];
      var sizeChildren43 = sizeBlock3.children[3];

      sizeBlock3.addEventListener('mouseenter', function () {
        sizeChildren13.src = "./img/sizes-3-1.png";
        sizeChildren23.style.display = "none";
        sizeChildren33.style.display = "none";
        sizeChildren43.style.display = "none";
      });

      sizeBlock3.addEventListener('mouseleave', function () {
        sizeChildren13.src = "./img/sizes-3.png";
        sizeChildren23.style.display = "block";
        sizeChildren33.style.display = "block";
        sizeChildren43.style.display = "block";
      });

      // 4 блок 

      var sizeBlock4 = document.querySelectorAll('.sizes-block')[3];

      var sizeChildren14 = sizeBlock4.children[0];
      var sizeChildren24 = sizeBlock4.children[1];
      var sizeChildren34 = sizeBlock4.children[2];
      var sizeChildren44 = sizeBlock4.children[3];

      sizeBlock4.addEventListener('mouseenter', function () {
        sizeChildren14.src = "./img/sizes-4-1.png";
        sizeChildren24.style.display = "none";
        sizeChildren34.style.display = "none";
        sizeChildren44.style.display = "none";
      });

      sizeBlock4.addEventListener('mouseleave', function () {
        sizeChildren14.src = "./img/sizes-4.png";
        sizeChildren24.style.display = "block";
        sizeChildren34.style.display = "block";
        sizeChildren44.style.display = "block";
      });
    }
    module.exports = block;
  }, {}], 5: [function (require, module, exports) {

    // калькулятор
    function calc() {
      var size = document.getElementById('size'),
          material = document.getElementById('material'),
          options = document.getElementById('options'),
          coupon = document.getElementsByClassName('promocode')[0],
          totalValue = document.getElementsByClassName('calc-price')[0],
          total = 0;
      var reg = /IWANTPOPART/;

      size.addEventListener('change', function () {
        total = size.value * material.value + options.value;
        if (size.value == 0 || material.value == 0) {
          totalValue.innerHTML = '';
        } else {
          if (coupon.value.match(reg)) {
            totalValue.innerHTML = total - total * 0.3;
          } else {
            totalValue.innerHTML = total;
          }
        }
      });

      material.addEventListener('change', function () {
        total = size.value * material.value + options.value;
        if (size.value == 0 || material.value == 0) {
          totalValue.innerHTML = '';
        } else {
          if (coupon.value.match(reg)) {
            totalValue.innerHTML = total - total * 0.3;
          } else {
            totalValue.innerHTML = total;
          }
        }
      });

      options.addEventListener('change', function () {
        total = size.value * material.value + options.value;
        if (size.value == '' || material.value == '') {
          totalValue.innerHTML = '';
        } else {
          if (coupon.value.match(reg)) {
            totalValue.innerHTML = total - total * 0.3;
          } else {
            totalValue.innerHTML = total;
          }
        }
      });

      coupon.addEventListener('change', function () {
        total = size.value * material.value + options.value;

        if (size.value == '' || material.value == '') {
          totalValue.innerHTML = '';
        } else {
          if (coupon.value.match(reg)) {
            totalValue.innerHTML = total - total * 0.3;
          } else {
            totalValue.innerHTML = total;
          }
        }
      });
    }
    module.exports = calc;
  }, {}], 6: [function (require, module, exports) {

    function downslider() {

      // нижний слайдер

      var slideIndex = 1,
          slides = document.getElementsByClassName('feedback-slider-item'),
          prev = document.querySelector('.main-prev-btn'),
          next = document.querySelector('.main-next-btn');

      showSlides(slideIndex);

      function showSlides(n) {
        if (n > slides.length) {
          slideIndex = 1;
        };
        if (n < 1) {
          slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
        }
        slides[slideIndex - 1].style.display = 'block';
        slides[slideIndex - 1].classList.add("animated", "bounceInLeft");
      }

      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      prev.addEventListener('click', function () {
        plusSlides(-1);
      });

      next.addEventListener('click', function () {
        plusSlides(1);
      });

      setInterval(function () {
        showSlides(slideIndex += 1);
      }, 4000);
    }
    module.exports = downslider;
  }, {}], 7: [function (require, module, exports) {
    function filter() {
      /// фильтрация блоков
      var allActive = document.getElementsByClassName("all active")[0];
      var lovers = document.getElementsByClassName("lovers")[0];
      var chef = document.getElementsByClassName("chef")[0];
      var girl = document.getElementsByClassName("girl")[0];
      var guy = document.getElementsByClassName("guy")[0];
      var grandmother = document.getElementsByClassName("grandmother")[0];
      var granddad = document.getElementsByClassName("granddad")[0];

      var portfolioNo = document.getElementsByClassName("portfolio-no")[0];

      var portfolioMenu = document.getElementsByClassName("portfolio-menu")[0];
      var portfolioBlockAll = document.getElementsByClassName("portfolio-block");

      var li = portfolioMenu.children;

      var _loop6 = function _loop6(i) {
        li[i].addEventListener('click', function () {
          for (var _i9 = 0; _i9 < li.length; _i9++) {
            li[_i9].classList.remove('active');
          }
          li[i].classList.add('active');
        });
      };

      for (var i = 0; i < li.length; i++) {
        _loop6(i);
      }

      allActive.addEventListener('click', function () {
        allActive.classList.add("active");
        for (var i = 0; i < portfolioBlockAll.length; i++) {
          if (portfolioBlockAll[i].classList.contains('all')) {
            portfolioBlockAll[i].style.display = "block";
          }
        }
      });

      lovers.addEventListener('click', function () {
        for (var i = 0; i < portfolioBlockAll.length; i++) {

          if (!portfolioBlockAll[i].classList.contains('lovers')) {
            portfolioBlockAll[i].style.display = "none";
          } else {
            portfolioBlockAll[i].style.display = "block";
          }
        }
      });

      chef.addEventListener('click', function () {
        for (var i = 0; i < portfolioBlockAll.length; i++) {

          if (!portfolioBlockAll[i].classList.contains('chef')) {
            portfolioBlockAll[i].style.display = "none";
          } else {
            portfolioBlockAll[i].style.display = "block";
          }
        }
      });

      girl.addEventListener('click', function () {
        for (var i = 0; i < portfolioBlockAll.length; i++) {

          if (!portfolioBlockAll[i].classList.contains('girl')) {
            portfolioBlockAll[i].style.display = "none";
          } else {
            portfolioBlockAll[i].style.display = "block";
          }
        }
      });

      guy.addEventListener('click', function () {
        for (var i = 0; i < portfolioBlockAll.length; i++) {

          if (!portfolioBlockAll[i].classList.contains('guy')) {
            portfolioBlockAll[i].style.display = "none";
          } else {
            portfolioBlockAll[i].style.display = "block";
          }
        }
      });

      grandmother.addEventListener('click', function () {
        for (var i = 0; i < portfolioBlockAll.length; i++) {

          portfolioBlockAll[i].style.display = "none";
          portfolioNo.style.display = "block";
        }
      });

      granddad.addEventListener('click', function () {

        for (var i = 0; i < portfolioBlockAll.length; i++) {

          portfolioBlockAll[i].style.display = "none";
          portfolioNo.style.display = "block";
        }
      });
    }

    module.exports = filter;
  }, {}], 8: [function (require, module, exports) {
    // подарок

    function gift() {

      var gift = document.querySelector('.fixed-gift');
      var modal = document.querySelector('.popup-gift');
      var close = document.getElementsByClassName('popup-close')[1];
      var buttonCount = document.getElementsByClassName('button');
      var click = false;

      gift.addEventListener('click', function () {
        modal.style.display = "block";
        gift.style.display = "none";
        document.body.style.overflow = 'hidden';
      });

      window.addEventListener('click', function () {
        var target = event.target;
        if (target == modal) {
          modal.style.display = "none";
          document.body.style.overflow = '';
        }
      });
      close.addEventListener('click', function () {
        modal.style.display = "none";
        document.body.style.overflow = '';
      });

      for (var i = 0; i < buttonCount.length; i++) {
        buttonCount[i].addEventListener('click', function () {
          click = true;
        });
      }
      var a = 0;

      window.addEventListener('scroll', function () {
        var clientHeight = document.getElementsByClassName('promo promo-3')[0].clientHeight;
        var scrolled = Math.round(document.documentElement.scrollTop);
        var scrollHeight = document.documentElement.scrollHeight;

        if (scrollHeight - scrolled <= clientHeight && click == false) {
          gift.style.display = "none";
          modal.style.display = "block";
          document.body.style.overflow = 'hidden';
          a += 1;
          if (a > 4) {
            modal.style.display = "none";
            document.body.style.overflow = '';
          }
        }
      });
    }
    module.exports = gift;
  }, {}], 9: [function (require, module, exports) {
    function hamburg() {

      //Гамбургер-меню 
      var burger = document.querySelector('.burger');
      var burgerMenu = document.querySelector('.burger-menu');
      var width = document.documentElement.offsetWidth;

      if (width <= 768) {

        burgerMenu.style.display = 'none';

        burger.addEventListener('click', function () {

          if (burgerMenu.style.display == 'none') {
            burgerMenu.style.display = 'block';
          } else {
            burgerMenu.style.display = 'none';
          }
        });
      }
    }
    module.exports = hamburg;
  }, {}], 10: [function (require, module, exports) {
    //Подгрузка блоков
    function load() {
      var buttonTransparent = document.getElementsByClassName(' button-transparent ')[0];
      var cards = document.getElementsByClassName('styles-2');

      buttonTransparent.addEventListener('click', function () {

        for (var i = 0; i < cards.length; i++) {

          cards[i].classList = "col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1 styles-2";
        }
        buttonTransparent.style.display = "none";
      });
    }
    module.exports = load;
  }, {}], 11: [function (require, module, exports) {
    function popupConsultation() {

      //Модальные окна  popup-consultation
      var buttonConsultation = document.getElementsByClassName('button-consultation');
      var modalConsultation = document.querySelector('.popup-consultation');
      var close0 = document.getElementsByClassName('popup-close')[0];
      for (var i = 0; i < buttonConsultation.length; i++) {

        buttonConsultation[i].addEventListener('click', function () {
          modalConsultation.style.display = "block";
          document.body.style.overflow = 'hidden';
        });
      }

      window.addEventListener('click', function () {
        var target = event.target;
        if (target == modalConsultation) {
          modalConsultation.style.display = "none";
          document.body.style.overflow = '';
        }
      });

      close0.addEventListener('click', function () {
        modalConsultation.style.display = "none";
        document.body.style.overflow = '';
      });
    }
    module.exports = popupConsultation;
  }, {}], 12: [function (require, module, exports) {
    //calc
    function popupDesign() {

      //Модальные окна popup-design
      var buttonOrder = document.getElementsByClassName('button-design');
      var modalPopupDesign = document.getElementsByClassName('popup-design')[0];
      var close1 = document.getElementsByClassName('popup-close')[2];

      for (var i = 0; i < buttonOrder.length; i++) {

        buttonOrder[i].addEventListener('click', function () {
          modalPopupDesign.style.display = "block";
          modalPopupDesign.style.zIndex = "10000000";
          document.body.style.overflow = 'hidden';
        });
      }
      window.addEventListener('click', function () {
        var target = event.target;
        if (target == modalPopupDesign) {
          modalPopupDesign.style.display = "none";
          document.body.style.overflow = '';
        }
      });
      close1.addEventListener('click', function () {
        modalPopupDesign.style.display = "none";
        document.body.style.overflow = '';
      });
    }
    module.exports = popupDesign;
  }, {}], 13: [function (require, module, exports) {
    function time() {
      //Модальное окно при посещении сайта более 60 секунд
      var startdate = new Date();
      var clockStart = startdate.getTime();

      function initStopwatch() {
        var thisTime = new Date();
        return (thisTime.getTime() - clockStart) / 1000;
      }
      function getSecs() {
        var tSecs = Math.round(initStopwatch());
        var x = setTimeout('getSecs()', 1000);
        if (x > 60 && x <= 61) {
          if (modalConsultation.style.display == "block" || modal.style.display == "block" || modalPopupDesign.style.display == "block") {
            modalConsultation.style.display = "none";
          } else {
            modalConsultation.style.display = "block";
            document.body.style.overflow = 'hidden';
          }
        }
      }
      getSecs();
    }
    module.exports = time;
  }, {}], 14: [function (require, module, exports) {

    function upslider() {
      var slideIndexMain = 1,
          slidesMain = document.getElementsByClassName('main-slider-item');

      showSlidesMain(slideIndexMain);

      function showSlidesMain(n) {
        if (n > slidesMain.length) {
          slideIndexMain = 1;
        };
        if (n < 1) {
          slideIndexMain = slidesMain.length;
        }
        for (var i = 0; i < slidesMain.length; i++) {
          slidesMain[i].style.display = 'none';
        }
        slidesMain[slideIndexMain - 1].style.display = 'block';
        slidesMain[slideIndexMain - 1].classList.add("animated", "bounceInDown");
      }

      setInterval(function () {
        showSlidesMain(slideIndexMain += 1);
      }, 3000);
    }
    module.exports = upslider;
  }, {}] }, {}, [1]);