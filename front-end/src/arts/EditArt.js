import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { DatePicker, Select } from "antd";
import { read, updateArt } from "../actions/Art";
import { useSelector } from "react-redux";
import ArtEditForm from "../components/forms/ArtEditForm";

const { Option } = Select;

const EditArt = ({ match }) => {
	const { auth } = useSelector((state) => ({ ...state }));
	const { token } = auth;

	const [values, setValues] = useState({
		artName: "",
		artType: "",
		location: "",
		price: "",

		postedBy: "",
	});
	const [image, setImage] = useState("");
	const [preview, setPreview] = useState("");
	const { artName, artType, price, postedBy, location } = values;

	useEffect(() => {
		Artist();
	}, []);

	const Artist = async () => {
		let res = await read(match.params.ArtId);
		setValues({ ...values, ...res.data });
		setPreview(`${process.env.REACT_APP_API}/Art/image/${res.data._id}`);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let ArtData = new FormData();
		ArtData.append("artName", artName);
		ArtData.append("artType", artType);
		ArtData.append("location", location);
		ArtData.append("price", price);
		image && ArtData.append("image", image);
		ArtData.append("postedBy", postedBy);

		try {
			let res = await updateArt(token, ArtData, match.params.ArtId);
			console.log("Art UPDATE RES", res);
			toast.success(`${res.data.artName} is updated`);
		} catch (err) {
			console.log(err);
			toast.error(err.response.data.err);
		}
	};

	const handleImageChange = (e) => {
		setPreview(URL.createObjectURL(e.target.files[0]));
		setImage(e.target.files[0]);
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<>
			<div className="container-fluid bg-secondary p-5 text-center">
				<h2>Edit Art</h2>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-10">
						<br />
						<ArtEditForm
							values={values}
							setValues={setValues}
							handleChange={handleChange}
							handleImageChange={handleImageChange}
							handleSubmit={handleSubmit}
						/>
					</div>
					<div className="col-md-2">
						<img
							src={preview}
							alt="preview_image"
							className="img img-fluid m-2"
						/>
						<pre>{JSON.stringify(values, null, 4)}</pre>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditArt;
