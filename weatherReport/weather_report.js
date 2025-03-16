function showWeatherDetails(event){
    event.preventDefault();
    const cityName = document.getElementById('city').value;
    const API_key = 'b18d1724769a284253ca3038bfea3702';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`;
    //const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeduRIComponent(city)}&appid=${apiKey}&units=metric`;
    console.log(apiURL);
    fetch(apiURL)
        .then(response =>
            response.json())
        .then(data => {
            const weather = document.querySelector('div');
            if (!weather) {
                console.error("Element with ID 'weatherInfo' not found in the document.");
                return;
            }

            weather.innerHTML = `<h2>Weather in ${cityName}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`;
        })
        

}
document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);