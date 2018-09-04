(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ButtonsList=["7;8;9;/[;C[","4;5;6;*[;<[","1;2;3;+[;=|[","0;00;.;-["];
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create(tagName, clasName, childs = []) {
    let elem = document.createElement(tagName);
    elem.className = clasName;
    return elem;
}
exports.create = create;
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buttons_1 = require("./lib/buttons");
const element_1 = require("./lib/element");
class Calc {
    static get variable() {
        let i = parseInt(this._v);
        if (!isNaN(i) && i === 0)
            this._v = '';
        return this._v;
    }
    static set variable(v) {
        if (!v.length)
            v = '0';
        this._v = v;
        this.view.innerHTML = v;
    }
    static init() {
        let keyboard = element_1.create('table', 'keyboard');
        let keyOn = (v) => {
            return () => {
                let vs = this.variable;
                if (/[0-9]/.test(v))
                    this.variable += v;
                if (/[\.\-\/\*\+]/.test(v) && !/[\.\-\/\*\+]/.test(vs[vs.length - 1]))
                    this.variable += v;
                if (v === '=')
                    this.variable = eval(this.variable).toString();
                if (v === 'C') {
                    this.hystory = [];
                    this.variable = '';
                }
                if (v === '<') {
                    try {
                        this.variable = this.hystory.pop();
                    }
                    catch (e) {
                        this.variable = '';
                    }
                }
                else if (vs !== this.variable)
                    this.hystory.push(vs);
            };
        };
        window.addEventListener('keydown', (e) => {
            let v = e.key;
            if (v === 'Enter')
                v = '=';
            if (v === 'Backspace')
                v = '<';
            if (v === 'Escape')
                v = 'C';
            keyOn(v)();
        });
        for (let keyString of buttons_1.ButtonsList) {
            let tr = element_1.create('tr', 'keyboard-row');
            let buttons = keyString.split(';');
            for (let button of buttons) {
                let td = element_1.create('td', 'keyboard-key');
                let v = td.innerText = button.replace(/[\[\|]/g, '');
                td.onclick = keyOn(v);
                if (button.indexOf('|') !== -1)
                    td.setAttribute('rowspan', '2');
                if (button.indexOf('[') !== -1)
                    td.classList.add('soft');
                tr.appendChild(td);
            }
            keyboard.appendChild(tr);
        }
        document.querySelector('.container').appendChild(keyboard);
    }
}
Calc.view = document.querySelector('.view');
Calc._v = '0';
Calc.hystory = [];
Calc.init();
},{"./lib/buttons":1,"./lib/element":2}]},{},[3])

document.addEventListener("DOMContentLoaded",function(){
    this.querySelector(".icon").addEventListener("click",function(){
        let waitClass = "waiting",
            runClass = "running",
            cl = this.classList;

        if (!cl.contains(waitClass) && !cl.contains(runClass)) {
            cl.add(waitClass);
            setTimeout(function(){
                cl.remove(waitClass);
                setTimeout(function(){
                    cl.add(runClass);
                    setTimeout(function(){
                        cl.remove(runClass);
                    }, 4000);
                }, 200);
            }, 1800);
        }
    });
});