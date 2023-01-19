import Layout from "../components/layout";
import { getWeatherData } from "../lib/weather";

// Pre-rendering open weather api call
export async function getStaticProps() {
	const weatherData = await getWeatherData();

	return {
		props: { weatherData },
	};
}

// Export of page
export default function Weather({ weatherData }) {
	return (
		<Layout>
			<section>
				<h1>Weather</h1>
				<h3>Temperature is {weatherData.main.temp}</h3>
			</section>
		</Layout>
	);
}
