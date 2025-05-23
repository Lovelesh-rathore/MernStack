const API_KEY = "2ac0380a3ab246c30b015a3437a5beba";

async function getWeather() {
  const city = document.getElementById("city").value.trim();
  try {
    const { lat, lon } = await getGeoLoc(city);

    if (!lat || !lon) {
      alert("Enter valid city name", city);
      document.getElementById("city").value = "";
      return;
    }

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response = await fetch(URL);
    const data = await response.json();

    document.getElementById("main-visiblity").style.display = "block";
    document.getElementById("cityName").innerText = city;
    document.getElementById("main").innerText = data.weather[0].main;
    document.getElementById("temp").innerText =
      (data.main.temp - 273.15).toFixed(1) + "°C";
    document.getElementById(
      "icon"
    ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("windSpeed").innerText = data.wind.speed + "m/s";
    document.getElementById("tempFeelsLike").innerText =
      (data.main.feels_like - 273.15).toFixed(1) + "°C";
    document.getElementById("humidity").innerText = data.main.humidity + " %";
    document.getElementById("description").innerText =
      data.weather[0].description;
  } catch (error) {
    console.log("an error occured", error);
  }
}

async function getGeoLoc(city) {
  try {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},limit=1&appid=${API_KEY}`;
    const response = await fetch(URL);
    const data = await response.json();

    const lat = data[0].lat;
    const lon = data[0].lon;

    return { lat, lon };
  } catch (error) {
    console.log(error);
    return {};
  }
}

// function makeVisiblity(){
//     console.log("visiblity working");

//     const div = document.getElementById("main-visiblity");
//     if(div.style.display==="none"){
//         div.style.display= "block";
//     }
// }
