import { useState, useEffect } from "react";
import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeOutlined } from "@ant-design/icons";
import { createConnectAccount } from "../actions/stripe";
import { artist, deleteArt } from "../actions/art";
import { toast } from "react-toastify";
import SmallCard from "../components/cards/SmallCard";

const DashboardArtist = () => {
	const { auth } = useSelector((state) => ({ ...state }));
	const [arts, setArts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		loadArtist();
	}, []);

	const loadArtist = async () => {
		let { data } = await artist(auth.token);
		setArts(data);
	};

	const handleClick = async () => {
		setLoading(true);
		try {
			let res = await createConnectAccount(auth.token);
			console.log(res);
			window.location.href = res.data;
		} catch (err) {
			console.log(err);
			toast.error("Stripe connect failed, Try again.");
			setLoading(false);
		}
	};

	const handleArtDelete = async (artId) => {
		if (!window.confirm("Are you sure?")) return;
		deleteArt(auth.token, artId).then((res) => {
			toast.success("Art Deleted");
			loadArtist();
		});
	};

	const connected = () => (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-10">
					<h2>Your Arts</h2>
				</div>
				<div className="col-md-2">
					<Link to="/art/new" className="btn btn-primary">
						+ Add New
					</Link>
				</div>
			</div>

			<div className="row">
				{arts.map((h) => (
					<SmallCard
						key={h._id}
						h={h}
						showViewMoreButton={false}
						owner={true}
						handleArtDelete={handleArtDelete}
					/>
				))}
			</div>
		</div>
	);

	const notConnected = () => (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6 offset-md-3 text-center">
					<div className="p-5 pointer">
						<HomeOutlined className="h1" />
						<h4>setup Payments for Art</h4>
						<p className="lead">Get Payments by using Stripe</p>
						<button
							disabled={loading}
							onClick={handleClick}
							className="btn btn-primary mb-3">
							{loading ? "Processing..." : "Setup Payouts"}
						</button>
						<p className="text-muted">
							<small>
								You'll be redirected to Stripe to complete artist onboarding
								process.
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<>
			<div className="container-fluid bg-secondary p-5">
				<ConnectNav />
			</div>

			<div className="container-fluid p-4">
				<DashboardNav />
			</div>

			{auth &&
			auth.user &&
			auth.user.stripe_artist &&
			auth.user.stripe_artist.charges_enabled
				? connected()
				: notConnected()}
		</>
	);
};

export default DashboardArtist;
