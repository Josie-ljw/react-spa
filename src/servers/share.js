import {sendServer} from './base'

export const addArticle = (obj,token)=>{
	
	var api = '/admin/article/create';
	var data = obj
	console.log('addArticle'+ api);
	return sendServer({api, data,token});
}

export const getArticles = ()=>{
	var api = '/articles';
	return sendServer({api, data:null,method:'GET'});
}

export const getArticle= (id)=>{
	var api = `/articles/${id}`;

	return sendServer({api, data:null,method:'GET'});
}

export default  {
  addArticle,
	getArticles,
	getArticle
}