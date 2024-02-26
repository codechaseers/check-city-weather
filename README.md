
 # `check-city-weather`

`check-city-weather` is a simple, easy-to-use NPM package that provides detailed weather information for any city globally. Leveraging a comprehensive weather API, this package delivers current weather conditions, forecasts, temperature, humidity, and more, directly to your application.

## Features

- Get current weather details for any city.
- Includes temperature (Celsius/Fahrenheit), humidity, weather conditions, wind speed, and more.
- Simple and straightforward API.
- Lightweight and fast.

## Installation

To use `npm i check-city-weather` in your project, run:

## Intigration/Demo
```bash
import { getWeather } from "check-city-weather"
import { React, useState } from "react"

const Checkweather = () => {
    const [city, setCity] = useState("baripada")
    // you can put default city name
    const [weather, setweather] = useState()

    //onclick function for get data
    async function Check(city) {
        console.log(city);
        let data = await getWeather(city)
        console.log(data);
        setweather(data)

    }
    return (
        <>
            <h1>Hand detact Using Tensaflow AI</h1>
            <input type="text" placeholder="Enter city name " onChange={(e) => { setCity(e.target.value) }} />
            <button onClick={() => Check(city)} className="btn  btn-primary mx-2">Check Weather</button>
            <h2>{weather.name && weather.name}</h2>
            <h2>{weather.main && weather.main.temp}</h2>
            
        </>
    )
}
export default Checkweather
```
## Author

- **SUDHANSHU SHEKHAR OJHA 😎** - *Initial work* 👉🏻 [Check Me Out](https://github.com/codechaseers)



