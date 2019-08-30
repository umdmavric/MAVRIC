import apiConfig from './apiKey'
let mobile_display = 
`
    <div class = "row">
        <div class = "col new_left_side">
        </div>
    </div>
`
let url = `https://api.airtable.com/v0/appiwCrmeV2rljaOH/Speakers?api_key=${apiConfig.apikey}`

console.log(document.querySelector('.head'))
let mobile  = (width) => {
    let i = 0
    let carousel = document.querySelector('.carousel_2')
    console.log(carousel)
    if(width.matches) {
        carousel.innerHTML = mobile_display
        let left = document.querySelector('.new_left_side')
        fetch(url)
        .then((resp) => {
            resp.json().then((data) => {
                data.records.forEach(element => {
                    if(element.fields.Headshot) {
                            let insert = 
                            `
                                <div class = "speaker-cards">
                                    <img src = "${element.fields.Headshot[0].url}">
                                    <p id="name_sm" style="font-weight:bold">${element.fields.Name}</p>
                                    <p id="work_sm" style="max-width:300px; margin: 0 auto;">${element.fields.Company}</p>
                                </div>
                            `
                            left.innerHTML += insert
                    }
                })
                let speakers = document.querySelectorAll('.speaker-cards')
                speakers.forEach((element) => {
                    element.addEventListener('click', () => {
                        console.log(element)
                        console.log(element.children)
                        let name = element.children[1].innerHTML;
                        window.location.href= `/src/pages/${name.replace(/ /g,'')}.html`
                        console.log(name)
                    })
                })
            })
        })
        
    }
}
let x = window.matchMedia("(max-width:768px)")
mobile(x)
x.addListener(mobile)