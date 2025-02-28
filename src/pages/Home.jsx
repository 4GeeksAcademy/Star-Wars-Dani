import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="home-conteiner">

			<h1>Star Wars!</h1>
			<p>
				<img src="https://raw.githubusercontent.com/4GeeksAcademy/Star-Wars-Dani/refs/heads/master/src/components/Images/StarWars.png " />
			</p>
		</div>
	);
}; 