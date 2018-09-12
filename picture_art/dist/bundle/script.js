'use strict';

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
    var windows = require('../parts/windows.js');

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
    windows();
});