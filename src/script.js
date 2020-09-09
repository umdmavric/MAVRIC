import jump from 'jump.js'
import slick from 'slick-carousel'
import $ from 'jquery'
import Glide from '../node_modules/@glidejs/glide'
import apiConfig from './apiKey'
import moment from 'moment-timezone'

let url = `https://api.airtable.com/v0/appoL7vtaPeVCzMrl/MAVRIC%20Speakers?api_key=${apiConfig.apikey}`

let head = document.querySelector('.head');
head.style.height = screen.height / 2;
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
for (let i = 0; i < content.length; i++) {
    content[i].addEventListener("click", () => {
        if (check) {
            hidden[i].style.display = "block";
            plus[i].classList.remove('is-active')
            plus[i].classList.add('is-not')
            minus[i].classList.remove('is-not')
            minus[i].classList.add('is-active')
            check = false;
        } else {
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
for (let i = 0; i < nav.children.length; i++) {
    nav.children[i].addEventListener("click", () => {
        console.log(nav.children[i].innerHTML)
        if (nav.children[i].innerHTML == "About")
            jump('.about')
        if (nav.children[i].innerHTML == "Registration")
            jump('.registration')
        if (nav.children[i].innerHTML == "Speakers")
            jump('.speakers')
        if (nav.children[i].innerHTML == "Schedule")
            jump('.schedule')
        if (nav.children[i].innerHTML == "Schedule")
            jump('.sponsor')
    })
}

let nav2 = document.querySelector('.mob_links');
console.log(nav2.children);
let hamburger = document.querySelector('.hamburger');
console.log(hamburger)
let hcheck = true;
let nav_mob = document.querySelector('.small');
console.log(nav_mob);

for (let i = 0; i < nav2.children.length; i++) {
    nav2.children[i].addEventListener("click", () => {
        console.log(nav2.children[i].innerHTML)
        if (nav2.children[i].innerHTML == "About") {
            hamburger.className = "hamburger hamburger--spin"
            nav_mob.className += "small"
            jump('.about')
            hcheck = true
        }
        if (nav2.children[i].innerHTML == "Prices") {
            hamburger.className = "hamburger hamburger--spin"
            nav_mob.className += "small"
            jump('.prices')
            hcheck = true
        }
        if (nav2.children[i].innerHTML == "Speakers") {
            hamburger.className = "hamburger hamburger--spin"
            nav_mob.className += "small"
            jump('.speakers')
            hcheck = true
        }
        if (nav2.children[i].innerHTML == "Sponsors") {
            hamburger.className = "hamburger hamburger--spin"
            nav_mob.className += "small"
            jump('.sponsor')
            hcheck = true
        }
        if (nav2.children[i].innerHTML == "Schedule") {
            hamburger.className = "hamburger hamburger--spin"
            nav_mob.className += "small"
            jump('.schedule')
            hcheck = true
        }
        if (nav2.children[i].innerHTML == "Registration") {
            hamburger.className = "hamburger hamburger--spin"
            nav_mob.className += "small"
            jump('.registration')
            hcheck = true
        }
    })
}



hamburger.addEventListener("click", () => {
    if (hcheck) {
        hamburger.className += " is-active"
        hcheck = false
        console.log(hcheck)
        nav_mob.className += " small_active"
        // document.querySelector('.hamburger-inner').style.backgroundColor = "#ff !important"
    } else {
        hamburger.className = "hamburger hamburger--spin"
        nav_mob.className += "small"
        hcheck = true
    }

})

// document.querySelector('.available').addEventListener('click', () => {
//     jump('.sponsor')
// })

document.querySelector('.gotospeak').addEventListener('click', () => {
    jump('.speakers')
})

let sub = document.querySelector('.subscribe');

window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY;
    if (scroll >= 1500 && scroll <= 2100) {
        sub.style.visibility = "visible";
    }
});

let glide = new Glide('.glide', {
    type: 'slider',
    autoplay: 2000,
    rewind: true,
    perView: 4,
    bound: true,
    hoverpause: false
})

glide.mount()

// let cross = document.querySelector('.fa-times');

// cross.addEventListener('click', () => {
//     document.querySelector('.modal').classList.remove('slideInRight');
//     document.querySelector('.modal').classList.add('slideOutRight');
//     document.querySelector('.modal').classList.remove('delay-2s');
// })

let mobile_display =
    `
    <div class = "row">
        <div class = "col left-side">
        </div>
        <a href="/src/more_speakers.html" class="more_speakers">All Speakers</a>
    </div>
`
let mobile = (width) => {
    let i = 0
    let carousel = document.querySelector('.carousel')
    if (width.matches) {
        carousel.innerHTML = ""
        carousel.classList.remove('glide')
        carousel.innerHTML = mobile_display
        let left = document.querySelector('.left-side')
        let right = document.querySelector('.right-side')
        fetch(url)
            .then((resp) => {
                resp.json().then((data) => {
                    console.log(data)
                    data.records.forEach((element) => {
                        if (element.fields.Headshot) {
                            if (i < 3) {
                                let insert =
                                    `
                                <div class = "speaker-circ">
                                    <img src = "${element.fields.Headshot[0].url}">
                                    <p id="name_sm">${element.fields.Name}</p>
                                </div>
                            `
                                left.innerHTML += insert
                                i += 1
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


let speakers = document.querySelectorAll('.speaker-card')
// let speakers_mobile = document.querySelectorAll('.speaker-circ')
// console.log(speakers_mobile)

speakers.forEach((element) => {
    element.addEventListener('click', () => {
        console.log(element.children)
        let name = element.children[1].innerHTML;
        console.log(name)
        window.location.href = `/src/pages/${name.replace(/ /g,'')}.html`
    })
})

let presentation = {}
let dup = []
console.log(presentation)

let sessionEntry = (title, name) => {
    let title_html = `
        <td>
            <p>${name[0]}</p>
        </td>
    `
    let pres_html = `
        
    `
    let comp_html = `
        
    `
    let time_html = `
    
    `

    name.forEach((el) => {
        console.log(el)
        // let entries = Object.entries(el)

        // for(const [name, comp] of entries) {
        //     pres_html+=`<p>${name}</p>`
        //     comp_html+=`<p>${comp}</p>`
        // }
    })

    for (let i = 1; i < name.length; i++) {
        console.log(name[i])
        pres_html += `<p>${Object.keys(name[i])}</p>`
        if(name[i][Object.keys(name[i])]) {
            comp_html += `<p>${name[i][Object.keys(name[i])][0]}</p>`
        }
        if(name[i][Object.keys(name[i])]) {
            let d = new Date(name[i][Object.keys(name[i])][1]).toUTCString()
            // d = moment(d)
            console.log(d)
            time_html += `<p>${d.substring(0,d.length-3)}</p>`
        }
    }
    let table_html = `
        <tr class = "table_row">
            ${title_html}
            <td>
                ${pres_html}
            </td>
            <td>
                ${comp_html}
            </td>
            <td>
                ${time_html}
            </td>
        </tr>
    `
    document.querySelector('table').innerHTML += table_html
}
fetch(url)
    .then((resp) => {
        resp.json().then((data) => {
            console.log(data.records)
            data.records.forEach((el) => {
                if (!dup.includes(el.fields.PresentationID)) {
                    let present = el.fields.PresentationID
                    presentation[present] = [el.fields.PresentationTitle, {
                        [el.fields.Name]: [el.fields.Company, el.fields.Scheduled]
                    }]
                    dup.push(present)
                } else {
                    presentation[el.fields.PresentationID].push({
                        [el.fields.Name]: [el.fields.Company, el.fields.Scheduled]
                    })
                }
            })
            console.log(presentation)
            let entries = Object.entries(presentation)
            for (const [title, name] of entries) {
                console.log(title, name)
                if (title !== undefined)
                    sessionEntry(title, name)
                // console.log(title,name)
            }
        })
    })