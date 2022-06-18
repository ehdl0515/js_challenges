const API_KEY = "93e5f31997073d035299738b0880c469"

function geoSuccess(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log("you live in ", lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

    fetch(url).then((response) =>
                    response.json()).then((data) => {
                        const real =document.querySelector("#weather")
                        real.classList.remove("hidden")
                        const weather = document.querySelector("#weather div:first-child")
                        const city = document.querySelector("#weather div:last-child")
                        city.innerText = `LOCATION "${data.name}"`
                        weather.innerText = 
                        `WEATHER "${data.weather[0].main}"
                        TEMP "${data.main.temp}℃"`})
                    }
function geoError() {
    alert("Can't find your location")
}

navigator.geolocation.getCurrentPosition(geoSuccess,geoError);