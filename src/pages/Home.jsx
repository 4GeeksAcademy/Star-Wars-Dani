import React from "react";
import Slider from "../components/Slider";
import { Layout  } from "./Layout";



const Home = () => {
	return (
		<div>

			<Layout />

			<h1>Star Wars</h1>

			<h2>Personajes</h2>
			<Slider dataType="characters" />

			<h2>Planetas</h2>
			<Slider dataType="planets" />

			<h2>Vehículos</h2>
			<Slider dataType="vehicles" />
		</div>
	);
};

export default Home;