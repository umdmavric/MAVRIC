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