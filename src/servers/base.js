require('es6-promise').polyfill();
import { Promise } from 'es6-promise';
import fetch from 'isomorphic-fetch'

export function sendServer({
	api, data, method = 'POST', Authorization = null,token = null
}) {
	let host = 'http://localhost:9000'
	let option = {
		method: method,
		body: data ? JSON.stringify(data) : null,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
			// 'X-FEZ-API-Token': loaction token
		}
	};
	if (Authorization) {
		option['headers'].Authorization = Authorization;
	}
	if (token) {
		option['headers']['X-FEZ-API-Token'] = token;
	}

	console.log({api: host + api});
	return new Promise((resolve, reject) => {
		fetch(host + api, option)
			.then(response => {
				console.log({'response': response})
				response.json().then(function (json) {
					if (response.status >= 200 && response.status < 300) {
						resolve(json);
					} else {
						reject(json);
					}
				})
			})
			.catch(error => {
				reject(error);
			});
	});

}