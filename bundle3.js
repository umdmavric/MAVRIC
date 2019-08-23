(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
"use strict";

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
exports.default = global.fetch.bind(global);

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
},{}],3:[function(require,module,exports){

let fs = require('fs')
let fetch = require('node-fetch')
let url = `https://api.airtable.com/v0/appiwCrmeV2rljaOH/Speakers?api_key=keyhyniEmyt4kcvvs`

let speaker_html = (name,work,project,twitter,url,des,info) => {
    let html =  `
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         <link rel="stylesheet" href="https://unpkg.com/chota@latest">
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" 
         integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" 
         crossorigin="anonymous">
         <title>About Speaker</title>
     </head>
     <body>
     <style>
     html {
         height: 100%;
     }
     
     body {
         margin: 0;
         overflow-x: hidden;
     }
     
     .content {
         margin-bottom: 200px;
         background-color: white;
         text-align: center;
         margin-top: 125px;
     }
     
     .project {
         font-size: 2em;
         font-weight: 500;
         max-width: 600px;
         margin: 0 auto;
     }
 
     .name {
         margin-top: 40px;
     }
     
     .row {
         margin-top: 50px;
         margin: 0 auto;
     }
     
     .col-4 > img {
         width: 175px;
         clip-path: circle(40% at 50% 50%);
         -webkit-clip-path: circle(40% at 50% 50%);
         margin-right: 30px;
     }
     
     .pic {
         text-align: right;
     }
     
     .title {
         margin: 0 auto;
         font-size: 1.5em;
         text-align: left;
     }
 
     .info {
         width: 70%;
         text-align: left;
         font-size: 1em;
     }
 
     .twitter {
         margin-right: 30px;
     }
 
     .footer {
         margin-top: 50px;
         background-color: #333333;
         color: white;
         padding-top: 60px;
         padding-bottom: 50px;
     }
   
     .foots {
         display: flex;
         justify-content: center;
     }
   
     /* .foot1 {
       position: relative;
       left: 350px;
     } */
   
     .foot1 {
       margin-right: 20%;
     }
   
     .address a {
         color: white !important;
     }
 
     a {
         color: white !important;
     }
   
     /* .foot2 {
         position: relative;
         right: 350px;
     } */
   
     .foot2 {
       margin-left: 20%;
     }
   
     .social i {
         margin-right: 20px;
     }
   
     .last-year {
         margin-top: 20px;
     }
   
     .last-year > a {
         color: #666666;
     }
     
     @media (max-width:600px) {
         .row {
             justify-content: center !important;
         }
     
         .col-4 {
             text-align: center;
         }
     
         .col-4 > img {
             margin: 0;
         }
     
         .col {
             margin: 0 auto;
         }
 
         .info {
             margin: 0 auto;
             font-size: 1.25em;
         }
     }
     </style>
         <section class="content">
             <p class="project">${project}</p>
             <p class="name">${name} --${work}</p>
             <div class="row">
                 <div class="col-4 pic">
                 <img src="${url}">
                 
                 </div>
                 <div class="col">
                     <p class="title">Session Description</p>
                     <p class="info">${des}</p>
                     <p class="title">Bio</p>
                     <p class="info">${info}</p>
                 </div>
             </div>
         </section>
         <section class="footer">
         <div class="foots">
             <div class="foot1">
                 <div class="address">
                     <p>About MAVRIC</p>
                     <p>Mitchell Building, Suite 2130 
                         <br>
                         College Park, MD 20742
                         <br>
                         mavric@umd.edu
                         <br>
                         +1 301-405-2924
                     </p>
                     <a class="button outline" href="mailto:mavric@umd.edu?Subject=General%20Inquiry">Contact Us</a>
                 </div>
             </div>
             <div class="foot2">
                 <div class="follow">
                     <p>Follow Us</p>
                     <div class="social">
                         <a href="https://www.facebook.com/UnivofMaryland/" target="#"><i class="fab fa-facebook-f"></i></a>
                         <a href="https://twitter.com/UMDMAVRIC"><i class="fab fa-twitter"></i></a>
                         <a href="https://www.instagram.com/umdmavric/"><i class="fab fa-instagram"></i></a>
                         <a href="https://mavric.umd.edu/funding-and-events-archive"><i class="far fa-envelope"></i></a>
                     </div>
                 </div>
             </div>
         </div>
     </section>
     </body>
     </html>
     `
     let page = `${name.replace(/ /g,'')}.html`
     fs.writeFile(`./pages/${page}`, html, (err) => {
         if(err)
            console.log('error',err)
     })
 }

fetch(url)
.then((resp) => {
    resp.json().then((data) => {
        console.log(data.records)
        data.records.forEach(el => {
            if(el.fields.Headshot)
                speaker_html(el.fields.Name,el.fields.Company,el.fields.PresentationTitle,el.fields.Twitter,el.fields.Headshot[0].url,el.fields["Session Description"],el.fields["35 word mini-bio"])
        });
    })
})
},{"fs":1,"node-fetch":2}]},{},[3]);
