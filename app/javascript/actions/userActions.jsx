import axios from "axios";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT } from "./types";

export const loginUser = (user) => async (dispatch) => {
	const login_url = "http://localhost:3001/api/v1/login";
	// dispatch(loginRequest);

	// try {
	// 	const { data } = (await axios.post(login_url, user)) || {};

	// 	// localStorage.setItem("token", JSON.stringify(data.token));
	// 	console.log(loginSuccess(data.user))
 //    dispatch(loginSuccess(data.user));
	// } catch (err) {
	// 	dispatch(loginFailure({ login: err.response.data }));
	// }
	axios
		.post(login_url, user)
		.then(res => return res.json())
		.then(res => {
			console.log(res)
			dispatch(loginSuccess(res.user))
		})
		.catch(err => loginFailure(err))
}

const loginRequest = () => {
	type: LOGIN_REQUEST
}

const loginSuccess = (user) => {
	type: LOGIN_SUCCESS,
	user
}

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});
