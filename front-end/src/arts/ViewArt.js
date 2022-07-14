import React, { useState, useEffect } from "react";
import { useStore } from "react-redux";
import { read, diffDays } from "../actions/art";
import moment from "moment";
import { useSelector } from "react-redux";

const ViewArt = ({ match, history }) => {
	const [art, setArt] = useState({});
	const [image, setImage] = useState("");

	const { auth } = useSelector((state) => ({ ...state }));

	useEffect(() => {
		artist();
	}, []);

	const artist = async () => {
		let res = await read(match.params.artistId);
		setArtist(res.data);
		setImage(`${process.env.REACT_APP_API}/art/image/${res.data._id}`);
	};

	const handleClick = (e) => {
		e.preventDefault();
		if (!auth) history.push("/login");
		console.log("checkout with stripe");
	};

	return (
		<>
			<div className="container-fluid bg-secondary p-5 text-center">
				<h1>{art.title}</h1>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<br />
						<img src={image} alt={art.title} className="img img-fluid m-2" />
					</div>

					<div className="col-md-6">
						<br />
						<b>{art.content}</b>
						<p className="alert alert-info mt-3">${art.price}</p>
						<p className="card-text">
							<span className="float-right text-primary">
								for {diffDays(art.from, art.to)}{" "}
								{diffDays(art.from, art.to) <= 1 ? " day" : " days"}
							</span>
						</p>
						<p>
							From <br />{" "}
							{moment(new Date(art.from)).format("MMMM Do YYYY, h:mm:ss a")}
						</p>
						<p>
							To <br />{" "}
							{moment(new Date(art.to)).format("MMMM Do YYYY, h:mm:ss a")}
						</p>
						<i>Posted by {art.postedBy && art.postedBy.name}</i>
						<br />
						<button
							onClick={handleClick}
							className="btn btn-block btn-lg btn-primary mt-3">
							{auth && auth.token ? "Book Now" : "Login to Book"}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ViewArt;
