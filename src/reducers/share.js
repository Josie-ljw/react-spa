import {fromJS} from 'immutable';
import {createReducer} from 'redux-immutablejs';
import {GET_SHARE_LIST} from '../actions/share';

const initState = fromJS({
  lists: []
});

export default createReducer(initState, {
    [GET_SHARE_LIST]: (state, action) => {
        return state.merge({...action.data});
    }
})