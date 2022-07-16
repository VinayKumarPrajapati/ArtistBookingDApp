import { useState } from "react";
import { currencyFormatter } from "../../actions/stripe";
import { diffArtDays } from "../../actions/art";
import { useNavigate, Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import OrderModal from "../modals/OrderModal";

const BookingCard = ({ art, session, orderedBy }) => {
	const [showModal, setShowModal] = useState(false);

	const history = useNavigate();
	return (
		<>
			<div className="card mb-3">
				<div className="row no-gutters">
					<div className="col-md-4">
						{art.image && art.image.contentType ? (
							<img
								src={`${process.env.REACT_APP_API}/art/image/${art._id}`}
								alt="default art image"
								className="card-image img img-fluid"
							/>
						) : (
							<img
								src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
								alt="default art image"
								className="card-image img img-fluid"
							/>
						)}
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h3 className="card-title">
								{art.title}{" "}
								<span className="float-right text-primary">
									{currencyFormatter({
										amount: art.price * 100,
										currency: "usd",
									})}
								</span>{" "}
							</h3>
							<p className="alert alert-info">{art.location}</p>
							<p className="card-text">{`${art.content.substring(
								1,
								200
							)}...`}</p>
							<p className="card-text">
								<span className="float-right text-primary">
									for {diffArtDays(art.from, art.to)}{" "}
									{diffArtDays(art.from, art.to) <= 1 ? " day" : " days"}
								</span>
							</p>
							<p className="card-text">{art.bed} bed</p>
							<p className="card-text">
								Available from {new Date(art.from).toLocaleDateString()}
							</p>

							{showModal && (
								<OrderModal
									session={session}
									orderedBy={orderedBy}
									showModal={showModal}
									setShowModal={setShowModal}
								/>
							)}

							<div className="d-flex justify-content-between h4">
								<button
									onClick={() => setShowModal(!showModal)}
									className="btn btn-primary">
									Show Payment info
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookingCard;
