import { combineReducers } from 'redux-immutablejs';
import login from './login'
import share from './share'
import courseList from './course-list'
//辅助函数,把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore。
const rootReducer = combineReducers({
    login,
    courseList,
    share
});
export default rootReducer;
