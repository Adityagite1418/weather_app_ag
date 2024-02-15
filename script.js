async function fetchWeatherData(cityname)  {
	let url `="https://api.openweathermap.org/data/2.5/weather?q=${cityname} &appid=e89faf2113a699c71423328e251d02df"`;
	const response = await fetch(url)
	const data= await response.json();
	console.log(data)
	// body...
}
// demo()
// e89faf2113a699c71423328e251d02df
function fetchcity(){
	let cityname=document.getElementById("cityname");
	if (cityname.value==="") {
		alert("Enter the city name")
	}else{ 
        fetchWeatherData(cityname.value);
        cityname.value=="";
	}
}