import apiConfig from './apiKey'

let url = `https://api.airtable.com/v0/appiwCrmeV2rljaOH/Speakers?api_key=${apiConfig.apikey}`
fetch(url)
.then((resp) => {
    resp.json().then((data) => {
        console.log(data)
    })
})