import {combineReducers} from 'redux';
import ActiveUserReducer from './users';

const reducers = combineReducers({
    users: ActiveUserReducer
});

export default reducers;
