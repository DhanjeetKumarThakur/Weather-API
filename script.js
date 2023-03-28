/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather?";
  const full_url = `${URL}q=${city}&appid=${API_KEY}&units=imperial`
  //HINT: Use template literals to create a url with input and an API key
  
  return fetch(full_url)
            .then(response => response.json())
            .then(data => data)
            .catch(err => console.log(err))
  
  
  
    //the above code can also be written as
  /*  
  const getData = async () => {
    const response = await fetch(full_url)
    const data = await response.json()
    //console.log(data)
    //console.log("Min Temp :", data.main.temp_min)
    
    showWeatherData(data)
  }
  
  getData() */
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async() => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  const data = await getWeatherData(city)
  showWeatherData(data)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (data) => {
  //CODE GOES HERE

  document.getElementById('city-name').innerText = data.name
  document.getElementById('weather-type').innerText = data.weather[0].main
  document.getElementById('temp').innerText = data.main.temp
  document.getElementById('min-temp').innerText = data.main.temp_min
  document.getElementById('max-temp').innerText = data.main.temp_max
}
