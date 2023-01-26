const apiKey = 'f2bf4e7c084a72ece54b98729f2b5cf1'; // replace with your own API key

function getWeather() {
   const city = document.getElementById('city-input').value;
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
     .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;
 		// display temperature in celsius
 		document.getElementById('temperature').innerHTML ='Temerature ' + kelvinToCelsius(temperature).toFixed(1) + '&#8451;';
        // display sunrise
        document.getElementById('sunrise').innerHTML ='Sunrise ' + new Date(sunrise * 1000).toLocaleTimeString();
        // display sunset
        document.getElementById('sunset').innerHTML ='Sunset ' + new Date(sunset * 1000).toLocaleTimeString();
	})
	.catch(error => console.log(error));
}

function kelvinToCelsius(kelvin) {
 	return kelvin - 273.15;
}

document.getElementById("city-input").addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
	  event.preventDefault();
	  // call your function here
	  getWeather();
	}
  });

  // Get the loading element
var loading = document.getElementById("loading");
// Get the content element
var content = document.getElementById("content");

// When the page is loading, show the loading animation and hide the content
window.addEventListener("load", function() {
  loading.style.display = "block";
  content.style.display = "none";
  setTimeout(function() {
    loading.style.display = "none";
    content.style.display = "block";
  }, 1500);
});