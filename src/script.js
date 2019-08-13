import jump from 'jump.js'
import slick from 'slick-carousel'
import $ from 'jquery'
import Glide from '@glidejs/glide'
import apiConfig from './apiKey'

let url = `https://api.airtable.com/v0/appiwCrmeV2rljaOH/Speakers?api_key=${apiConfig.apikey}`


let head = document.querySelector('.head');
head.style.height = screen.height/2;
console.log(screen.height)

let content = document.querySelectorAll('.who');
console.log(content)

let hidden = document.querySelectorAll('.hover_content');
console.log(hidden)
let check = true;

let plus = document.querySelectorAll('.fa-plus')
let minus = document.querySelectorAll('.fa-minus')
console.log(plus)
console.log(minus)
for(let i =0;i<content.length;i++) {
    content[i].addEventListener("click",()=>{
        if (check) {
            hidden[i].style.display = "block";
            plus[i].classList.remove('is-active')
            plus[i].classList.add('is-not')
            minus[i].classList.remove('is-not')
            minus[i].classList.add('is-active')
            check = false;
        }    
        else {
            hidden[i].style.display = "none";
            plus[i].classList.add('is-active')
            plus[i].classList.remove('is-not')
            minus[i].classList.remove('is-active')
            minus[i].classList.add('is-not')
            check = true;
        }      
    })
}

let nav = document.querySelector('.links');
console.log(nav.children);
for (let i = 0;i<nav.children.length;i++) {
    nav.children[i].addEventListener("click",()=>{
        console.log(nav.children[i].innerHTML)
        if(nav.children[i].innerHTML == "About")
            jump('.about')
        if(nav.children[i].innerHTML == "Prices")
            jump('.prices')
        if(nav.children[i].innerHTML == "Speakers")
            jump('.speakers')
    })
}

let nav2 = document.querySelector('.mob_links');
console.log(nav2.children);
let hamburger = document.querySelector('.hamburger');
console.log(hamburger)
let hcheck = true;
let nav_mob = document.querySelector('.small');
console.log(nav_mob);

for (let i = 0;i<nav2.children.length;i++) {
    nav2.children[i].addEventListener("click",()=>{
        console.log(nav2.children[i].innerHTML)
        if(nav2.children[i].innerHTML == "About") {
            hamburger.className = "hamburger hamburger--spin"
            nav_mob.className += "small"
            jump('.about')
            hcheck = true
        }
        if(nav2.children[i].innerHTML == "Prices") {
            hamburger.className = "hamburger hamburger--spin"
            nav_mob.className += "small"
            jump('.prices')
            hcheck = true
        }
        if(nav2.children[i].innerHTML == "Speakers") {
            hamburger.className = "hamburger hamburger--spin"
            nav_mob.className += "small"
            jump('.speakers')
            hcheck = true
        }
    })
}



hamburger.addEventListener("click",()=>{
    if(hcheck) {
        hamburger.className += " is-active"
        hcheck = false
        console.log(hcheck)
        nav_mob.className += " small_active"
        // document.querySelector('.hamburger-inner').style.backgroundColor = "#ff !important"
    }
    else {
        hamburger.className = "hamburger hamburger--spin"
        nav_mob.className += "small"
        hcheck = true
    }
    
})

document.querySelector('.available').addEventListener('click', () => {
    jump('.sponsor')
})

document.querySelector('.speak').addEventListener('click', () => {
    jump('.speakers')
})

let sub = document.querySelector('.subscribe');

window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY;
    if(scroll >= 1500 && scroll <= 2100) {
        sub.style.visibility = "visible";
    }
});

let glide = new Glide('.glide', {
    type: 'slider',
    autoplay:2000,
    rewind: true,
    perView: 4,
    bound: true
})

glide.mount()

let cross = document.querySelector('.fa-times');

cross.addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('slideInRight');
    document.querySelector('.modal').classList.add('slideOutRight');
    document.querySelector('.modal').classList.remove('delay-2s');
})

