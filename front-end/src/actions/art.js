import axios from "axios";

export const createart = async (token, data) =>
	await axios.post(`${process.env.REACT_APP_API}/create-art`, data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

export const allArts = async () =>
	await axios.get(`${process.env.REACT_APP_API}/arts`);

export const diffArtDays = (from, to) => {
	const day = 24 * 60 * 60 * 1000;
	const start = new Date(from);
	const end = new Date(to);
	const difference = Math.round(Math.abs((start - end) / day));
	return difference;
};

export const sellArts = async (token) =>
	await axios.get(`${process.env.REACT_APP_API}/sell-arts`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

export const deleteArt = async (token, artId) =>
	await axios.delete(`${process.env.REACT_APP_API}/delete-art/${artId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

export const read = async (artId) =>
	await axios.get(`${process.env.REACT_APP_API}/art/${artId}`);

export const updatArt = async (token, data, artId) =>
	await axios.put(`${process.env.REACT_APP_API}/update-art/${artId}`, data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
