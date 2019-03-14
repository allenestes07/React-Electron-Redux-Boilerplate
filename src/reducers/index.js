import {combineReducers} from 'redux';
import ActiveUserReducer from './users';
import getWeather from './weather';

const reducers = combineReducers({
    users: ActiveUserReducer,
    weather: getWeather
});

export default reducers;
