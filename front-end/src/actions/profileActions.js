import axios from "axios";

import {
	GET_PROFILE,
	GET_PROFILES,
	PROFILE_LOADING,
	CLEAR_CURRENT_PROFILE,
	GET_ERRORS,
	SET_CURRENT_USER,
} from "./types";

// Geting profile of current authenticated user
export const getCurrentProfile = () => (dispatch) => {
	dispatch(setProfileLoading());
	axios
		.get("/api/profile")
		.then((res) =>
			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_PROFILE,
				payload: {},
			})
		);
};

// Geting profile by uniqueId
export const getProfileByUniqueId = (uniqueId) => (dispatch) => {
	dispatch(setProfileLoading());
	axios
		.get(`/api/profile/uniqueId/${uniqueId}`)
		.then((res) =>
			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_PROFILE,
				payload: null,
			})
		);
};

// Creating Profile
export const createProfile = (profileData, history) => (dispatch) => {
	axios
		.post("/api/profile", profileData)
		.then((res) => history.push("/dashboard"))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// Adding experience
export const addExperience = (expData, history) => (dispatch) => {
	axios
		.post("/api/profile/experience", expData)
		.then((res) => history.push("/dashboard"))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// Adding training
export const addTraining = (eduData, history) => (dispatch) => {
	axios
		.post("/api/profile/training", eduData)
		.then((res) => history.push("/dashboard"))
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// Deleting Experience
export const deleteExperience = (id) => (dispatch) => {
	axios
		.delete(`/api/profile/experience/${id}`)
		.then((res) =>
			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// Deleting training
export const deleteTraining = (id) => (dispatch) => {
	axios
		.delete(`/api/profile/training/${id}`)
		.then((res) =>
			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// Geting all profiles
export const getProfiles = () => (dispatch) => {
	dispatch(setProfileLoading());
	axios
		.get("/api/profile/all")
		.then((res) =>
			dispatch({
				type: GET_PROFILES,
				payload: res.data,
			})
		)
		.catch((err) =>
			dispatch({
				type: GET_PROFILES,
				payload: null,
			})
		);
};

// Deleting account & profile
export const deleteAccount = () => (dispatch) => {
	if (window.confirm("Are you sure? This can NOT be undone!")) {
		axios
			.delete("/api/profile")
			.then((res) =>
				dispatch({
					type: SET_CURRENT_USER,
					payload: {},
				})
			)
			.catch((err) =>
				dispatch({
					type: GET_ERRORS,
					payload: err.response.data,
				})
			);
	}
};

//Loading Profile
export const setProfileLoading = () => {
	return {
		type: PROFILE_LOADING,
	};
};

// Clearing profile
export const clearCurrentProfile = () => {
	return {
		type: CLEAR_CURRENT_PROFILE,
	};
};
