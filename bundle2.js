(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// let speaker = (name,work,img) => {
//     let speaker_template = `
//     <li class="glide__slide">
//                                 <div class="speaker-card">
//                                         <img src=${img} style="border-top-left-radius: 5px; border-top-right-radius: 5px;">
//                                         <p id="name">${name}</p>
//                                         <p id="work">${work}</p>
//                                 </div>
//                             </li>
//     `
//     let prev_html = document.querySelector('.glide__slides').innerHTML
//     document.querySelector('.glide__slides').innerHTML = prev_html+speaker_template
// }

// console.log(document.querySelector('.glide__slides'))

// // let cards = document.querySelectorAll('.speaker-card')
// // for(let i = 0;i<cards.length;i++) {
// //     cards[i].addEventListener('click',(e) => {
// //     let name = cards[i].childNodes[3].innerHTML
// //     let work = cards[i].childNodes[5].innerHTML
// //     fetch(url)
// //     .then((resp) => {
// //         resp.json().then((data) => {
// //             console.log(data)
// //             data.records.forEach(element => {
// //                 console.log(element.fields.Name)
// //                 console.log(element.fields.Company)
// //                 if(element.fields.Headshot && element.fields.Name == name) {
// //                     console.log(element.fields.Headshot[0].url)
// //                     let opened = window.open("");
// //                     opened.document.write(`<html>
// //                     <head>
// //                     <link rel="stylesheet" href="https://unpkg.com/chota@latest">
// //                     <style>
// //                     body {background-color:black}
// //                     </style>
// //                     <title>MyTitle</title></head><body style="color:blue">test</body></html>`);
// //                     // speaker(element.fields.Name, element.fields.Company,element.fields.Headshot[0].url)
// //                 }
                    
// //             });
// //         })
// //     })  
// //     })
// // }



},{}]},{},[1]);