let mobile_display = 
`
    <div class = "row">
        <div class = "col left-side">
        </div>
        <a href="/src/more_speakers.html" class="more_speakers">All Speakers</a>
    </div>
`
let mobile  = (width) => {
    let i = 0
    let carousel = document.querySelector('.carousel')
    if(width.matches) {
        carousel.innerHTML = ""
        carousel.classList.remove('glide')
        carousel.innerHTML = mobile_display
        let left = document.querySelector('.left-side')
        let right = document.querySelector('.right-side')
        fetch(url)
        .then((resp) => {
            resp.json().then((data) => {
                console.log(data)
                data.records.forEach(element => {
                    if(element.fields.Headshot) {
                        if(i<3) {
                            let insert = 
                            `
                                <div class = "speaker-circ">
                                    <img src = "${element.fields.Headshot[0].url}">
                                    <p id="name_sm">${element.fields.Name}</p>
                                </div>
                            `
                            left.innerHTML += insert
                            i+=1
                        }
                    }
                })
            })
        })
    }
}
let x = window.matchMedia("(max-width:768px)")
mobile(x)
x.addListener(mobile)

let speaker_html = (name,work,project,url,info) => {
   let html =  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://unpkg.com/chota@latest">
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
        height: 100vh;
        background-color: white;
        text-align: center;
        margin-top: 125px;
    }
    
    .project {
        font-size: 2em;
        font-weight: 500;
    }
    
    .row {
        margin-top: 50px;
        margin: 0 auto;
    }
    
    .col-4 > img {
        width: 175px;
        clip-path: circle(40% at 50% 50%);
        margin-right: 30px;
    }
    
    .pic {
        text-align: right;
    }
    
    .info {
        width: 70%;
        text-align: left;
        font-size: 1.75em;
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
                    <p class="info">${info}</p>
                </div>
            </div>
        </section>
    </body>
    </html>
    `
    let open = window.open("")
    open.document.write(html)
}

let speakers = document.querySelectorAll('.speaker-card')
// let speakers_mobile = document.querySelectorAll('.speaker-circ')
// console.log(speakers_mobile)

speakers.forEach((element) => {
    element.addEventListener('click', () => {
        console.log(element.children)
        let name = element.children[1].innerHTML;
        console.log(name)
        fetch(url)
        .then((resp) => {
            resp.json().then((data) => {
                data.records.forEach((el) => {
                    if(el.fields.Name === name) {
                        speaker_html(el.fields.Name,el.fields.Company,el.fields.PresentationTitle,el.fields.Headshot[0].url,el.fields["35 word mini-bio"])
                    }
                })
            })
        })
    })
})

// speakers_mobile.forEach((element) => {
//     element.addEventListener('click', () => {
//         console.log(element.children)
//         let name = element.children[1].innerHTML;
//         console.log(name)
//         fetch(url)
//         .then((resp) => {
//             resp.json().then((data) => {
//                 data.records.forEach((el) => {
//                     if(el.fields.Name === name) {
//                         speaker_html(el.fields.Name,el.fields.Company,el.fields.PresentationTitle,el.fields.Headshot[0].url,el.fields["35 word mini-bio"])
//                     }
//                 })
//             })
//         })
//     })
// })

// let mobile_speak = (width) => {
//     if(width.matches) {
//         let speakers_mobile = document.querySelectorAll('.speaker-circ')

//         speakers_mobile.forEach((element) => {
//             element.addEventListener('click', () => {
//                 console.log(element.children)
//                 let name = element.children[1].innerHTML;
//                 console.log(name)
//                 fetch(url)
//                 .then((resp) => {
//                     resp.json().then((data) => {
//                         data.records.forEach((el) => {
//                             if(el.fields.Name === name) {
//                                 speaker_html(el.fields.Name,el.fields.Company,el.fields.PresentationTitle,el.fields.Headshot[0].url,el.fields["35 word mini-bio"])
//                             }
//                         })
//                     })
//                 })
//             })
//         })
//     }
    
// }

// let y = window.matchMedia("(max-width:768px)")
// mobile_speak(y)
// y.addListener(mobile_speak)