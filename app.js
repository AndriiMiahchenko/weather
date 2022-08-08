let city = prompt("Enter your city:");
let weather = document.querySelector("#open-weather");

function userWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)

    .then((res) => res.json())
    .then((data) => {
        let name = data.name;
        let temp = Math.round(data.main.temp);
        let pressure = data.main.pressure;
        let description = data.weather[0].description;
        let humidity = data.main.humidity;
        let speed = data.wind.speed;
        let deg = data.wind.deg;
        let icon = data.weather[0].icon;

        const widjet = `
        <div class="block block-border">
            <div class="place">Your city:  <span>${name}</span></div>
            <div class="temp">Temperature:  <span>${temp} *C</span></div>
            <div class="pressure">Pressure:  <span>${pressure} mm</span></div>
            <div class="description">Description:  <span>${description}</span></div>
            <div class="humidity">Humidity:  <span>${humidity} %</span></div>
            <div class="speed">Wind speed:  <span>${speed} m/s</span></div>
            <div class="deg">Wind direction:  <span>${deg} deg</span></div>
        </div>
        <div class="block">
            <div class="icon"><img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather"></div>
        </div>`;

        weather.innerHTML = widjet;
    })
}

userWeather();