import {fromJS} from 'immutable';
import {createReducer} from 'redux-immutablejs';
import {SET_LOGIN_STATE} from '../actions/login';

const initState = fromJS({
    success:0,
    body: {
      userId: '',
      userName: ''
    }
});

export default createReducer(initState, {
    [SET_LOGIN_STATE]: (state, action) => {
        return state.merge({...action.data});
    }
})