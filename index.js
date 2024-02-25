const api_key = "1210254713360736499061f17ac801b0";
async function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ cityName}&appid=${api_key}&units=metric`;
    // weather.innerHTML = `<h2> Loading... <h2>`

    let data = await fetch(url);
    let finaldata = await data.json();
    // console.log(data);
    if (data.cod == 200) {
        return finaldata
    }else{
        return "! City not found... "
    }
    
      
  }
//  
  (async () => {
    const weatherData = await getWeather("baripasssda");
    console.log(weatherData);
  })();

