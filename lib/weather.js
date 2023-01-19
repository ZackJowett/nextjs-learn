// API calls openweather.com for weather data

const KEY = "99a57d22f978c912b86c56740e224191";

export async function getWeatherData(lat, lon) {
	// let location = null;
	let weatherData = null;

	// Get lat long of city
	// try {
	// 	await fetch(
	// 		`http://api.openweathermap.org/geo/1.0/direct?q=${CITY}&appid=${KEY}`
	// 	)
	// 		.then((res) =>
	// 			// location = res.json();
	// 			res.json()
	// 		)
	// 		.then((data) => (location = data[0]));
	// } catch (e) {
	// 	console.log(
	// 		"Error getting location (lat/lon) data from openweathermap: ",
	// 		e
	// 	);
	// }

	try {
		await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`
		)
			.then((res) => res.json())
			.then((data) => (weatherData = data));
	} catch (e) {
		console.log("error getting weather data from openweathermap: ", e);
	}

	return { location: location, data: weatherData };
}
