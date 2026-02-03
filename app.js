const city = document.querySelector("#userCity");
const searchBtn = document.querySelector("#searchBtn");
const apiKey = "1c16cd3d1f3fc729d817778401ad35f4";
const temperature = document.querySelector(".temp");
const userCityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const img = document.querySelector("#weatherImg");
const loading = document.querySelector("#loading")

const main = async () => {
  // 1. Keep the checkWeather function here (The Tool)
  const checkWeather = async (cityName) => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;
      const res = await fetch(apiUrl);
      const data = await res.json();

      if (res.status == 404) {
        alert("Invalid city name");
        return;
      }

      return data;
    } catch (error) {
      console.log("No connection");
      return NaN;
    }
  };

  searchBtn.addEventListener("click", async () => {
    loading.style.display = "block";
    temperature.style.display = "none";
    userCityName.style.display = "none";
    

    const userCity = city.value;

    const weatherData = await checkWeather(userCity);

    loading.style.display = "none";
    temperature.style.display = "block";
    userCityName.style.display = "block";

    if (weatherData) {
      temperature.textContent = `${Math.round(weatherData.main.temp)}°C`;
      console.log(weatherData);
      userCityName.textContent = userCity;
      humidity.textContent = `${Math.round(weatherData.main.humidity)}%`;
      wind.textContent = `${Math.round(weatherData.wind.speed)}km/hr`;
    }

    if (weatherData.weather[0].main == "Snow") {
      img.src = "img/snow.png";
    } else if (weatherData.weather[0].main == "Clear") {
      img.src = "img/clear.png";
    } else if (weatherData.weather[0].main == "Clouds") {
      img.src = "img/clouds.png";
    } else if (weatherData.weather[0].main == "Drizzle") {
      img.src = "img/drizzle.png";
    } else if (weatherData.weather[0].main == "Rain") {
      img.src = "img/rain.png";
    } else if (weatherData.weather[0].main == "Mist") {
      img.src = "img/mist.png";
    }

    city.value = "";
  });

  city.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      searchBtn.click();
    }
  });
};

main();
