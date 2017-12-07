import { sendServer } from './base';

export const login = (name, password) => {
	var api = '/login';
	var data = {
		teleNum: name,
		password: password
	}
	const authentication = btoa(`${name}:${password}`);
	return sendServer({
		api,
		data,
		Authorization: `Basic ${authentication}`
	});
}

export const register = (name, password) => {
	var api = '/register';
	var data = {
		teleNum: name,
		password: password
	}
	return sendServer({
		api,
		data,
	});
}


export default {
	login,
	register
}