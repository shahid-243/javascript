document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const searchBox = document.createElement('input');
    searchBox.type = "text";
    searchBox.placeholder = 'Enter citry...'
    searchBox.id = 'search-box';

    const searchBtn = document.createElement('button');
    searchBtn.innerHTML = "Enter";
    searchBtn.id = 'search-btn';

    let weather = document.createElement('div');
    weather.id = 'weatherData';
  
    root.append(searchBox);
    root.append(searchBtn);
    root.append(weather);

    root.style.backgroundColor = '#e0ffff';
    root.style.padding = '20px';
    root.style.borderRadius = '5px';
    root.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    root.style.textAlign = 'center';
    root.style.margin = 'auto';

    root.style.width = '70vh';
    root.style.height = '50vh';

    searchBox.style.padding = '10px';
    searchBox.style.width = '200px';
    searchBox.style.marginRight = '10px'
    searchBox.style.backgroundColor = '#f0f8ff'

    searchBtn.style.padding = '10px 20px';
    searchBtn.style.backgroundColor = '#007bff';
    searchBtn.style.color = '#fff';
    searchBtn.style.border = 'none';
    searchBtn.style.borderRadius = '5px';
    searchBtn.style.cursor = 'pointer';


    searchBtn.addEventListener('click', () => {
        const location = searchBox.value;
        if (location.trim() !== '') {
            fetchData(location)
                .then((data) => {
                    // Get the current temperature, weather condition, and humidity from the data object
                    let temperature = Math.round(data.main.temp);
                    let condition = data.weather[0].description;
                    let humidity = data.main.humidity;
                    let cityName = data.name;



                    // Display the weather data in the HTML element
                    weatherData.innerHTML = `<h2>${cityName}</h2> <p>Temperature: ${temperature}°C</p> <p>Condition: ${condition}</p> <p>Humidity: ${humidity}%</p>`;
                });
        } else {
               alert("Please enter a valid city name")
        }

    });

    function fetchData(location) {
        const apiKey = 'e6bcfb5b70f050496f6a66658257b4d5';
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            });
    }

});