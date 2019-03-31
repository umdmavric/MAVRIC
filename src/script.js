import jump from 'jump.js'

let head = document.querySelector('.head');
head.style.height = screen.height/2;
console.log(screen.height)

let content = document.querySelectorAll('.who');
console.log(content)

let hidden = document.querySelectorAll('.hover_content');
console.log(hidden)
let check = true;

for(let i =0;i<content.length;i++) {
    content[i].addEventListener("click",()=>{
        if (check) {
            hidden[i].style.display = "block";
            check = false;
        }    
        else {
            hidden[i].style.display = "none";
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
    })
}



hamburger.addEventListener("click",()=>{
    if(hcheck) {
        hamburger.className += " is-active"
        hcheck = false
        console.log(hcheck)
        nav_mob.className += " small_active"
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

