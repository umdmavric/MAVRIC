import apiConfig from './apiKey'
let mobile_display = 
`
    <div class = "row">
        <div class = "col new_left_side">
        </div>
    </div>
`
let url = `https://api.airtable.com/v0/appiwCrmeV2rljaOH/Speakers?api_key=${apiConfig.apikey}`

let speaker_html = (name,work,project,twitter,url,info) => {
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
     
     .info {
         width: 70%;
         text-align: left;
         font-size: 1.75em;
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
     let open = window.open("")
     open.document.write(html)
 }

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
                // console.log(document.querySelectorAll('.speaker-cards'))
                let speakers = document.querySelectorAll('.speaker-cards')
                console.log(speakers)
                // let speakers_mobile = document.querySelectorAll('.speaker-circ')
                // console.log(speakers_mobile)
                
                speakers.forEach((element) => {
                    element.addEventListener('click', () => {
                        console.log(element)
                        console.log(element.children)
                        let name = element.children[1].innerHTML;
                        console.log(name)
                        fetch(url)
                        .then((resp) => {
                            resp.json().then((data) => {
                                data.records.forEach((el) => {
                                    if(el.fields.Name === name) {
                                        speaker_html(el.fields.Name,el.fields.Company,el.fields.PresentationTitle,el.fields.Twitter,el.fields.Headshot[0].url,el.fields["35 word mini-bio"])
                                    }
                                })
                            })
                        })
                    })
                })
            })
        })
        
    }
}
let x = window.matchMedia("(max-width:768px)")
mobile(x)
x.addListener(mobile)