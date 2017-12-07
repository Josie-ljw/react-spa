import shareServer from 'servers/share';
import {browserHistory} from 'react-router';


const Path = 'share';

export const ADD_SHARE = `${Path}/ADD_SHARE`;
export const GET_SHARE_LIST = `${Path}/GET_SHARE_LIST`;

export const addShareAction = (obj,token) => {
	return {
		type: ADD_SHARE,
		promise: shareServer.addArticle(obj,token)
	}
};

export const getShareListAction = () => {
	return {
		type: GET_SHARE_LIST,
		promise: shareServer.getArticles()
	}
};

export function addShare(obj,token) {
	console.log('addShare');
	return (dispatch) => {
		getShareData(dispatch, obj,token).then(function (data) {
      console.log(data);
			// browserHistory.push('/')
		})
	}
}

function getShareData(dispatch, obj,token) {
	return new Promise((resolve, reject) => {
		const action = addShareAction(obj,token);
		dispatch(action);
		action.promise.then(function (data) {
			resolve(data)
		})
	})
};

