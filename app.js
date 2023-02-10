var key = `14951c93f3d11e8ac8bed96dd90e8bc7`;

let cityref = document.querySelector(".city");
let inputArea = document.getElementById("cityValue");
let searchBtn = document.getElementById("searchButton");
let errorStyle = document.querySelector('.input-div');
let errorBackground = document.querySelector('.weather-container');


// show Weather here
let cityShow = document.getElementById("city-Show");


let getWeather = () => {
  let cityName = inputArea.value;
console.log(cityName.lenght)
  if (cityName.lenght == 0) {
	inputArea.value = 'Please enter a city name</h3>';
  } else {
   
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
	inputArea.innerHTML = '';
	   fetch(url)
      .then((response) => response.json())
      .then((data) => {
			 document.getElementById("city-Show").innerHTML = data.name;
			 console.log(data.weather[0].icon)
			 document.getElementById("weather-icon").src =`https://openweathermap.org/img/w/${data.weather[0].icon}.png`
			 document.getElementById('wearther-main').innerHTML = data.weather[0].main;
			 document.getElementById('wearther-dec').innerHTML = data.weather[0].description;
			 document.getElementById('min-weather').innerHTML = `${data.main.temp_min}&#176`;
			 document.getElementById('max-weather').innerHTML = `${data.main.temp_max}&#176`;
			 document.querySelector('.weather-degree').innerHTML = `${data.main.temp}&#176`;
			 errorStyle.classList.remove('active');
		     errorBackground.classList.remove('active');
	  })
      .catch(() => {
		errorStyle.classList.add('active');
		errorBackground.classList.add('active');
		cityShow.innerHTML = "City Not found";
	  });
  }
};

searchBtn.addEventListener('click', () =>{
	getWeather();
	cityShow.classList.toggle('animate__animated');
	cityShow.classList.toggle('animate__flipInX');
})



