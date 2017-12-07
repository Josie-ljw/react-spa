import courseServer from 'servers/course';
import { browserHistory } from 'react-router';

const Path = 'courseList';

export const GET_COURSE_LIST = `${Path}/GET_COURSE_LIST`;
export const SET_COURSE_LIST = `${Path}/SET_COURSE_LIST`;


export const getCourseListAction = () => {
  return {
    type: GET_COURSE_LIST,
    promise: courseServer.getCourseList()
  }
};

export const setCourseListAction = (data) =>{
  return {
    type: SET_COURSE_LIST,
    data
  }
}

export function getCourseList() {
  return (dispatch) => {
    getCourseListData(dispatch).then(function (data) {
      console.log(data);
      dispatch(setCourseListAction(data));
    })
  }
}

function getCourseListData(dispatch) {
  return new Promise((resolve, reject) => {
    const action = getCourseListAction();
    dispatch(action);
    action.promise.then(function (data) {
			resolve(data)
		})
  })
};

