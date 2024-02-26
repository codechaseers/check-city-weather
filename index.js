const api_key = "1210254713360736499061f17ac801b0";
export async function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ cityName}&appid=${api_key}&units=metric`;
    // weather.innerHTML = `<h2> Loading... <h2>`

    let data = await fetch(url);
    let finaldata = await data.json();
    // console.log(finaldata);
    if (finaldata.cod == 200) {
        return finaldata
    } 
    
    else {
      return "! City Not Found..."
    }
      
  }
//  
  (async () => {
    const weatherData = await getWeather("goa");
    console.log(weatherData);
  })();

