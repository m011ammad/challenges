// search section
let searchButton = document.querySelector(".search-button");
let searchInput = document.querySelector(".search-input");
// error display
let errorDisplay = document.querySelector(".error-display");
// display information
let weatherCity = document.querySelector(".weather-city");
let weatherTemp = document.querySelector(".weather-temp span");
let weatherDescription = document.querySelector(".weather-description");
let weatherSunrise = document.querySelector(".weather-sunrise span");
let weatherSunset = document.querySelector(".weather-sunset span");
let weatherHumidity = document.querySelector(".weather-humidity span");
let weatherPressure = document.querySelector(".weather-pressure span");
let weatherWind = document.querySelector(".weather-wind span");
let weatherSea = document.querySelector(".weather-sea span");
// 
let userInput = '';

class WeatherRequest {
    constructor(city, apiKey) {
        this.city = city;
        this.apiKey = apiKey;
    }

    fetchAPI() {
        let data = null;
        let url = 'https://api.openweathermap.org/data/2.5/weather?q='
        + this.city
        +'&units=metric'
        +'&appid=' + this.apiKey;

        fetch(url)
        .then(response => {
            if(response.status == 404) {
                return false;
            }
            return response.json();
        })
        .then(response => {
            // TODO: is this best practice? pass the data to another method?
            this.changeDOM(response);
        })
        .catch(error => {
            // add a span error under search box
            errorDisplay.innerHTML = "no results found!"
        })
    }

    changeDOM(data) {
        weatherCity.innerHTML = data.sys.country+ ' / ' + this.city.toUpperCase();
        weatherTemp.innerHTML = data.main.temp;
        weatherDescription.innerHTML = data.weather[0].description;
        // more data section DOM changer
        weatherSunrise.innerHTML = this.unixTimeConvertor(data.sys.sunrise);
        weatherSunset.innerHTML = this.unixTimeConvertor(data.sys.sunset);
        weatherHumidity.innerHTML = data.main.humidity;
        weatherPressure.innerHTML = data.main.pressure;
        // sometimes sealevel is undefined !
        data.main.sea_level ? weatherSea.innerHTML = data.main.sea_level : weatherSea.innerHTML = " - ";
        weatherWind.innerHTML = data.wind.speed;
    }

    unixTimeConvertor(time) {
        let unixTimeStamp = time;
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        let date = new Date(unixTimeStamp * 1000);
        // Hours part from the timestamp
        let hours = date.getHours();
        // Minutes part from the timestamp
        let minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        let seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        let formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        return formattedTime;
    }
}

// default city
let WR = new WeatherRequest('tehran', "391efff1d8a3b30d9aeb6e1533c01c83");
WR.fetchAPI();

// by click on button
searchButton.addEventListener('click', e => {
    // clear errors
    errorDisplay.innerHTML = "";
    // get user input
    userInput = searchInput.value;
    // create an object and call method
    let WR = new WeatherRequest(userInput, "391efff1d8a3b30d9aeb6e1533c01c83");
    WR.fetchAPI();
    // clear input
    searchInput.value = "";
})

//by press enter
searchInput.addEventListener('keyup', e => {
    if (e.key == "Enter") {
      // clear errors
      errorDisplay.innerHTML = "";
      // get user input
      userInput = searchInput.value;
      // create an object and call method
      let WR = new WeatherRequest(userInput,"391efff1d8a3b30d9aeb6e1533c01c83");
      WR.fetchAPI();
      // clear input
      searchInput.value = "";
    }
})