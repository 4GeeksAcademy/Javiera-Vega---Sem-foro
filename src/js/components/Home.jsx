import React from "react";
import { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {

	const [luz, setLuz] = useState("alumbrado");

	const cambioLuz = () => {
		setLuz(luz === "alumbrado" ? "" : "alumbrado");
	};

	return (
		<div className="container">
			<div className="sujetador"></div>
			<div className="caja-semaforo">
				<div className={`circulo-rojo ${luz}`}
					onClick={cambioLuz}>
				</div>
				<div className={`circulo-amarillo ${luz}`}
					onClick={cambioLuz}
				></div>
				<div className={`circulo-verde ${luz}`}
					onClick={cambioLuz}>
				</div>
			</div>
		</div>
	);
};

export default Home;