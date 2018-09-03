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

            var tab = require('../parts/tab.js');
            var form = require('../parts/form.js');
            var scroll = require('../parts/scroll.js');
            var slider = require('../parts/slider.js');
            var timer = require('../parts/timer.js');
            var modal = require('../parts/modal.js');
            var calc = require('../parts/calc.js');

            tab();
            form();
            scroll();
            slider();
            timer();
            calc();
            modal();
        });
    }, { "../parts/calc.js": 2, "../parts/form.js": 3, "../parts/modal.js": 4, "../parts/scroll.js": 5, "../parts/slider.js": 6, "../parts/tab.js": 7, "../parts/timer.js": 8 }], 2: [function (require, module, exports) {
        //calc
        function calc() {

            var persons = document.getElementsByClassName('counter-block-input')[0],
                restDays = document.getElementsByClassName('counter-block-input')[1],
                place = document.getElementById('select'),
                totalValue = document.getElementById('total'),
                personSum = 0,
                daysSum = 0,
                total = 0,
                reg = /[\D]/ig;

            totalValue.innerHTML = '';

            persons.addEventListener('keyup', function () {
                personSum = +this.value;
                total = daysSum * personSum * 4000;
                place.selectedIndex = 0;
                //if(persons.value == '' ||  persons.value == "+" ||  persons.value == "e" || Math.round(persons.value) != persons.value){
                if (persons.value.match(reg)) {
                    persons.value = "";
                    totalValue.innerHTML = 0;
                } else {
                    totalValue.innerHTML = total;
                }
            });

            restDays.addEventListener('keyup', function () {
                daysSum = +this.value;
                total = daysSum * personSum * 4000;
                place.selectedIndex = 0;
                //if(restDays.value == ''  ||  restDays.value == "+" || restDays.value == "e" || Math.round(restDays.value) != restDays.value){
                if (restDays.value.match(reg)) {
                    restDays.value = "";
                    totalValue.innerHTML = 0;
                } else {

                    totalValue.innerHTML = total;
                }
            });

            place.addEventListener('change', function () {
                //if(persons.value == '' || restDays.value == '' || persons.value == 0 || restDays.value == 0){
                if (restDays.value.match(reg) || persons.value.match(reg)) {
                    totalValue.innerHTML = 0;
                } else {
                    var a = total;
                    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
                }
            });
        }
        module.exports = calc;
    }, {}], 3: [function (require, module, exports) {
        //form
        function form() {
            var imgLoader = document.createElement('img');
            imgLoader.src = "../img/ajax-loader.gif";
            var imgSuccess = document.createElement('img');
            imgSuccess.src = "../img/checked.png";
            var imgFail = document.createElement('img');
            imgFail.src = "../img/close-button.png";

            var message = new Object();
            message.loading = document.createElement('div');
            message.loading.appendChild(imgLoader);
            message.failure = document.createElement('div');
            message.failure.appendChild(imgFail);
            message.success = document.createElement('div');
            message.success.appendChild(imgSuccess);

           

            var form = document.getElementsByClassName('main-form')[0],
                input = form.getElementsByTagName('input'),
                statusMessage = document.createElement('div');

            

            form.addEventListener('submit', function (event) {
                event.preventDefault();
                form.appendChild(statusMessage);

                //AJAX
                var request = new XMLHttpRequest();
                request.open("POST", 'server.php');
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                var formData = new FormData(form);

                request.send(formData);

                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        form.appendChild(message.loading);
                    } else if (request.readyState === 4) {
                        if (request.status === 200 && request.status < 300) {
                            message.loading.style.display = "none";
                            form.appendChild(message.success);
                            ///
                        } else {
                            form.appendChild(message.failure);
                        }
                    }
                };
                for (var i = 0; i < input.length; i++) {
                    input[i].value = '';
                    // очищаем поля ввода
                }
            });

            var formTel = document.getElementById('form'),
                inputTel = formTel.getElementsByTagName('input');

            formTel.addEventListener('submit', function (event) {
                event.preventDefault();
                formTel.appendChild(statusMessage);

                //AJAX
                var request = new XMLHttpRequest();
                request.open("POST", 'server.php');
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

                var formDataTel = new FormData(formTel);

                request.send(formDataTel);

                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        formTel.appendChild(message.loading);
                    } else if (request.readyState === 4) {
                        if (request.status === 200 && request.status < 300) {
                            message.loading.style.display = "none";
                            formTel.appendChild(message.success);
                            ///
                        } else {
                            formTel.appendChild(message.failure);
                        }
                    }
                };
                for (var i = 0; i < inputTel.length; i++) {
                    inputTel[i].value = '';
                    // очищаем поля ввода
                }
            });
        }
        module.exports = form;
    }, {}], 4: [function (require, module, exports) {
        //modal
        function modal() {
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
        }
        module.exports = modal;
    }, {}], 5: [function (require, module, exports) {
        // собираем все якоря; устанавливаем время анимации и количество кадров
        function scroll() {
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
        }
        module.exports = scroll;
    }, {}], 6: [function (require, module, exports) {
        //Slider
        function slider() {
            var slideIndex = 1,
                slides = document.getElementsByClassName('slider-item'),
                prev = document.querySelector('.prev'),
                next = document.querySelector('.next'),
                dotsWrap = document.querySelector('.slider-dots'),
                dots = document.getElementsByClassName('dot');

            showSlides(slideIndex);

            function showSlides(n) {
                if (n > slides.length) {
                    slideIndex = 1;
                };
                if (n < 1) {
                    slideIndex = slides.length;
                };
                for (var i = 0; i < slides.length; i++) {
                    slides[i].style.display = 'none';
                };
                for (var _i = 0; _i < dots.length; _i++) {
                    dots[_i].classList.remove('dot-active');
                };

                slides[slideIndex - 1].style.display = 'block';
                dots[slideIndex - 1].classList.add('dot-active');
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

            dotsWrap.addEventListener('click', function (event) {
                for (var i = 0; i < dots.length + 1; i++) {
                    if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                        currentSlide(i);
                    }
                }
            });
        }
        module.exports = slider;
    }, {}], 7: [function (require, module, exports) {
        function tab() {
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
        }
        module.exports = tab;
    }, {}], 8: [function (require, module, exports) {

        // timer
        function timer() {
            var deadline = '2018-08-31';
            var now = Date.parse(new Date());
            var dead = Date.parse(deadline);

            if (dead <= now) {
                var _timer = document.getElementById('timer'),
                    hours = _timer.querySelector('.hours'),
                    minutes = _timer.querySelector('.minutes'),
                    seconds = _timer.querySelector('.seconds');

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
        }
        module.exports = timer;
    }, {}] }, {}, [1]);