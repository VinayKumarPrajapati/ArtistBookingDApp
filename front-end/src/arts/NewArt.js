import { useState } from "react";
import { toast } from "react-toastify";
import { DatePicker, Select } from "antd";
import { createArt } from "../actions/art";
import { useSelector } from "react-redux";
import ArtCreateForm from "../components/forms/ArtCreateForm";

const { Option } = Select;

const NewArt = () => {
	const { auth } = useSelector((state) => ({ ...state }));
	const { token } = auth;
	const [values, setValues] = useState({
		artName: "",
		artType: "",
		location: "",
		price: "",
		postedBy: "",
	});
	const [preview, setPreview] = useState("");
	const { artName, artType, location, price, postedBy } = values;

	const handleSubmit = async (e) => {
		e.preventDefault();

		let artData = new FormData();
		artData.append("artName", artName);
		artData.append("artType", artType);
		artData.append("location", location);
		artData.append("price", price);
		location && artData.append("location", location);
		artData.append("postedBy", postedBy);

		console.log([...artData]);

		try {
			let res = await creatAart(token, artData);
			console.log("Art CREATE RES", res);
			toast.success("New Art is posted");
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		} catch (err) {
			console.log(err);
			toast.error(err.response.data);
		}
	};

	const handlelocationChange = (e) => {
		setPreview(URL.createObjectURL(e.target.files[0]));
		setValues({ ...values, location: e.target.files[0] });
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<>
			<div className="container-fluid bg-secondary p-5 text-center">
				<h2>Add Art</h2>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-10">
						<br />
						<ArtCreateForm
							values={values}
							setValues={setValues}
							handleChange={handleChange}
							handlelocationChange={handlelocationChange}
							handleSubmit={handleSubmit}
							location={location}
							setLocation={setLocation}
						/>
					</div>
					<div className="col-md-2">
						<img
							src={preview}
							alt="preview_location"
							className="img img-fluid m-2"
						/>
						<pre>{JSON.stringify(values, null, 4)}</pre>
						{JSON.stringify(location)}
					</div>
				</div>
			</div>
		</>
	);
};

export default NewArt;
