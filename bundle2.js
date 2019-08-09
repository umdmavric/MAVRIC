(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

module.exports = {
    "apikey" : "keyhyniEmyt4kcvvs"
}
},{}],2:[function(require,module,exports){
"use strict";

var _apiKey = _interopRequireDefault(require("./apiKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let mobile_display = `
    <div class = "row">
        <div class = "col left-side">
        </div>
    </div>
`;
let url = `https://api.airtable.com/v0/appiwCrmeV2rljaOH/Speakers?api_key=${_apiKey.default.apikey}`;
console.log(document.querySelector('.head'));

let mobile = width => {
  let i = 0;
  let carousel = document.querySelector('.carousel');
  console.log(carousel);

  if (width.matches) {
    carousel.innerHTML = mobile_display;
    let left = document.querySelector('.left-side');
    let right = document.querySelector('.right-side');
    fetch(url).then(resp => {
      resp.json().then(data => {
        data.records.forEach(element => {
          if (element.fields.Headshot) {
            let insert = `
                                <div class = "speaker-circ">
                                    <img src = "${element.fields.Headshot[0].url}">
                                    <p id="name_sm" style="font-weight:bold">${element.fields.Name}</p>
                                    <p id="work_sm">${element.fields.Company}</p>
                                </div>
                            `;
            left.innerHTML += insert;
          }
        });
      });
    });
  }
};

let x = window.matchMedia("(max-width:768px)");
mobile(x);
x.addListener(mobile);

},{"./apiKey":1}]},{},[2]);
