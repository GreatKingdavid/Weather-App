const apiKey = "1c16cd3d1f3fc729d817778401ad35f4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=lagos";

const checkWeather = async () => {
    
  const res = await fetch(apiUrl + `&appId =${apiKey}`);
  let data = await res.json();
  console.log(data);
};

checkWeather();
