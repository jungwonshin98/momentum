const API_KEY = "3118f987f93edef99377c9d5a5c41ef6";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} ${data.main.temp}°F`;
        city.innerText = `@ ${data.name}`;
    });
}

function onGeoError() {
    alert("Cannot access your location. Try again later.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);