import React, { useState } from "react";

//create your first component
const Home = () => {

	const [luz, setLuz] = useState("");
	const [luzPurple, setLuzPurple] = useState(true)

	const cambioLuz = (color) => {
		setLuz(color);
	};

	return (
		<div className="container">
			<div className="bra-black"></div>
			<div className="box-traffic-light">
				<div className={`circle-red ${luz == "red" ? "alumbrado" : ""}`}
					onClick={() => cambioLuz("red")}>
				</div>
				<div className={`circle-yellow ${luz == "yellow" ? "alumbrado" : ""}`}
					onClick={() => cambioLuz("yellow")}
				></div>
				<div className={`circle-green ${luz == "green" ? "alumbrado" : ""}`}
					onClick={() => cambioLuz("green")}>
				</div>

				{ luzPurple ?
					<div className={`circle-purple ${luz == "purple" ? "alumbrado" : ""}`}
					onClick={() => cambioLuz("purple")}>
				</div> : ""}
			</div>
			<div className="mt-5">
			<button className="btn btn-dark"
					onClick={() => setLuzPurple(!luzPurple)}>
					Add color purple</button>
			</div>
		
		</div>
	);
};

export default Home;