import loginServer from 'servers/login';
import { browserHistory } from 'react-router';

const Path = 'login';

export const LOGIN = `${Path}/LOGIN`;
export const REGISTER = `/REGISTER`;
export const SET_LOGIN_STATE = `${Path}/SET_LOGIN_STATE`;

export const goLoginAction = (name, password) => {
	return {
		type: LOGIN,
		promise: loginServer.login(name, password)
	}
};

export const goRegisterAction = (name, password) => {
	return {
		type: REGISTER,
		promise: loginServer.register(name, password)
	}
};

export const setLoginStateAction = (data) => {
	return {
		type: SET_LOGIN_STATE,
		data
	}
}

export function goLogin(name, password) {
	return (dispatch) => {
		getData(dispatch, name, password,goLoginAction).then(function (data) {
			dispatch(setLoginStateAction(data));
			console.log('login:',data);

			browserHistory.push('/share')
		})
	}
}

export function goRegister(name, password) {
	return (dispatch) => {
		getData(dispatch, name, password,goRegisterAction).then(function (data) {
			console.log(data);
		})
	}
}

function getData(dispatch, name, password,actionType) {
	return new Promise((resolve, reject) => {
		const action = actionType(name, password);
		dispatch(actionType);
		action.promise.then(function (data) {
			resolve(data);
		})
	})
};

