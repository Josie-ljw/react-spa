import { sendServer } from './base';

export const getCourseList = () => {
	var api = '/articles';
	return sendServer({
		api,
    method: 'GET'
	});
}

export default {
	getCourseList
}