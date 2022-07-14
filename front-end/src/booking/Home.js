import { useState, useEffect } from "react";
import { allArts } from "../actions/art";
import SmallCard from "../components/cards/SmallCard";

const Home = () => {
	const [arts, setArts] = useState([]);

	useEffect(() => {
		loadAllarts();
	}, []);

	const loadAllarts = async () => {
		let res = await allArts();
		setArts(res.data);
	};

	return (
		<>
			<div className="container-fluid bg-secondary p-5 text-center">
				<h1>All Arts</h1>
			</div>
			<div className="container-fluid">
				<br />
				{arts.map((h) => (
					<SmallCard key={h._id} h={h} />
				))}
			</div>
		</>
	);
};

export default Home;
