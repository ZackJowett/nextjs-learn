import Layout from "../components/layout";
import { getWeatherData } from "../lib/weather";
import DataModule from "../components/weather/dataModule";
import utils from "../styles/utils.module.scss";
import { useEffect } from "react";
import { useState } from "react";

// // Pre-rendering open weather api call
// export async function getStaticProps() {
// 	// get weather data for location
// 	// const weatherData = await getWeatherData();

// 	// return null;
// 	return {
// 		props: { weatherData },
// 	};
// }

// Export of page
export default function Weather() {
	const [weatherData, setWeatherData] = useState(0);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((pos) => {
				getWeatherData(pos.coords.latitude, pos.coords.longitude).then(
					(res) => {
						setWeatherData(res);
						console.log(res);
					}
				);
			});
		} else {
			setWeatherData(null);
		}
	}, []);

	return (
		<Layout>
			<section>
				{weatherData ? (
					<>
						<h1>Weather</h1>
						<DataModule
							title="Temperature"
							desc={"current temperature (celsius)"}
							metric={weatherData.data.main.temp}
						/>
						<DataModule
							title="Feels Like"
							desc={"what the temperature feels like (celsius)"}
							metric={weatherData.data.main.feels_like}
						/>
						<DataModule
							title="Wind"
							desc="wind speed (knots)"
							metric={weatherData.data.wind.speed}
						/>
					</>
				) : (
					<DataModule
						title="Location not available"
						desc="Please allow location to get weather data"
						metric=""
					/>
				)}
			</section>
		</Layout>
	);
}
